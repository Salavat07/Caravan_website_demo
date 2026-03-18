<?php
declare(strict_types=1);

/*
 * Для продакшна на Beget желательно перевести отправку на SMTP после создания
 * корпоративной почты. Сейчас оставлен рабочий fallback через mail() для теста
 * на обычном PHP-хостинге без внешних библиотек и Composer.
 */

header('Content-Type: application/json; charset=UTF-8');

$to = 'info@caravan-logistics.com';
$fromEmail = 'info@caravan-logistics.com';
$fromName = 'Caravan Logistics Website';
$subject = 'Новая заявка с сайта Caravan Logistics';

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
    return str_replace(["\r", "\n"], '', $value);
};

$name = $clean((string) ($_POST['name'] ?? ''));
$phone = $clean((string) ($_POST['phone'] ?? ''));
$email = $clean((string) ($_POST['email'] ?? ''));
$message = $clean((string) ($_POST['message'] ?? ''));
$source = $clean((string) ($_POST['source'] ?? ''));
$company = $clean((string) ($_POST['company'] ?? ''));

if ($company !== '') {
    echo json_encode([
        'success' => false,
        'message' => 'Заявка отклонена',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($name === '' || $phone === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Поля "Имя" и "Телефон" обязательны',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Некорректный email',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$date = date('Y-m-d H:i:s');
$safeFromEmail = $sanitizeHeaderValue($fromEmail);
$safeFromName = $sanitizeHeaderValue($fromName);
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$encodedFromName = '=?UTF-8?B?' . base64_encode($safeFromName) . '?=';

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

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . $encodedFromName . ' <' . $safeFromEmail . '>',
    'Reply-To: ' . ($email !== '' ? $sanitizeHeaderValue($email) : $safeFromEmail),
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail(
    $to,
    $encodedSubject,
    $mailBody,
    implode("\r\n", $headers)
);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Не удалось отправить заявку. Попробуйте еще раз позже.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Заявка успешно отправлена',
], JSON_UNESCAPED_UNICODE);
