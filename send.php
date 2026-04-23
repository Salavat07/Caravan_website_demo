<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

$configPath = __DIR__ . '/config/mail_config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Не найден файл config/mail_config.php',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$config = require $configPath;
if (!is_array($config)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Некорректный формат config/mail_config.php',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$smtp = [
    'host' => (string) ($config['host'] ?? ''),
    'port' => (int) ($config['port'] ?? 465),
    'encryption' => (string) ($config['encryption'] ?? 'ssl'),
    'username' => (string) ($config['username'] ?? ''),
    'password' => (string) ($config['password'] ?? ''),
    'timeout' => (int) ($config['timeout'] ?? 20),
];

$to = (string) ($config['to'] ?? '');
$fromEmail = (string) ($config['fromEmail'] ?? '');
$fromName = 'Caravan Logistics Website';
$subject = 'Новая заявка с сайта Caravan Logistics';
$bitrixConfigPath = __DIR__ . '/config/bitrix_config.php';
$bitrixConfig = [];
if (is_file($bitrixConfigPath)) {
    $loadedBitrixConfig = require $bitrixConfigPath;
    if (is_array($loadedBitrixConfig)) {
        $bitrixConfig = $loadedBitrixConfig;
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Метод не поддерживается',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$clean = static function (string $value): string {
    $value = trim($value);
    return preg_replace('/\s+/u', ' ', $value) ?? '';
};

$sanitizeHeaderValue = static function (string $value): string {
    return trim(str_replace(["\r", "\n"], '', $value));
};

$sendJsonError = static function (int $statusCode, string $message): void {
    http_response_code($statusCode);
    echo json_encode([
        'success' => false,
        'message' => $message,
    ], JSON_UNESCAPED_UNICODE);
    exit;
};

$readSmtpResponse = static function ($socket): array {
    $response = '';
    $code = 0;

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;

        if (preg_match('/^(\d{3})([ -])/', $line, $matches) === 1) {
            $code = (int) $matches[1];
            if ($matches[2] === ' ') {
                break;
            }
        }
    }

    if ($response === '') {
        throw new RuntimeException('SMTP сервер не ответил');
    }

    return [$code, $response];
};

$expectSmtpCode = static function ($socket, array $expectedCodes, ?string $commandLabel = null) use ($readSmtpResponse): string {
    [$code, $response] = $readSmtpResponse($socket);

    if (!in_array($code, $expectedCodes, true)) {
        $prefix = $commandLabel !== null ? $commandLabel . ': ' : '';
        throw new RuntimeException($prefix . trim($response));
    }

    return $response;
};

$writeSmtpCommand = static function ($socket, string $command): void {
    $bytes = fwrite($socket, $command . "\r\n");
    if ($bytes === false) {
        throw new RuntimeException('Не удалось отправить команду SMTP');
    }
};

$sendViaSmtp = static function (
    array $config,
    string $recipient,
    string $senderEmail,
    string $senderName,
    string $mailSubject,
    string $mailBody,
    string $replyTo
) use ($sanitizeHeaderValue, $writeSmtpCommand, $expectSmtpCode): void {
    $host = (string) ($config['host'] ?? '');
    $port = (int) ($config['port'] ?? 0);
    $encryption = strtolower((string) ($config['encryption'] ?? 'ssl'));
    $username = (string) ($config['username'] ?? '');
    $password = (string) ($config['password'] ?? '');
    $timeout = (int) ($config['timeout'] ?? 20);

    if ($host === '' || $port <= 0 || $username === '' || $password === '' || $password === 'PASTE_GOOGLE_APP_PASSWORD_HERE') {
        throw new RuntimeException('SMTP не настроен: укажи логин, пароль приложения Google, host и port');
    }

    if (!filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
        throw new RuntimeException('Некорректный email получателя');
    }

    if (!filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
        throw new RuntimeException('Некорректный email отправителя');
    }

    if (!filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
        throw new RuntimeException('Некорректный Reply-To');
    }

    $transport = $encryption === 'ssl' ? 'ssl://' . $host : $host;
    $socket = @stream_socket_client(
        $transport . ':' . $port,
        $errorCode,
        $errorMessage,
        $timeout,
        STREAM_CLIENT_CONNECT
    );

    if (!is_resource($socket)) {
        throw new RuntimeException('Не удалось подключиться к SMTP: ' . $errorMessage . ' (' . $errorCode . ')');
    }

    stream_set_timeout($socket, $timeout);

    try {
        $expectSmtpCode($socket, [220], 'CONNECT');

        $hostname = gethostname();
        if (!is_string($hostname) || $hostname === '') {
            $hostname = 'localhost';
        }

        $writeSmtpCommand($socket, 'EHLO ' . $sanitizeHeaderValue($hostname));
        $expectSmtpCode($socket, [250], 'EHLO');

        if ($encryption === 'tls') {
            $writeSmtpCommand($socket, 'STARTTLS');
            $expectSmtpCode($socket, [220], 'STARTTLS');

            $cryptoEnabled = stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
            if ($cryptoEnabled !== true) {
                throw new RuntimeException('Не удалось включить TLS для SMTP');
            }

            $writeSmtpCommand($socket, 'EHLO ' . $sanitizeHeaderValue($hostname));
            $expectSmtpCode($socket, [250], 'EHLO after STARTTLS');
        }

        $writeSmtpCommand($socket, 'AUTH LOGIN');
        $expectSmtpCode($socket, [334], 'AUTH LOGIN');

        $writeSmtpCommand($socket, base64_encode($username));
        $expectSmtpCode($socket, [334], 'SMTP username');

        $writeSmtpCommand($socket, base64_encode($password));
        $expectSmtpCode($socket, [235], 'SMTP password');

        $writeSmtpCommand($socket, 'MAIL FROM:<' . $sanitizeHeaderValue($senderEmail) . '>');
        $expectSmtpCode($socket, [250], 'MAIL FROM');

        $writeSmtpCommand($socket, 'RCPT TO:<' . $sanitizeHeaderValue($recipient) . '>');
        $expectSmtpCode($socket, [250, 251], 'RCPT TO');

        $writeSmtpCommand($socket, 'DATA');
        $expectSmtpCode($socket, [354], 'DATA');

        $encodedSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';
        $encodedFromName = '=?UTF-8?B?' . base64_encode($sanitizeHeaderValue($senderName)) . '?=';
        $headers = [
            'Date: ' . date(DATE_RFC2822),
            'From: ' . $encodedFromName . ' <' . $sanitizeHeaderValue($senderEmail) . '>',
            'To: <' . $sanitizeHeaderValue($recipient) . '>',
            'Reply-To: <' . $sanitizeHeaderValue($replyTo) . '>',
            'Subject: ' . $encodedSubject,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
            'X-Mailer: PHP/' . phpversion(),
        ];

        $dataLines = array_map(
            static function (string $line): string {
                return preg_match('/^\./', $line) === 1 ? '.' . $line : $line;
            },
            preg_split("/\r\n|\r|\n/", implode("\r\n", $headers) . "\r\n\r\n" . $mailBody) ?: []
        );

        $mimeMessage = implode("\r\n", $dataLines) . "\r\n.";
        $writeSmtpCommand($socket, $mimeMessage);
        $expectSmtpCode($socket, [250], 'MESSAGE BODY');

        $writeSmtpCommand($socket, 'QUIT');
        $expectSmtpCode($socket, [221], 'QUIT');
    } finally {
        fclose($socket);
    }
};

$sendToBitrix = static function (
    array $config,
    string $name,
    string $phone,
    string $email,
    string $message,
    string $source,
    string $date
): int {
    $webhook = rtrim((string) ($config['webhook'] ?? ''), '/');
    $timeout = (int) ($config['timeout'] ?? 20);

    if ($webhook === '') {
        throw new RuntimeException('Bitrix24 не настроен: не указан webhook');
    }

    if (!filter_var($webhook, FILTER_VALIDATE_URL)) {
        throw new RuntimeException('Некорректный Bitrix24 webhook');
    }

    $comments = implode("\n", [
        'Новая заявка с сайта Caravan Logistics',
        '',
        'Имя: ' . $name,
        'Телефон: ' . $phone,
        'Email: ' . ($email !== '' ? $email : 'Не указан'),
        'Сообщение: ' . ($message !== '' ? $message : 'Не указано'),
        'Страница/источник: ' . ($source !== '' ? $source : 'Не указан'),
        'Дата и время: ' . $date,
    ]);

    $fields = [
        'TITLE' => (string) ($config['lead_title'] ?? 'Заявка с сайта Caravan Logistics'),
        'NAME' => $name,
        'SOURCE_ID' => (string) ($config['source_id'] ?? 'WEB'),
        'SOURCE_DESCRIPTION' => (string) ($config['source_description'] ?? 'Сайт Caravan Logistics'),
        'OPENED' => 'Y',
        'COMMENTS' => $comments,
        'PHONE' => [
            [
                'VALUE' => $phone,
                'VALUE_TYPE' => 'WORK',
            ],
        ],
    ];

    if ($email !== '') {
        $fields['EMAIL'] = [
            [
                'VALUE' => $email,
                'VALUE_TYPE' => 'WORK',
            ],
        ];
    }

    $payload = [
        'fields' => $fields,
        'params' => [
            'REGISTER_SONET_EVENT' => 'Y',
        ],
    ];

    $endpoint = $webhook . '/crm.lead.add.json';
    $postBody = http_build_query($payload);
    $responseBody = false;

    if (function_exists('curl_init')) {
        $curl = curl_init($endpoint);
        if ($curl === false) {
            throw new RuntimeException('Не удалось инициализировать Bitrix24 запрос');
        }

        curl_setopt_array($curl, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $postBody,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => $timeout,
            CURLOPT_TIMEOUT => $timeout,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/x-www-form-urlencoded; charset=UTF-8',
            ],
        ]);

        $responseBody = curl_exec($curl);
        $curlError = curl_error($curl);
        $httpCode = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        if ($responseBody === false) {
            throw new RuntimeException('Bitrix24 запрос не выполнен: ' . $curlError);
        }

        if ($httpCode < 200 || $httpCode >= 300) {
            throw new RuntimeException('Bitrix24 вернул HTTP ' . $httpCode);
        }
    } else {
        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded; charset=UTF-8\r\n",
                'content' => $postBody,
                'timeout' => $timeout,
            ],
        ]);

        $responseBody = @file_get_contents($endpoint, false, $context);
        if ($responseBody === false) {
            throw new RuntimeException('Bitrix24 запрос не выполнен');
        }
    }

    $response = json_decode((string) $responseBody, true);
    if (!is_array($response)) {
        throw new RuntimeException('Bitrix24 вернул некорректный ответ');
    }

    if (isset($response['error'])) {
        $description = (string) ($response['error_description'] ?? $response['error']);
        throw new RuntimeException('Bitrix24 ошибка: ' . $description);
    }

    $leadId = (int) ($response['result'] ?? 0);
    if ($leadId <= 0) {
        throw new RuntimeException('Bitrix24 не вернул ID лида');
    }

    return $leadId;
};

$name = $clean((string) ($_POST['name'] ?? ''));
$phone = $clean((string) ($_POST['phone'] ?? ''));
$email = $clean((string) ($_POST['email'] ?? ''));
$message = $clean((string) ($_POST['message'] ?? ''));
$source = $clean((string) ($_POST['source'] ?? ''));
$company = $clean((string) ($_POST['company'] ?? ''));

if ($company !== '') {
    $sendJsonError(400, 'Заявка отклонена');
}

if ($name === '' || $phone === '') {
    $sendJsonError(422, 'Поля "Имя" и "Телефон" обязательны');
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $sendJsonError(422, 'Некорректный email');
}

$date = date('Y-m-d H:i:s');
$replyTo = $email !== '' ? $sanitizeHeaderValue($email) : $fromEmail;
$lines = [
    'Новая заявка с сайта Caravan Logistics',
    '',
    'Имя: ' . $name,
    'Телефон: ' . $phone,
    'Email: ' . ($email !== '' ? $email : 'Не указан'),
    'Сообщение: ' . ($message !== '' ? $message : 'Не указано'),
    'Страница/источник: ' . ($source !== '' ? $source : 'Не указан'),
    'Дата и время: ' . $date,
];

$mailBody = implode("\r\n", $lines);
$leadId = null;
$bitrixError = null;
$smtpError = null;

try {
    $leadId = $sendToBitrix($bitrixConfig, $name, $phone, $email, $message, $source, $date);
} catch (Throwable $exception) {
    $bitrixError = $exception->getMessage();
}

if ($leadId !== null) {
    $mailBody .= "\r\n" . 'Bitrix24: создан лид #' . $leadId;
} elseif ($bitrixError !== null) {
    $mailBody .= "\r\n" . 'Bitrix24: ошибка создания лида — ' . $bitrixError;
}

try {
    $sendViaSmtp(
        $smtp,
        $to,
        $fromEmail,
        $fromName,
        $subject,
        $mailBody,
        $replyTo
    );
} catch (Throwable $exception) {
    $smtpError = $exception->getMessage();
}

if ($leadId === null && $smtpError !== null) {
    $sendJsonError(500, 'Не удалось отправить заявку. Проверь Bitrix24 webhook и Google SMTP.');
}

echo json_encode([
    'success' => true,
    'message' => $leadId !== null ? 'Заявка успешно отправлена в Bitrix24' : 'Заявка отправлена на почту',
    'lead_id' => $leadId,
], JSON_UNESCAPED_UNICODE);
