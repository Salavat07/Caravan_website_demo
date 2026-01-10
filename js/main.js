const translations = {
  ru: {
    common: {
      'nav.home': 'Главная',
      'nav.about': 'О нас',
      'nav.news': 'Новости',
      'nav.services': 'Услуги',
      'nav.contacts': 'Контакты',
      'lang.ru': 'RU',
      'lang.en': 'EN',
      'lang.zh': '中文',
      'service.sidebarTitle': 'Наши услуги',
      'footer.description':
        'Откройте для себя наш широкий спектр услуг по доставке грузов, включая наземные, морские и воздушные перевозки. Благодаря передовым технологиям и глобальной сети мы обеспечиваем вам товар прибывает в целости и сохранности и вовремя.',
      'footer.addressTitle': 'Наш адрес',
      'footer.addressLine1': 'г. Бишкек, ул. Чынгыза Айтматова 243, 3 этаж',
      'footer.addressLine2': '+996 555 11 33 33',
      'footer.addressLine3': 'Бишкек',
      'footer.addressLine4': 'Кыргызстан',
      'footer.contactsTitle': 'Наши социальные сети',
      'footer.email': 'info@caravan-logistics.com ',
      'footer.phone': '+996 555 11 33 33',
      'partners.eyebrow': 'Наши партнёры',
      'partners.title': 'Наши партнёры',
      'partners.text': 'Работаем с производителями техники, FMCG и строительными холдингами по всему СНГ.',
      'modal.title': 'Оставьте заявку',
      'modal.description':
        'Укажите контакты и кратко опишите груз — мы подготовим предложение и свяжемся в течение 15 минут.',
      'modal.label.name': 'Имя',
      'modal.placeholder.name': 'Как к вам обращаться',
      'modal.label.company': 'Компания',
      'modal.placeholder.company': 'Название компании',
      'modal.label.phone': 'Телефон',
      'modal.placeholder.phone': '+996 ___ ___ ___',
      'modal.label.email': 'Email',
      'modal.placeholder.email': 'you@example.com',
      'modal.label.details': 'Описание груза',
      'modal.placeholder.details': 'Маршрут, тип груза, сроки',
      'modal.submit': 'Отправить',
      'modal.hint': 'Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.',
      'modal.success': 'Спасибо! Мы получили заявку и уже работаем над ответом.',
      'modal.closeLabel': 'Закрыть окно',
      'email.validation.missingAt': 'Нет символа @',
      'email.validation.missingDot': 'Нет символа .',
      'email.validation.success': 'Все отлично!',
      'contact.widget.title': 'Всегда на связи',
      'contact.widget.text': 'Ответим в мессенджерах или по телефону.',
      'contact.widget.whatsapp.label': 'WhatsApp',
      'contact.widget.whatsapp.desc': 'Написать в мессенджер',
      'contact.widget.telegram.label': 'Telegram',
      'contact.widget.telegram.desc': 'Обсудить проект',
      'contact.widget.phone.label': '+996 555 11 33 33',
      'contact.widget.phone.desc': 'Позвонить напрямую',
      'contact.widget.toggle': 'Написать нам',
      'footer.copyright': 'Copyright ® Kaliev Salavat All rights Reserved'
    },
    index: {
      'hero.tagline': 'Caravan Logistics',
      'hero.title': 'Мы - Caravan Logistics',
      'hero.line1': 'С 2008 года организуем автомобильные, железнодорожные и авиа перевозки по СНГ и всему миру.',
      'hero.line2': 'Более 10 000 доставленных грузов и свыше 2 000 вагонов ежегодно.',
      'hero.line3': 'Строим маршруты «под ключ» с полным таможенным сопровождением.',
      'hero.cta': 'Получить консультацию',
      'services.more': 'Все услуги',
      'services.title': 'Наши услуги',
      'services.item1': 'Автоперевозки по СНГ',
      'services.item2': 'ЖД маршруты и вагоны',
      'services.item3': 'Таможенный брокер',
      'services.item4': 'Китай и международные проекты',
      'services.item5': 'Мультимодальные перевозки',
      'services.item6': 'Авиаперевозки',
      'services.item7': 'Складские услуги',
      'services.item8': 'Страхование грузов',
      'big-text': 'Почему доверяют Caravan Logistics?',
      'banner.title': 'Проверенная команда',
      'banner.text':
        'Берём на себя таможенное оформление любой сложности, оформляем разрешительные документы и страхуем грузы. Для каждого клиента разрабатываем оптимальный маршрут — от магистральных автоколонн до мультимодальных схем с авиа и морем.',
      'faq.title': 'Ответы на популярные вопросы',
      'faq.text':
        'Мы подготовили краткие подсказки по стоимости, срокам и документам. Не нашли нужный ответ — оставьте заявку, и логист свяжется с вами в течение нескольких минут.',
      'faq.q1': 'Сколько стоит доставка фуры по СНГ?',
      'faq.q2': 'Сколько времени занимает оформление вагонов на границе?',
      'faq.q3': 'Какие документы нужны для авиа и мультимодальных перевозок?',
      'faq.q4': 'Можно ли рассчитать сборный груз из Китая?',
      'faq.q5': 'Помогаете ли с кодами ТН ВЭД и сертификацией?',
      'faq.q6': 'Как отследить груз онлайн?',
      'faq.a1':
        'Стоимость зависит от маршрута, типа груза и страховки. Средний тариф от 1,2 € за км, точный расчёт готовим за 15 минут.',
      'faq.a2':
        'При готовых документах контроль занимает 2–6 часов. Мы резервируем «окна» заранее, поэтому составы не простаивают сутками.',
      'faq.a3':
        'Авианакладная, инвойс, паковочный лист, сертификаты и доверенности. Мы собираем полный пакет и проверяем его до отправки.',
      'faq.a4':
        'Да, консолидируем грузы на наших складах в Китае. Отправки 2–3 раза в неделю, тариф считаем по кг и кубометрам.',
      'faq.a5':
        'Подбираем коды, оформляем сертификаты соответствия и помогаем получить СТ-1 или сертификаты происхождения.',
      'faq.a6':
        'Даём доступ в онлайн-кабинет с GPS-маршрутом и статусами этапов, плюс отправляем уведомления в Telegram или email.',
      'index.upcoming.eyebrow': 'Цифровые сервисы',
      'index.upcoming.title': 'Мы готовим к запуску умные инструменты',
      'index.upcoming.text': 'Автоматизируем расчёт таможни и поиск кодов ТН ВЭД, чтобы вы получали ответ за секунды прямо на сайте.',
      'index.upcoming.card1.badge': 'Скоро',
      'index.upcoming.card1.title': 'Калькулятор — таможенный ассистент',
      'index.upcoming.card1.text':
        'Укажите страну отправления, тип груза и дополнительные услуги, а система моментально оценит пошлины и выдаст готовый чек-лист.',
      'index.upcoming.card1.pill1': 'Тип груза',
      'index.upcoming.card1.pill2': 'Страна → страна',
      'index.upcoming.card1.pill3': 'Страховка',
      'index.upcoming.card1.small': 'Мы тестируем формулы и подключаем AI-подсказки.',
      'index.upcoming.card2.badge': 'Скоро',
      'index.upcoming.card2.title': 'Поиск кодов ТН ВЭД',
      'index.upcoming.card2.text':
        'Введите название товара или отрасль — сервис предложит актуальные коды, требования и ограничения по поставке.',
      'index.upcoming.card2.pill1': 'Название товара',
      'index.upcoming.card2.pill2': 'Коды ТН ВЭД',
      'index.upcoming.card2.pill3': 'Документы',
      'index.upcoming.card2.small': 'Добавим быстрый поиск по каталогу из 10 000 позиций.',
      'projects.title': 'Нам доверяют',
      'projects.text': 'Производители оборудования, FMCG-компании и IT-проекты по всему СНГ',
      'projects.more': 'Кейсы',
      'email.title': 'Бесплатная консультация',
      'email.text': 'Получите расчёт тарифа и маршрут доставки для вашего груза — автомобильного, железнодорожного или авиа.',
      'email.subtitle': 'Связаться со специалистом',
      'email.description': 'Оставьте контакты, и наш логист вернётся с предложением в течение 5 минут.',
      'email.placeholder': 'Введите email',
      'email.button': 'Отправить',
      'partner.kulikov.since': 'С 2016 года',
      'partner.kulikov.stats': 'оформили 90 рейсов с премиальной мебелью.',
      'partner.kant.since': 'С 2018 года',
      'partner.kant.stats': 'перевозим по 1200 тонн стройматериалов ежегодно.',
      'partner.translogistica.since': 'С 2015 года',
      'partner.translogistica.stats': 'организовали 65 мультимодальных цепочек.',
      'partner.shoro.since': 'С 2017 года',
      'partner.shoro.stats': 'поддерживаем FMCG-доставки в 30 городов.',
      'partner.cocacola.since': 'С 2014 года',
      'partner.cocacola.stats': 'выполнили 150 рефрижераторных рейсов.',
      'partner.nestle.since': 'С 2013 года',
      'partner.nestle.stats': 'консолидировали 200+ партий ингредиентов.',
      'partner.knauf.since': 'С 2016 года',
      'partner.knauf.stats': 'доставили 3 500 тонн гипсокартона.',
      'partner.shatura.since': 'С 2019 года',
      'partner.shatura.stats': 'обеспечиваем 40 шоурумов мебелью.',
      'partner.worldclass.since': 'С 2020 года',
      'partner.worldclass.stats': 'логистика спортивного оборудования для 15 клубов.',
      'partner.keramin.since': 'С 2012 года',
      'partner.keramin.stats': 'ежегодно перевозим 1 800 паллет плитки.',
      'partner.borusan.since': 'С 2011 года',
      'partner.borusan.stats': 'организовали 75 тяжеловесных перевозок.',
      'partner.bellona.since': 'С 2015 года',
      'partner.bellona.stats': 'выполнили 110 контейнерных отправок.',
      'partner.tesladoor.since': 'С 2019 года',
      'partner.tesladoor.stats': 'доставили 6 000 дверных комплектов.',
      'partner.dhl.since': 'С 2010 года',
      'partner.dhl.stats': 'помогаем с наземной частью экспресс-доставок.',
      'partner.lg.since': 'С 2014 года',
      'partner.lg.stats': 'перевезли 1,2 млн единиц электроники.',
      'partner.termoplex.since': 'С 2017 года',
      'partner.termoplex.stats': 'организуем 50 температурных маршрутов в год.',
      'partner.fabrika.since': 'С 2018 года',
      'partner.fabrika.stats': 'закрыли 90 проектов девелоперов.',
      'partner.augrand.since': 'С 2013 года',
      'partner.augrand.stats': 'сопровождаем экспорт мебели на 8 рынков.',
      'partner.anto.since': 'С 2011 года',
      'partner.anto.stats': 'доставили 400 партий металлоконструкций.',
      'partner.kumtor.since': 'С 2009 года',
      'partner.kumtor.stats': 'ведём горнопромышленные поставки без простоев.'
    },
    services: {
      'services.heroTitle': 'Комплексные логистические услуги',
      'services.heroText':
        'Подберём решение под отрасль и маршрут: от наземных перевозок до брокерского сопровождения. Выберите направление и получите подробное описание.',
      'services.heroButton': 'Связаться со специалистом',
      'services.gridTitle': 'Наши услуги',
      'services.gridSubtitle': 'Выберите направление, чтобы узнать детали и посмотреть примеры проектов.',
      'services.cards.auto.title': 'Автоперевозки',
      'services.cards.auto.text': 'Магистральные автоколонны по СНГ, мониторинг рейсов и контроль доставки 24/7.',
      'services.cards.rail.title': 'Железнодорожные перевозки',
      'services.cards.rail.text': 'Резервируем вагоны, сопровождаем на погранпереходах и оперативно оформляем документы.',
      'services.cards.multimodal.title': 'Мультимодальные перевозки',
      'services.cards.multimodal.text': 'Комбинируем авто, ЖД, авиа и море для срочных и сложных маршрутов.',
      'services.cards.broker.title': 'Таможенный брокер',
      'services.cards.broker.text': 'Готовим декларации, сертификаты и проводим груз через контроль.',
      'services.cards.china.title': 'Китай',
      'services.cards.china.text': 'Организуем экспорт и импорт из КНР, обеспечиваем консолидацию и страхование.',
      'services.cards.air.title': 'Авиаперевозки',
      'services.cards.air.text': 'Чартеры и регулярные рейсы с приоритетной обработкой и отслеживанием.',
      'services.cards.warehousing.title': 'Складские услуги',
      'services.cards.warehousing.text': 'Терминальная обработка, кросс-докинг и ответственное хранение.',
      'services.cards.insurance.title': 'Страхование',
      'services.cards.insurance.text': 'Защита грузов от рисков на всех этапах маршрута.'
    },
    about: {
      'about.heroTitle': 'Управляем цепочками поставок от двери до двери',
      'about.heroText':
        'Caravan Logistics объединяет автомобильные, железнодорожные и авиа решения. Прорабатываем маршруты по СНГ и миру, оформляем таможню, страхуем грузы и сопровождаем проект до фактической доставки.',
      'about.heroCta': 'Связаться с нами',
      'about.whyTitle': 'Почему работают с нами',
      'about.card1.badge': 'Авто',
      'about.card1.title': 'Собственный автопарк',
      'about.card1.text':
        'Подбираем тент, реф и спецтехнику под конкретный проект, контролируем водителей 24/7 и берём на себя согласование пропусков.',
      'about.card2.badge': 'ЖД',
      'about.card2.title': 'Доступ к подвижному составу',
      'about.card2.text':
        'Резервируем вагоны и платформы, оформляем накладные ЭТРАН и проводим груз через погранпереходы без простоев.',
      'about.card3.badge': 'Авиа и море',
      'about.card3.title': 'Мультимодальные решения',
      'about.card3.text':
        'Сочетаем авиадоставку с автодоставкой «последней мили», организуем консолидацию грузов и страхуем риски на каждом плече.'
    },
    contacts: {
      'contacts.heroTitle': 'Контакт-центр Caravan Logistics',
      'contacts.heroText':
        'Мы отвечаем на запросы 24/7: наземные, железнодорожные и авиа перевозки по СНГ и международные проекты.',
      'contacts.formTitle': 'Напишите нам',
      'contacts.formText':
        'Оставьте запрос — подготовим расчёт и ответим на вопросы о документах, сроках и тарифах.',
      'contacts.labelFirst': 'Имя',
      'contacts.labelLast': 'Фамилия',
      'contacts.labelEmail': 'Email',
      'contacts.labelMessage': 'Сообщение',
      'contacts.submit': 'Отправить заявку'
    },
    portfolio: {
      'breadcrumbs.home': 'Главная',
      'breadcrumbs.news': 'Новости',
      'portfolio.heroTitle': 'Новости и аналитика логистики',
      'portfolio.heroText':
        'Рассказываем о тарифах, маршрутах и технологиях Caravan Logistics для авто, ЖД и авиа направлений.',
      'portfolio.search': 'Поиск по новостям',
      'portfolio.feature1.badge': 'Caravan Аналитика',
      'portfolio.feature1.time': '2 мин',
      'portfolio.feature1.title': 'Компания Caravan Logistics поздравила партнёров с наступающим Новым годом',
      'portfolio.feature1.text1':
        'Традиционно в декабре мы подводим итоги и готовим персональные подарки для клиентов. В 2024 году команда оформила праздничные коробки с символикой Caravan и доставила их во все ключевые офисы.',
      'portfolio.feature1.text2':
        'Поздравление сопровождается благодарственными письмами и приглашением в закрытый клуб партнёров, где обсуждаем планы на следующий год.',
      'portfolio.feature2.badge': 'Отдел проектов',
      'portfolio.feature2.time': '2 мин',
      'portfolio.feature2.title': 'Caravan Logistics поздравила партнёров с наступающим Новым годом',
      'portfolio.feature2.text1':
        'Команда подготовила серию видеороликов и открыток, в которых поделилась ключевыми достижениями и пожеланиями на 2025 год. Праздничные сюрпризы сопровождаются купонами на дополнительные услуги.',
      'portfolio.feature2.text2':
        'Мы благодарим клиентов за доверие и обещаем ещё больше вовлечённости в совместные проекты.',
      'portfolio.block1.title': 'Фокус на инфраструктуре СНГ',
      'portfolio.block1.text':
        'Работаем с крупнейшими терминалами и погранпереходами региона, резервируем мощности и проводим грузы без задержек даже в высокий сезон.',
      'portfolio.block2.title': 'Глобальные маршруты',
      'portfolio.block2.text':
        'Отправляем грузы из Китая, Турции, Европы и США с консолидацией, таможенным брокерством и страхованием на каждом плече.',
      'portfolio.sidebar1.badge': 'Автологистика',
      'portfolio.sidebar1.time': '5 мин',
      'portfolio.sidebar1.text': 'Обновили расписание рейсов Бишкек — Алматы для FMCG-грузов.',
      'portfolio.sidebar2.badge': 'ЖД сервис',
      'portfolio.sidebar2.time': '6 мин',
      'portfolio.sidebar2.text': 'Запустили платформы для тяжёлого оборудования по маршруту Минск — Бишкек.',
      'portfolio.sidebar3.badge': 'Аналитика',
      'portfolio.sidebar3.time': '4 мин',
      'portfolio.sidebar3.text': 'Как цифровое отслеживание сокращает простои на границе — опыт Caravan.',
      'portfolio.sidebar4.badge': 'Проекты',
      'portfolio.sidebar4.time': '7 мин',
      'portfolio.sidebar4.text': 'Реализовали мультимодальную схему для e-commerce поставок из Китая.',
      'portfolio.sidebar5.badge': 'Авиаперевозки',
      'portfolio.sidebar5.time': '5 мин',
      'portfolio.sidebar5.text': 'Организовали чартер с комплектующими для производства электроники.',
      'portfolio.subscribeTitle': 'Будьте в курсе',
      'portfolio.subscribeText':
        'Получайте новости и аналитические обзоры Caravan Logistics: тарифы, маршруты и практические советы для логистов.',
      'portfolio.subscribePlaceholder': 'Введите email',
      'portfolio.subscribeButton': 'Подписаться'
    },
    'service-auto': {
      'service.heroTitle': 'Автоперевозки',
      'service.heroText':
        'Автоколонны Caravan Logistics покрывают Казахстан, Кыргызстан, Россию и соседние страны. Берём проекты «под ключ» — от подбора техники до контроля доставки.',
      'service.bodyTitle': 'Что входит в автоперевозки',
      'service.bodyParagraph1':
        'Подбираем тентованные, рефрижераторные и специализированные машины под конкретный груз. Планируем маршруты с учётом сезонов, лимитов по осям и специальных разрешений. Водители проходят инструктаж, а каждое транспортное средство оснащено GPS для круглосуточного мониторинга.',
      'service.bodyParagraph2':
        'Берём на себя оформление путевых листов, CMR, TIR, пропусков и страховых полисов. Личный координатор отслеживает прохождение границ и оперативно информирует клиента. Благодаря собственной сети партнёров мы минимизируем простои и доставляем груз в согласованные сроки.'
    },
    'service-rail': {
      'service.heroTitle': 'Железнодорожные перевозки',
      'service.heroText':
        'Организуем железнодорожные перевозки по СНГ, Китаю и Европе, работаем с собственными и арендованными платформами.',
      'service.bodyTitle': 'ЖД решения Caravan Logistics',
      'service.bodyParagraph1':
        'Резервируем крытые вагоны, полувагоны, фитинговые платформы и хопперы. Подготавливаем накладные ЭТРАН, согласовываем маршруты и контролируем подачу состава. Груз получает сопровождение на пограничных переходах и не задерживается в узловых станциях.',
      'service.bodyParagraph2':
        'Помогаем с перегрузкой на стык колей, обеспечиваем пломбирование и фотоотчёты. Благодаря партнёрам на терминалах можем консолидировать партии, подключать охрану и страховать отправки под требования клиента.'
    },
    'service-multimodal': {
      'service.heroTitle': 'Мультимодальные перевозки',
      'service.heroText':
        'Комбинируем авто, ЖД, авиа и море, чтобы сократить сроки и сохранить бюджет для международных проектов.',
      'service.bodyTitle': 'Как строим мультимодальные схемы',
      'service.bodyParagraph1':
        'Анализируем маршрут и подбираем оптимальную комбинацию видов транспорта. Организуем экспортное и импортное оформление на каждом плече, контролируем перегрузку и страхуем риски. Клиент получает единый план-график и одну точку контакта.',
      'service.bodyParagraph2':
        'Используем проверенных партнёров в морских портах, аэропортах и сухих терминалах. Поддерживаем онлайн-трекинг и заранее готовим резервные сценарии, чтобы избежать задержек на стыках.'
    },
    'service-broker': {
      'service.heroTitle': 'Таможенный брокер',
      'service.heroText': 'Собственная команда брокеров оформляет грузы любой сложности и сопровождает проверки.',
      'service.bodyTitle': 'Таможенный сервис',
      'service.bodyParagraph1':
        'Готовим классификацию товаров, подбираем коды ТН ВЭД и рассчитываем пошлины. Формируем полный пакет документов: инвойсы, упаковочные, сертификаты происхождения и соответствия.',
      'service.bodyParagraph2':
        'Работаем в тесном контакте с таможенными постами, чтобы ускорить выпуск. Помогаем клиентам выстроить корректную схему поставки, минимизировать риски и избежать дополнительных расходов.'
    },
    'service-china': {
      'service.heroTitle': 'Китай',
      'service.heroText': 'Берём на себя экспортные и импортные цепочки между Китаем и странами СНГ.',
      'service.bodyTitle': 'Проекты с Китаем',
      'service.bodyParagraph1':
        'Организуем вывоз с фабрик, консолидацию в складских центрах и оформление в китайских таможнях. Согласовываем окна загрузки и контролируем работу поставщиков.',
      'service.bodyParagraph2':
        'Предлагаем разные сценарии доставки: авто, ЖД, море или авиа. Обеспечиваем сертификацию, страхование и локальную курьерскую доставку документов.'
    },
    'service-air': {
      'service.heroTitle': 'Авиаперевозки',
      'service.heroText': 'Отправляем срочные грузы на чартерных и регулярных рейсах с поддержкой 24/7.',
      'service.bodyTitle': 'Авиарешения Caravan Logistics',
      'service.bodyParagraph1':
        'Выбираем оптимальные маршруты через хабы Стамбула, Дубая, Китая и Евросоюза. Организуем приоритетную обработку и контролируем температурный режим при необходимости.',
      'service.bodyParagraph2':
        'Работаем с опасными грузами, обеспечиваем страхование ответственности перевозчика и предоставляем онлайн-трекинг до вручения получателю.'
    },
    'service-warehousing': {
      'service.heroTitle': 'Складские услуги',
      'service.heroText': 'Собственные и партнёрские склады помогают консолидировать, маркировать и готовить груз к отправке.',
      'service.bodyTitle': 'Складские решения',
      'service.bodyParagraph1':
        'Организуем ответственное хранение, таможенные склады и кросс-докинг. Проводим маркировку, комплектуем наборы и ведём фотоотчёт по каждой операции.',
      'service.bodyParagraph2':
        'Интегрируем WMS клиента или предоставляем собственную систему отчётности. Готовим груз к международным перевозкам: паллетируем, пломбируем и оформляем документы.'
    },
    'service-insurance': {
      'service.heroTitle': 'Страхование',
      'service.heroText': 'Страхуем грузы и ответственность на всех этапах логистической цепочки.',
      'service.bodyTitle': 'Страховой сервис',
      'service.bodyParagraph1':
        'Подбираем страховые программы под тип груза и маршрут: от стандартного покрытия до расширенных рисков войны и простоя. Сотрудничаем с крупными страховыми компаниями.',
      'service.bodyParagraph2':
        'Сопровождаем оформление полиса и урегулирование. Команда помогает собрать документы, ведёт коммуникацию со страховой и добивается оперативных выплат.'
    }
  },
  en: {
    common: {
      'nav.home': 'Home',
      'nav.about': 'About us',
      'nav.news': 'News',
      'nav.services': 'Services',
      'nav.contacts': 'Contacts',
      'lang.ru': 'RU',
      'lang.en': 'EN',
      'lang.zh': '中文',
      'service.sidebarTitle': 'Our services',
      'footer.description':
        'Discover our full range of road, sea and air freight services. Thanks to advanced technology and a global network we deliver cargo safely and on time.',
      'footer.addressTitle': 'Our address',
      'footer.addressLine1': '243 Chyngyz Aitmatov St., 3rd floor',
      'footer.addressLine2': '+996 555 11 33 33',
      'footer.addressLine3': 'Bishkek',
      'footer.addressLine4': 'Kyrgyzstan',
      'footer.contactsTitle': 'Stay in touch',
      'footer.email': 'info@caravan-logistics.com ',
      'footer.phone': '+996 555 11 33 33',
      'partners.eyebrow': 'Our partners',
      'partners.title': 'Our partners',
      'partners.text': 'We work with equipment makers, FMCG companies, and construction groups across the CIS.',
      'modal.title': 'Leave a request',
      'modal.description':
        'Share your contacts and briefly describe the cargo — we will prepare a proposal and call back within 15 minutes.',
      'modal.label.name': 'Name',
      'modal.placeholder.name': 'How should we address you?',
      'modal.label.company': 'Company',
      'modal.placeholder.company': 'Company name',
      'modal.label.phone': 'Phone',
      'modal.placeholder.phone': '+996 ___ ___ ___',
      'modal.label.email': 'Email',
      'modal.placeholder.email': 'you@example.com',
      'modal.label.details': 'Cargo details',
      'modal.placeholder.details': 'Route, cargo type, timing',
      'modal.submit': 'Send',
      'modal.hint': 'By clicking send you agree to personal data processing.',
      'modal.success': 'Thank you! We have received your request and will respond shortly.',
      'modal.closeLabel': 'Close modal',
      'email.validation.missingAt': 'Missing @ symbol',
      'email.validation.missingDot': 'Missing dot',
      'email.validation.success': 'Looks good!',
      'contact.widget.title': 'Always in touch',
      'contact.widget.text': 'We reply in messengers or by phone.',
      'contact.widget.whatsapp.label': 'WhatsApp',
      'contact.widget.whatsapp.desc': 'Write in messenger',
      'contact.widget.telegram.label': 'Telegram',
      'contact.widget.telegram.desc': 'Discuss the project',
      'contact.widget.phone.label': '+996 555 11 33 33',
      'contact.widget.phone.desc': 'Call directly',
      'contact.widget.toggle': 'Message us',
      'footer.copyright': 'Copyright ® Kaliev Salavat All rights Reserved'
    },
    index: {
      'hero.tagline': 'Caravan Logistics',
      'hero.title': 'We are a logistics company',
      'hero.line1': 'Since 2008 we arrange road, rail and air freight across the CIS and worldwide.',
      'hero.line2': 'Over 10,000 shipments delivered and more than 2,000 wagons each year.',
      'hero.line3': 'We build turnkey routes with full customs support.',
      'hero.cta': 'Request a quote',
      'services.more': 'All services',
      'services.title': 'Our services',
      'services.item1': 'Road freight across the CIS',
      'services.item2': 'Rail routes and wagons',
      'services.item3': 'Customs brokerage',
      'services.item4': 'China and global projects',
      'services.item5': 'Multimodal logistics',
      'services.item6': 'Air freight',
      'services.item7': 'Warehousing services',
      'services.item8': 'Cargo insurance',
      'big-text': 'Why companies trust Caravan Logistics?',
      'banner.title': 'Certified team',
      'banner.text':
        'We handle customs clearance, permits and insurance. Every client gets the optimal route—from long-haul convoys to multimodal schemes with air or sea legs.',
      'faq.title': 'Popular questions',
      'faq.text':
        'Here are quick tips on pricing, timing and documents. Didn’t find the answer? Leave a request and a logistics expert will call you back within minutes.',
      'faq.q1': 'How much does a truck delivery across the CIS cost?',
      'faq.q2': 'How long does rail clearance at the border take?',
      'faq.q3': 'Which documents do I need for air or multimodal shipping?',
      'faq.q4': 'Can I calculate a consolidation from China?',
      'faq.q5': 'Do you help with HS codes and certification?',
      'faq.q6': 'How can I track my cargo online?',
      'faq.a1':
        'Pricing depends on the lane, cargo type and insurance. Average road freight starts from €1.2/km and we send the exact quote within 15 minutes.',
      'faq.a2':
        'Border clearance usually takes 2–6 hours when paperwork is ready; we pre-book slots so wagons do not idle for days.',
      'faq.a3':
        'You need an airway bill, invoice, packing list, certificates and power of attorney. We compile and pre-check the full set.',
      'faq.a4':
        'Yes, we consolidate LCL cargo in China and ship 2–3 times per week. You receive a rate per cbm/kg.',
      'faq.a5':
        'We select HS codes, arrange conformity certificates and deliver ST-1 or other certificates of origin.',
      'faq.a6':
        'You get an online dashboard with GPS tracking and milestones plus optional Telegram or email alerts.',
      'index.upcoming.eyebrow': 'Digital services',
      'index.upcoming.title': 'We are preparing smart tools for launch',
      'index.upcoming.text': 'We automate customs calculations and HS code search so you get answers in seconds on the site.',
      'index.upcoming.card1.badge': 'Coming soon',
      'index.upcoming.card1.title': 'Calculator — customs assistant',
      'index.upcoming.card1.text':
        'Select origin, cargo type and extras — the tool instantly estimates duties and gives you a ready checklist.',
      'index.upcoming.card1.pill1': 'Cargo type',
      'index.upcoming.card1.pill2': 'Country → country',
      'index.upcoming.card1.pill3': 'Insurance',
      'index.upcoming.card1.small': 'We are testing formulas and adding AI tips.',
      'index.upcoming.card2.badge': 'Coming soon',
      'index.upcoming.card2.title': 'HS code finder',
      'index.upcoming.card2.text':
        'Enter a product name or industry — the service suggests valid codes, requirements, and supply restrictions.',
      'index.upcoming.card2.pill1': 'Product name',
      'index.upcoming.card2.pill2': 'HS codes',
      'index.upcoming.card2.pill3': 'Documents',
      'index.upcoming.card2.small': 'We will add fast search across a catalog of 10,000 items.',
      'projects.title': 'Clients who trust us',
      'projects.text': 'Equipment makers, FMCG brands and IT companies throughout the CIS',
      'projects.more': 'Cases',
      'email.title': 'Free consultation',
      'email.text':
        'Get a freight quote and a proposed route for your cargo — by road, rail or air.',
      'email.subtitle': 'Talk to a specialist',
      'email.description': 'Leave your contacts and our logistics manager will respond within 5 minutes.',
      'email.placeholder': 'Enter email',
      'email.button': 'Send',
      'partner.kulikov.since': 'Since 2016',
      'partner.kulikov.stats': '90 premium furniture shipments.',
      'partner.kant.since': 'Since 2018',
      'partner.kant.stats': '1,200 tons of construction materials per year.',
      'partner.translogistica.since': 'Since 2015',
      'partner.translogistica.stats': '65 multimodal chains delivered.',
      'partner.shoro.since': 'Since 2017',
      'partner.shoro.stats': 'FMCG deliveries to 30 cities.',
      'partner.cocacola.since': 'Since 2014',
      'partner.cocacola.stats': '150 refrigerated runs completed.',
      'partner.nestle.since': 'Since 2013',
      'partner.nestle.stats': 'Consolidated 200+ ingredient batches.',
      'partner.knauf.since': 'Since 2016',
      'partner.knauf.stats': 'Moved 3,500 tons of drywall.',
      'partner.shatura.since': 'Since 2019',
      'partner.shatura.stats': 'Supplying 40 furniture showrooms.',
      'partner.worldclass.since': 'Since 2020',
      'partner.worldclass.stats': 'Logistics for 15 fitness clubs.',
      'partner.keramin.since': 'Since 2012',
      'partner.keramin.stats': '1,800 pallets of tiles each year.',
      'partner.borusan.since': 'Since 2011',
      'partner.borusan.stats': 'Handled 75 heavy-haul projects.',
      'partner.bellona.since': 'Since 2015',
      'partner.bellona.stats': '110 container shipments completed.',
      'partner.tesladoor.since': 'Since 2019',
      'partner.tesladoor.stats': 'Delivered 6,000 door sets.',
      'partner.dhl.since': 'Since 2010',
      'partner.dhl.stats': 'Ground support for express deliveries.',
      'partner.lg.since': 'Since 2014',
      'partner.lg.stats': 'Shipped 1.2M electronics units.',
      'partner.termoplex.since': 'Since 2017',
      'partner.termoplex.stats': '50 temperature-controlled routes yearly.',
      'partner.fabrika.since': 'Since 2018',
      'partner.fabrika.stats': 'Completed 90 developer projects.',
      'partner.augrand.since': 'Since 2013',
      'partner.augrand.stats': 'Furniture export to 8 markets.',
      'partner.anto.since': 'Since 2011',
      'partner.anto.stats': 'Delivered 400 batches of steel structures.',
      'partner.kumtor.since': 'Since 2009',
      'partner.kumtor.stats': 'Supporting mining logistics without downtime.'
    },
    services: {
      'services.heroTitle': 'Integrated logistics services',
      'services.heroText':
        'We tailor transport and brokerage solutions for every route. Pick a focus area to learn the details and review available options.',
      'services.heroButton': 'Talk to a specialist',
      'services.gridTitle': 'Our services',
      'services.gridSubtitle': 'Choose a card to open a dedicated page with a full description.',
      'services.cards.auto.title': 'Road freight',
      'services.cards.auto.text': 'Long-haul convoys across the CIS with 24/7 monitoring.',
      'services.cards.rail.title': 'Rail freight',
      'services.cards.rail.text': 'We reserve wagons, supervise border crossings and prepare paperwork.',
      'services.cards.multimodal.title': 'Multimodal',
      'services.cards.multimodal.text': 'Mix road, rail, air and sea legs for complex projects.',
      'services.cards.broker.title': 'Customs brokerage',
      'services.cards.broker.text': 'Declarations, certificates and on-site support at customs.',
      'services.cards.china.title': 'China desk',
      'services.cards.china.text': 'Import/export flows from China with consolidation and insurance.',
      'services.cards.air.title': 'Air freight',
      'services.cards.air.text': 'Charters and scheduled flights with priority handling.',
      'services.cards.warehousing.title': 'Warehousing',
      'services.cards.warehousing.text': 'Handling, cross-docking and bonded storage.',
      'services.cards.insurance.title': 'Insurance',
      'services.cards.insurance.text': 'Cargo protection throughout the route.'
    },
    about: {
      'about.heroTitle': 'End-to-end supply chain management',
      'about.heroText':
        'Caravan Logistics unites road, rail and air solutions. We design routes across the CIS and worldwide, handle customs, insure cargo and monitor every stage.',
      'about.heroCta': 'Contact us',
      'about.whyTitle': 'Why partners work with us',
      'about.card1.badge': 'Road',
      'about.card1.title': 'Own fleet',
      'about.card1.text':
        'We allocate tilt, reefer or special trucks for each project, supervise drivers 24/7 and arrange permits.',
      'about.card2.badge': 'Rail',
      'about.card2.title': 'Rolling stock access',
      'about.card2.text':
        'We reserve wagons and platforms, prepare ETRAN documents and guide cargo through border crossings without idle time.',
      'about.card3.badge': 'Air & Sea',
      'about.card3.title': 'Multimodal solutions',
      'about.card3.text':
        'We combine air deliveries with last-mile trucking, consolidate cargo and insure every leg.'
    },
    contacts: {
      'contacts.heroTitle': 'Caravan Logistics contact center',
      'contacts.heroText':
        'We respond 24/7 on road, rail and air freight across the CIS and overseas projects.',
      'contacts.formTitle': 'Write to us',
      'contacts.formText':
        'Send a request — we will prepare a quote and answer all questions about documents, timing and tariffs.',
      'contacts.labelFirst': 'First name',
      'contacts.labelLast': 'Last name',
      'contacts.labelEmail': 'Email',
      'contacts.labelMessage': 'Message',
      'contacts.submit': 'Send request'
    },
    portfolio: {
      'breadcrumbs.home': 'Home',
      'breadcrumbs.news': 'News',
      'portfolio.heroTitle': 'Logistics news and insights',
      'portfolio.heroText':
        'We share tariffs, routes and technology updates from Caravan Logistics for road, rail and air services.',
      'portfolio.search': 'Search news',
      'portfolio.feature1.badge': 'Caravan Analytics',
      'portfolio.feature1.time': '2 min',
      'portfolio.feature1.title': 'Caravan Logistics wished partners a Happy New Year',
      'portfolio.feature1.text1':
        'Each December we wrap up results and prepare personal gifts for clients. In 2024 the team created branded holiday boxes and delivered them to every key office.',
      'portfolio.feature1.text2':
        'The greetings include thank-you letters and an invitation to a private partners’ club to discuss plans for next year.',
      'portfolio.feature2.badge': 'Project team',
      'portfolio.feature2.time': '2 min',
      'portfolio.feature2.title': 'Caravan Logistics congratulated partners on the New Year',
      'portfolio.feature2.text1':
        'The team prepared videos and postcards highlighting 2025 achievements and wishes. Holiday surprises include coupons for extra services.',
      'portfolio.feature2.text2':
        'We thank clients for their trust and promise even greater engagement in joint projects.',
      'portfolio.block1.title': 'Infrastructure focus in the CIS',
      'portfolio.block1.text':
        'We cooperate with major terminals and border transitions, reserve capacity and move cargo without delays even in peak season.',
      'portfolio.block2.title': 'Global routes',
      'portfolio.block2.text':
        'We ship from China, Turkey, Europe and the USA with consolidation, customs brokerage and insurance on every leg.',
      'portfolio.sidebar1.badge': 'Road logistics',
      'portfolio.sidebar1.time': '5 min',
      'portfolio.sidebar1.text': 'Updated Bishkek–Almaty schedules for FMCG cargo.',
      'portfolio.sidebar2.badge': 'Rail service',
      'portfolio.sidebar2.time': '6 min',
      'portfolio.sidebar2.text': 'Launched platforms for heavy equipment on the Minsk–Bishkek route.',
      'portfolio.sidebar3.badge': 'Analytics',
      'portfolio.sidebar3.time': '4 min',
      'portfolio.sidebar3.text': 'How digital tracking reduces border idle time — Caravan case study.',
      'portfolio.sidebar4.badge': 'Projects',
      'portfolio.sidebar4.time': '7 min',
      'portfolio.sidebar4.text': 'Implemented a multimodal scheme for e-commerce deliveries from China.',
      'portfolio.sidebar5.badge': 'Air freight',
      'portfolio.sidebar5.time': '5 min',
      'portfolio.sidebar5.text': 'Launched a charter flight with components for electronics production.',
      'portfolio.subscribeTitle': 'Stay in the loop',
      'portfolio.subscribeText':
        'Subscribe to Caravan Logistics news: tariffs, routes and practical tips for logistics teams.',
      'portfolio.subscribePlaceholder': 'Enter email address',
      'portfolio.subscribeButton': 'Subscribe'
    },
    'service-auto': {
      'service.heroTitle': 'Road freight',
      'service.heroText':
        'Our road convoys cover Kazakhstan, Kyrgyzstan, Russia and neighbouring markets, handling turnkey projects from truck selection to delivery control.',
      'service.bodyTitle': 'What road freight includes',
      'service.bodyParagraph1':
        'We allocate curtainsider, reefer or special trucks for every cargo. Routes consider seasons, axle limits and permit requirements. Each truck is GPS-tracked and supervised 24/7.',
      'service.bodyParagraph2':
        'We prepare waybills, CMR/TIR docs, passes and insurance policies. A dedicated coordinator monitors borders, informs the customer and keeps idle time low.'
    },
    'service-rail': {
      'service.heroTitle': 'Rail freight',
      'service.heroText':
        'We manage rail shipments across the CIS, China and Europe using owned and leased rolling stock.',
      'service.bodyTitle': 'Rail solutions',
      'service.bodyParagraph1':
        'We reserve boxcars, gondolas, fitting platforms and hoppers. The team fills ETRAN paperwork, aligns routes and ensures wagons are supplied without delays.',
      'service.bodyParagraph2':
        'We assist with gauge-change operations, sealing and photo reports. Terminal partners let us consolidate loads, add security escorts and arrange insurance to client specs.'
    },
    'service-multimodal': {
      'service.heroTitle': 'Multimodal solutions',
      'service.heroText':
        'We combine road, rail, air and sea to shorten transit time while protecting the budget for international projects.',
      'service.bodyTitle': 'How we design multimodal chains',
      'service.bodyParagraph1':
        'We analyse the lane and select the optimal mix of transport modes, covering export/import clearance on every leg and supervising transhipment with insured operations.',
      'service.bodyParagraph2':
        'Trusted partners in ports, airports and dry hubs plus online tracking and contingency plans keep each junction under control.'
    },
    'service-broker': {
      'service.heroTitle': 'Customs brokerage',
      'service.heroText': 'Our in-house brokers handle complex declarations and support any inspections.',
      'service.bodyTitle': 'Brokerage support',
      'service.bodyParagraph1':
        'We classify goods, select HS codes and calculate duties. The team assembles invoices, packing lists, origin and conformity certificates.',
      'service.bodyParagraph2':
        'Close coordination with customs offices speeds up release, reduces compliance risks and helps avoid extra costs.'
    },
    'service-china': {
      'service.heroTitle': 'China desk',
      'service.heroText': 'We run import and export chains between China and CIS destinations.',
      'service.bodyTitle': 'Projects with China',
      'service.bodyParagraph1':
        'We collect cargo at factories, consolidate at warehouse hubs and manage Chinese customs formalities while keeping suppliers on schedule.',
      'service.bodyParagraph2':
        'Delivery scenarios include road, rail, sea or air legs with certification, insurance and courier delivery of documents.'
    },
    'service-air': {
      'service.heroTitle': 'Air freight',
      'service.heroText': 'Urgent shipments on charter and scheduled flights with 24/7 operational support.',
      'service.bodyTitle': 'Airfreight service',
      'service.bodyParagraph1':
        'We design routings via Istanbul, Dubai, Chinese and EU hubs, arrange priority handling and maintain temperature control when required.',
      'service.bodyParagraph2':
        'We work with dangerous goods, secure carrier liability insurance and provide live tracking until delivery.'
    },
    'service-warehousing': {
      'service.heroTitle': 'Warehousing',
      'service.heroText': 'Own and partner warehouses consolidate, label and prepare cargo for transport.',
      'service.bodyTitle': 'Warehouse solutions',
      'service.bodyParagraph1':
        'We offer bonded and regular storage, cross-docking, labelling and kitting supported by detailed photo reports.',
      'service.bodyParagraph2':
        'We integrate with your WMS or provide clear dashboards while palletising, sealing and arranging export paperwork.'
    },
    'service-insurance': {
      'service.heroTitle': 'Insurance',
      'service.heroText': 'Cargo and liability insurance for every step of the logistics chain.',
      'service.bodyTitle': 'Insurance support',
      'service.bodyParagraph1':
        'Insurance programmes are tailored to cargo type and route, from basic cover to war and delay risks with top-tier underwriters.',
      'service.bodyParagraph2':
        'We guide policy issuance and claims, liaise with insurers and make sure compensation arrives without delays.'
    }
  },
  zh: {
    common: {
      'nav.home': '首页',
      'nav.about': '关于我们',
      'nav.news': '新闻',
      'nav.services': '服务',
      'nav.contacts': '联系方式',
      'lang.ru': 'RU',
      'lang.en': 'EN',
      'lang.zh': '中文',
      'service.sidebarTitle': '服务目录',
      'footer.description':
        '我们提供公路、海运与空运等全方位物流服务。凭借先进技术和全球网络，确保您的货物安全准时抵达。',
      'footer.addressTitle': '公司地址',
      'footer.addressLine1': '吉尔吉斯斯坦 比什凯克 阿依特马托夫街243号 3层',
      'footer.addressLine2': '+996 555 11 33 33',
      'footer.addressLine3': '比什凯克',
      'footer.addressLine4': '吉尔吉斯斯坦',
      'footer.contactsTitle': '联系我们',
      'footer.email': 'info@caravan-logistics.com ',
      'footer.phone': '+996 555 11 33 33',
      'partners.eyebrow': '合作伙伴',
      'partners.title': '我们的合作伙伴',
      'partners.text': '我们与独联体地区的设备制造商、快消品公司及建筑集团合作。',
      'modal.title': '提交申请',
      'modal.description': '留下联系方式并简要描述货物——我们将在15分钟内与您联系。',
      'modal.label.name': '姓名',
      'modal.placeholder.name': '请填写称呼',
      'modal.label.company': '公司',
      'modal.placeholder.company': '公司名称',
      'modal.label.phone': '电话',
      'modal.placeholder.phone': '+996 ___ ___ ___',
      'modal.label.email': '邮箱',
      'modal.placeholder.email': 'name@example.com',
      'modal.label.details': '货物描述',
      'modal.placeholder.details': '路线、货物类型、时效',
      'modal.submit': '发送',
      'modal.hint': '点击按钮即表示同意个人信息处理。',
      'modal.success': '感谢！我们已收到申请并将尽快回复。',
      'modal.closeLabel': '关闭窗口',
      'email.validation.missingAt': '邮箱缺少 @',
      'email.validation.missingDot': '邮箱缺少 .',
      'email.validation.success': '一切正常！',
      'contact.widget.title': '随时联系',
      'contact.widget.text': '可通过聊天或电话回复您。',
      'contact.widget.whatsapp.label': 'WhatsApp',
      'contact.widget.whatsapp.desc': '发送消息',
      'contact.widget.telegram.label': 'Telegram',
      'contact.widget.telegram.desc': '讨论项目',
      'contact.widget.phone.label': '+996 555 11 33 33',
      'contact.widget.phone.desc': '直接拨打',
      'contact.widget.toggle': '给我们留言',
      'footer.copyright': 'Copyright ® Kaliev Salavat All rights Reserved'
    },
    index: {
      'hero.tagline': 'Caravan Logistics',
      'hero.title': '我们是一家物流公司',
      'hero.line1': '自2008年以来，我们为独联体及全球客户组织公路、铁路和航空运输。',
      'hero.line2': '每年完成一万多票货物、两千多节铁路车厢的交付。',
      'hero.line3': '提供一站式路线设计与全程报关服务。',
      'hero.cta': '获取报价',
      'services.more': '全部服务',
      'services.title': '我们的业务',
      'services.item1': '独联体公路运输',
      'services.item2': '铁路班列与车厢',
      'services.item3': '报关与合规',
      'services.item4': '中国及全球项目',
      'services.item5': '多式联运',
      'services.item6': '航空运输',
      'services.item7': '仓储服务',
      'services.item8': '货物保险',
      'big-text': '为什么选择 Caravan Logistics？',
      'banner.title': '认证运营团队',
      'banner.text':
        '我们负责各类报关、许可与保险，为每位客户设计最优线路——从干线车队到航空+海运的多式联运方案。',
      'faq.title': '常见问题',
      'faq.text':
        '这里汇总了费用、时效及文件要求。如未找到答案，请提交申请，我们会在几分钟内回电。',
      'faq.q1': '在独联体运输一车货需要多少钱？',
      'faq.q2': '铁路货物在边境办理手续需要多久？',
      'faq.q3': '航空或多式联运需要哪些文件？',
      'faq.q4': '可以计算来自中国的拼箱/拼车吗？',
      'faq.q5': '是否协助申报HS编码和认证？',
      'faq.q6': '如何在线跟踪货物？',
      'faq.a1': '价格取决于线路、货物类型和保险。公路运输平均从每公里约1.2欧元起，我们会在15分钟内给出准确报价。',
      'faq.a2': '资料齐全时，边检放行通常需要2—6小时；我们提前预约窗口，避免车皮长时间滞留。',
      'faq.a3': '需要航空提单、发票、装箱单、认证文件以及授权书。我们的团队会提前整理并核对完整资料。',
      'faq.a4': '可以，我们在中国仓库拼箱，每周发车2-3次，并提供按立方/公斤计费的报价。',
      'faq.a5': '协助匹配海关编码、办理合格证，并准备ST-1等原产地证明。',
      'faq.a6': '提供带GPS轨迹和节点状态的在线看板，并可推送Telegram或邮箱提醒。',
      'index.upcoming.eyebrow': '数字化服务',
      'index.upcoming.title': '即将上线智能工具',
      'index.upcoming.text': '自动化关税计算与HS编码搜索，让您在站内几秒获取答案。',
      'index.upcoming.card1.badge': '即将上线',
      'index.upcoming.card1.title': '关税助手计算器',
      'index.upcoming.card1.text': '选择起运国、货物类型和附加服务，系统即时估算关税并给出清单。',
      'index.upcoming.card1.pill1': '货物类型',
      'index.upcoming.card1.pill2': '起运国 → 目的国',
      'index.upcoming.card1.pill3': '保险',
      'index.upcoming.card1.small': '我们正在测试计算公式并加入AI提示。',
      'index.upcoming.card2.badge': '即将上线',
      'index.upcoming.card2.title': 'HS编码搜索',
      'index.upcoming.card2.text': '输入产品名称或行业，系统将推荐合适编码、要求及限制。',
      'index.upcoming.card2.pill1': '产品名称',
      'index.upcoming.card2.pill2': 'HS编码',
      'index.upcoming.card2.pill3': '所需文件',
      'index.upcoming.card2.small': '我们将提供覆盖一万条目的快速搜索。',
      'projects.title': '合作客户',
      'projects.text': '遍布独联体的设备制造商、快消品牌和IT企业',
      'projects.more': '成功案例',
      'email.title': '免费咨询',
      'email.text': '获取适合您货物的运价与路线方案——涵盖公路、铁路及航空。',
      'email.subtitle': '联系物流顾问',
      'email.description': '留下联系方式，我们将在5分钟内与您取得联系。',
      'email.placeholder': '请输入邮箱',
      'email.button': '发送',
      'partner.kulikov.since': '自2016年起合作',
      'partner.kulikov.stats': '完成90票高端家具运输。',
      'partner.kant.since': '自2018年起合作',
      'partner.kant.stats': '每年承运约1200吨建材。',
      'partner.translogistica.since': '自2015年起合作',
      'partner.translogistica.stats': '执行65条多式联运链路。',
      'partner.shoro.since': '自2017年起合作',
      'partner.shoro.stats': '为30座城市提供FMCG配送。',
      'partner.cocacola.since': '自2014年起合作',
      'partner.cocacola.stats': '完成150次冷链运输。',
      'partner.nestle.since': '自2013年起合作',
      'partner.nestle.stats': '整合200+批配料运输。',
      'partner.knauf.since': '自2016年起合作',
      'partner.knauf.stats': '运输了3,500吨石膏板。',
      'partner.shatura.since': '自2019年起合作',
      'partner.shatura.stats': '为40家展厅供应家具。',
      'partner.worldclass.since': '自2020年起合作',
      'partner.worldclass.stats': '为15家健身会所提供设备物流。',
      'partner.keramin.since': '自2012年起合作',
      'partner.keramin.stats': '每年配送1,800托盘瓷砖。',
      'partner.borusan.since': '自2011年起合作',
      'partner.borusan.stats': '完成75次超大件运输。',
      'partner.bellona.since': '自2015年起合作',
      'partner.bellona.stats': '完成110票集装箱发运。',
      'partner.tesladoor.since': '自2019年起合作',
      'partner.tesladoor.stats': '交付6,000套门类产品。',
      'partner.dhl.since': '自2010年起合作',
      'partner.dhl.stats': '支持快件的地面运输环节。',
      'partner.lg.since': '自2014年起合作',
      'partner.lg.stats': '运输120万台电子设备。',
      'partner.termoplex.since': '自2017年起合作',
      'partner.termoplex.stats': '每年执行50条控温路线。',
      'partner.fabrika.since': '自2018年起合作',
      'partner.fabrika.stats': '完成90个地产项目配送。',
      'partner.augrand.since': '自2013年起合作',
      'partner.augrand.stats': '为8个市场出口家具。',
      'partner.anto.since': '自2011年起合作',
      'partner.anto.stats': '交付400批金属结构件。',
      'partner.kumtor.since': '自2009年起合作',
      'partner.kumtor.stats': '支持矿业供应链，无停滞。'
    },
    services: {
      'services.heroTitle': '一站式物流解决方案',
      'services.heroText': '为每条路线匹配运输与报关服务，覆盖公路、铁路、航空、仓储与保险。选择需要的方向即可查看详细介绍。',
      'services.heroButton': '联系专家',
      'services.gridTitle': '我们的服务',
      'services.gridSubtitle': '点击卡片了解详情并选择合适的合作方式。',
      'services.cards.auto.title': '公路运输',
      'services.cards.auto.text': '覆盖独联体的干线车队与24/7监控。',
      'services.cards.rail.title': '铁路运输',
      'services.cards.rail.text': '预留车皮、协助过境并准备全部单证。',
      'services.cards.multimodal.title': '多式联运',
      'services.cards.multimodal.text': '组合公路、铁路、航空与海运，适合复杂项目。',
      'services.cards.broker.title': '报关服务',
      'services.cards.broker.text': '编制报关单、证书并陪同查验。',
      'services.cards.china.title': '中国业务',
      'services.cards.china.text': '负责中国进出口、集货与保险。',
      'services.cards.air.title': '航空运输',
      'services.cards.air.text': '包机与定期航班，享受优先装卸。',
      'services.cards.warehousing.title': '仓储服务',
      'services.cards.warehousing.text': '仓储作业、分拣与保税仓。',
      'services.cards.insurance.title': '保险服务',
      'services.cards.insurance.text': '为全程运输提供风险保障。'
    },
    about: {
      'about.heroTitle': '全程供应链管理',
      'about.heroText':
        'Caravan Logistics 整合公路、铁路与航空资源，规划独联体及全球线路，负责报关、保险并跟进交付。',
      'about.heroCta': '联系我们',
      'about.whyTitle': '合作优势',
      'about.card1.badge': '公路',
      'about.card1.title': '自有车队',
      'about.card1.text': '依据项目匹配篷车、冷藏车及特种车辆，24/7监控司机并办理各类许可。',
      'about.card2.badge': '铁路',
      'about.card2.title': '车皮与平台资源',
      'about.card2.text': '预留车皮与平台，办理ETRAN单证，确保通关顺畅无滞留。',
      'about.card3.badge': '空运与海运',
      'about.card3.title': '多式联运方案',
      'about.card3.text': '航空+公路无缝衔接，提供拼箱/拼车服务，并为每一段运输购买保险。'
    },
    contacts: {
      'contacts.heroTitle': 'Caravan Logistics 客服中心',
      'contacts.heroText': '全天候响应公路、铁路与航空运输咨询，覆盖独联体及全球项目。',
      'contacts.formTitle': '给我们留言',
      'contacts.formText': '提交需求，我们将提供报价并解答文件、时效与费用问题。',
      'contacts.labelFirst': '名字',
      'contacts.labelLast': '姓氏',
      'contacts.labelEmail': '邮箱',
      'contacts.labelMessage': '留言',
      'contacts.submit': '提交申请'
    },
    portfolio: {
      'breadcrumbs.home': '首页',
      'breadcrumbs.news': '新闻',
      'portfolio.heroTitle': '物流资讯与洞察',
      'portfolio.heroText': '分享 Caravan Logistics 在公路、铁路与航空领域的费率、路线与技术更新。',
      'portfolio.search': '搜索资讯',
      'portfolio.feature1.badge': '分析',
      'portfolio.feature1.time': '2 分钟',
      'portfolio.feature1.title': 'Caravan Logistics 送上新年祝福',
      'portfolio.feature1.text1':
        '每年12月我们都会总结成果并准备客户专属礼物。2024年团队制作了带有 Caravan 标识的节日礼盒，送达所有核心办公室。',
      'portfolio.feature1.text2':
        '祝福中附上感谢信，并邀请合作伙伴加入私享俱乐部，共同规划新一年的项目。',
      'portfolio.feature2.badge': '项目团队',
      'portfolio.feature2.time': '2 分钟',
      'portfolio.feature2.title': 'Caravan Logistics 向合作伙伴致贺新年',
      'portfolio.feature2.text1':
        '团队制作了视频与贺卡，分享2025年的主要成果与祝福，礼盒中还附赠额外服务优惠券。',
      'portfolio.feature2.text2':
        '感谢客户的信任，我们将在未来项目中投入更多支持与互动。',
      'portfolio.block1.title': '聚焦独联体基础设施',
      'portfolio.block1.text': '携手主要货运站和口岸，即使旺季也能预留舱位、避免延误。',
      'portfolio.block2.title': '全球线路',
      'portfolio.block2.text': '提供来自中国、土耳其、欧洲和美国的集运、报关与保险服务。',
      'portfolio.sidebar1.badge': '公路物流',
      'portfolio.sidebar1.time': '5 分钟',
      'portfolio.sidebar1.text': '更新比什凯克—阿拉木图FMCG班车时刻表。',
      'portfolio.sidebar2.badge': '铁路服务',
      'portfolio.sidebar2.time': '6 分钟',
      'portfolio.sidebar2.text': '上线明斯克—比什凯克重型设备平台车。',
      'portfolio.sidebar3.badge': '分析',
      'portfolio.sidebar3.time': '4 分钟',
      'portfolio.sidebar3.text': '数字化追踪如何减少边境滞留——Caravan 案例。',
      'portfolio.sidebar4.badge': '项目',
      'portfolio.sidebar4.time': '7 分钟',
      'portfolio.sidebar4.text': '为跨境电商打造中国多式联运方案。',
      'portfolio.sidebar5.badge': '航空运输',
      'portfolio.sidebar5.time': '5 分钟',
      'portfolio.sidebar5.text': '组织首架搭载电子元件的包机。',
      'portfolio.subscribeTitle': '订阅最新动态',
      'portfolio.subscribeText': '获取 Caravan Logistics 的费率、路线与实用建议。',
      'portfolio.subscribePlaceholder': '请输入邮箱',
      'portfolio.subscribeButton': '立即订阅'
    },
    'service-auto': {
      'service.heroTitle': '公路运输',
      'service.heroText': '我们的公路车队覆盖哈萨克斯坦、吉尔吉斯斯坦、俄罗斯等市场，提供从选车到交付的全流程服务。',
      'service.bodyTitle': '公路运输内容',
      'service.bodyParagraph1':
        '根据货物匹配篷车、冷藏车或特种车辆，线路规划考虑季节、轴重限制和许可要求。所有车辆装有GPS，由调度中心7×24监控。',
      'service.bodyParagraph2':
        '我们办理行车单、CMR/TIR、通行证与保险，专属协调员跟踪口岸进度并及时通知客户，最大限度减少等待时间。'
    },
    'service-rail': {
      'service.heroTitle': '铁路运输',
      'service.heroText': '组织覆盖独联体、中国和欧洲的铁路运输，灵活使用自有及租赁车皮。',
      'service.bodyTitle': '铁路解决方案',
      'service.bodyParagraph1':
        '预留棚车、敞车、集装箱平台和漏斗车，编制ETRAN单据，协调线路并保证车辆按时到位。',
      'service.bodyParagraph2':
        '协助换轨、加封并提供照片报告，与枢纽站合作可实现合单、安排押运以及保险。'
    },
    'service-multimodal': {
      'service.heroTitle': '多式联运',
      'service.heroText': '组合公路、铁路、航空与海运，兼顾时效与预算。',
      'service.bodyTitle': '多式联运的组织方式',
      'service.bodyParagraph1':
        '分析路线后选择最佳运输组合，在每一段负责进出口手续，监督中转并为风险投保。',
      'service.bodyParagraph2':
        '依托港口、机场及内陆枢纽的合作伙伴，结合在线跟踪和应急方案，保证衔接顺畅。'
    },
    'service-broker': {
      'service.heroTitle': '报关服务',
      'service.heroText': '自有报关团队处理复杂票据并陪同查验。',
      'service.bodyTitle': '报关支持',
      'service.bodyParagraph1':
        '进行商品归类、选择HS编码并计算税费，准备发票、装箱单、原产地与合格证书。',
      'service.bodyParagraph2':
        '与海关保持紧密沟通，加快放行，帮助客户降低合规风险与额外成本。'
    },
    'service-china': {
      'service.heroTitle': '中国业务',
      'service.heroText': '负责中国与独联体之间的进出口链路。',
      'service.bodyTitle': '中国项目',
      'service.bodyParagraph1':
        '安排工厂提货、仓库集货以及中国境内报关，协调装货窗口并监督供应商执行。',
      'service.bodyParagraph2':
        '提供公路、铁路、海运或航空等多种运输方案，并负责认证、保险及文件寄送。'
    },
    'service-air': {
      'service.heroTitle': '航空运输',
      'service.heroText': '提供包机与定期航班的紧急运输，全天候支持。',
      'service.bodyTitle': '航空服务',
      'service.bodyParagraph1':
        '设计经伊斯坦布尔、迪拜、中国及欧盟枢纽的航线，安排优先装卸并在需要时控制温度。',
      'service.bodyParagraph2':
        '可处理危险品，购买承运人责任险并提供实时跟踪直至交付。'
    },
    'service-warehousing': {
      'service.heroTitle': '仓储服务',
      'service.heroText': '自有及合作仓库可集货、贴标并备货。',
      'service.bodyTitle': '仓储方案',
      'service.bodyParagraph1':
        '提供保税与普通仓储、交叉理货、贴标与套装组装，并输出照片报告。',
      'service.bodyParagraph2':
        '可对接客户WMS或提供我们的报表，同时完成打托、封签和出口文件。'
    },
    'service-insurance': {
      'service.heroTitle': '保险服务',
      'service.heroText': '在运输各阶段提供货物与责任险。',
      'service.bodyTitle': '保险支持',
      'service.bodyParagraph1':
        '根据货物和路线定制保险方案，覆盖基础险、战争险及延误险，并与大型保险公司合作。',
      'service.bodyParagraph2':
        '协助出单和理赔，代表客户与保险公司沟通，确保赔付及时到账。'
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const initMobileNav = () => {
    const header = document.querySelector('header');
    const nav = header?.querySelector('nav');
    if (!header || !nav) return;

    let toggle = header.querySelector('.nav-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'nav-toggle';
      toggle.setAttribute('aria-label', 'Открыть меню');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<span></span><span></span><span></span>';
      header.appendChild(toggle);
    }

    const closeNav = () => {
      document.body.classList.remove('nav-open');
      toggle?.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = !document.body.classList.contains('nav-open');
      document.body.classList.toggle('nav-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', (event) => {
      if (document.body.classList.contains('nav-open') && !header.contains(event.target)) {
        closeNav();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeNav();
      }
    });

    const mqDesktop = window.matchMedia('(min-width: 993px)');
    mqDesktop.addEventListener('change', (event) => {
      if (event.matches) {
        closeNav();
      }
    });
  };

  const initServicesSlider = () => {
    const slider = document.querySelector('.services-slider');
    if (!slider) return;
    const track = slider.querySelector('.games');
    if (!track) return;

    const container = slider.closest('.trending') || slider.parentElement;
    const buttons = container?.querySelectorAll('.services-arrow') || [];

    const getStep = () => {
      const card = track.querySelector('.block');
      if (!card) return track.clientWidth;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || '0');
      return card.getBoundingClientRect().width + gap;
    };

    const updateButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      buttons.forEach((button) => {
        const direction = button.dataset.direction;
        if (direction === 'prev') {
          button.disabled = track.scrollLeft <= 1;
        } else if (direction === 'next') {
          button.disabled = track.scrollLeft >= maxScroll - 1;
        }
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const direction = button.dataset.direction === 'next' ? 1 : -1;
        track.scrollBy({ left: direction * getStep(), behavior: 'smooth' });
      });
    });

    track.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateButtons);
    });

    window.addEventListener('resize', updateButtons);
    updateButtons();
  };

  const ensureModal = () => {
    let existing = document.getElementById('callbackModal');
    if (existing) return existing;

    const template = `
      <div class="modal" id="callbackModal" aria-hidden="true">
        <div class="modal-overlay" data-close="modal"></div>
        <div class="modal-window" role="dialog" aria-modal="true" aria-labelledby="callbackModalTitle">
          <button
            class="modal-close"
            type="button"
            data-close="modal"
            aria-label="Закрыть окно"
            data-i18n="modal.closeLabel"
            data-i18n-attr="aria-label"
          >&times;</button>
          <h3 id="callbackModalTitle" data-i18n="modal.title">Оставьте заявку</h3>
          <p data-i18n="modal.description">Укажите контакты и кратко опишите груз — мы подготовим предложение и свяжемся в течение 15 минут.</p>
          <form class="modal-form">
            <label>
              <span data-i18n="modal.label.name">Имя</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Как к вам обращаться"
                data-i18n="modal.placeholder.name"
                data-i18n-attr="placeholder"
              >
            </label>
            <label>
              <span data-i18n="modal.label.phone">Телефон</span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+996 ___ ___ ___"
                data-i18n="modal.placeholder.phone"
                data-i18n-attr="placeholder"
              >
            </label>
            <label>
              <span data-i18n="modal.label.details">Описание груза</span>
              <textarea
                name="details"
                rows="3"
                placeholder="Маршрут, тип груза, сроки"
                data-i18n="modal.placeholder.details"
                data-i18n-attr="placeholder"
              ></textarea>
            </label>
            <button type="submit" data-i18n="modal.submit">Отправить</button>
            <p class="modal-hint" data-i18n="modal.hint">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
            <p class="modal-success" aria-live="polite"></p>
          </form>
        </div>
      </div>`;

    document.body.insertAdjacentHTML('beforeend', template);
    existing = document.getElementById('callbackModal');
    return existing;
  };

  const modal = ensureModal();
  const overlay = modal.querySelector('.modal-overlay');
  const closeControls = modal.querySelectorAll('[data-close="modal"]');
  const successNode = modal.querySelector('.modal-success');
  const form = modal.querySelector('form');
  const page = document.body.dataset.page || 'index';
  const savedLang = localStorage.getItem('lang') || 'ru';
  let currentLang = translations[savedLang] ? savedLang : 'ru';

  const getTranslationValue = (lang, key) => {
    const langDict = translations[lang];
    if (!langDict) return null;
    return langDict.common?.[key] ?? langDict[page]?.[key] ?? null;
  };

  const translate = (key) => getTranslationValue(currentLang, key) ?? getTranslationValue('ru', key) ?? key;

  const highlightServiceNav = () => {
    const currentServiceKey = document.body.dataset.service;
    if (!currentServiceKey) return;
    document.querySelectorAll('[data-service-link]').forEach((link) => {
      link.classList.toggle('active', link.dataset.serviceLink === currentServiceKey);
    });
  };

  const initFaqPopups = () => {
    const cards = document.querySelectorAll('.faq-card');
    if (!cards.length) return;
    let activePopup = null;

    const closePopup = (popup) => {
      popup.classList.remove('is-visible');
      popup.setAttribute('aria-hidden', 'true');
      const trigger = popup.closest('.faq-card')?.querySelector('.faq-trigger');
      trigger?.setAttribute('aria-expanded', 'false');
      if (activePopup === popup) {
        activePopup = null;
      }
    };

    cards.forEach((card) => {
      const trigger = card.querySelector('.faq-trigger');
      const popup = card.querySelector('.faq-popup');
      if (!trigger || !popup) return;

      trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        if (activePopup && activePopup !== popup) {
          closePopup(activePopup);
        }
        const isOpen = popup.classList.contains('is-visible');
        if (isOpen) {
          closePopup(popup);
        } else {
          popup.classList.add('is-visible');
          popup.setAttribute('aria-hidden', 'false');
          trigger.setAttribute('aria-expanded', 'true');
          activePopup = popup;
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!activePopup) return;
      if (!event.target.closest('.faq-card')) {
        closePopup(activePopup);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && activePopup) {
        closePopup(activePopup);
      }
    });
  };

  const initSnowfall = () => {
    if (page !== 'portfolio') return;
    const targets = document.querySelectorAll('.feature-card, .sidebar-card');
    if (!targets.length) return;

    const snowLayer = document.createElement('div');
    snowLayer.className = 'snow-container';
    document.body.appendChild(snowLayer);
    let hideTimeout;

    const spawnSnow = () => {
      const flakes = 35;
      for (let i = 0; i < flakes; i += 1) {
        const flake = document.createElement('span');
        flake.className = 'snowflake';
        flake.style.left = `${Math.random() * 100}%`;
        const size = Math.random() * 6 + 4;
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.animationDuration = `${Math.random() * 1.2 + 1.2}s`;
        flake.style.animationDelay = `${Math.random() * 0.3}s`;
        flake.style.opacity = `${Math.random() * 0.5 + 0.4}`;
        snowLayer.appendChild(flake);
        flake.addEventListener('animationend', () => flake.remove());
      }
      snowLayer.classList.add('is-visible');
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        snowLayer.classList.remove('is-visible');
      }, 1800);
    };

    targets.forEach((card) => {
      card.addEventListener('click', () => {
        spawnSnow();
      });
    });
  };

  const initFeatureThumbHeights = () => {
    if (page !== 'portfolio') return;
    const cards = document.querySelectorAll('.feature-card');
    if (!cards.length) return;
    let resizeTimer;
    const stackedQuery = window.matchMedia('(max-width: 1024px)');

    const applyHeight = () => {
      const stacked = stackedQuery.matches;
      cards.forEach((card) => {
        const mainImg = card.querySelector('.feature-main img');
        const thumbs = card.querySelector('.feature-thumbs');
        if (!thumbs) return;
        if (stacked) {
          thumbs.style.maxHeight = '';
          return;
        }
        if (!mainImg) {
          thumbs.style.maxHeight = '';
          return;
        }
        const height = mainImg.getBoundingClientRect().height;
        thumbs.style.maxHeight = height ? `${height}px` : '';
      });
    };

    const watchImage = (img) => {
      if (!img) return;
      if (img.complete) {
        applyHeight();
      } else {
        img.addEventListener('load', applyHeight);
      }
    };

    cards.forEach((card) => {
      watchImage(card.querySelector('.feature-main img'));
    });

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(applyHeight, 150);
    });

    stackedQuery.addEventListener('change', applyHeight);
    applyHeight();
  };

  const initPartnerPopups = () => {
    const logos = document.querySelectorAll('.partners__logo');
    if (!logos.length) return;
    const partnerKeys = {
      Kulikov: 'partner.kulikov',
      'Kant TSP': 'partner.kant',
      'TransLogistica Kazakhstan': 'partner.translogistica',
      Шоро: 'partner.shoro',
      'Coca-Cola': 'partner.cocacola',
      Nestle: 'partner.nestle',
      Knauf: 'partner.knauf',
      Шатура: 'partner.shatura',
      'World Class': 'partner.worldclass',
      Керамин: 'partner.keramin',
      Borusan: 'partner.borusan',
      Bellona: 'partner.bellona',
      Tesladoor: 'partner.tesladoor',
      DHL: 'partner.dhl',
      LG: 'partner.lg',
      Termoplex: 'partner.termoplex',
      'Фабрика окон': 'partner.fabrika',
      'AU Grand': 'partner.augrand',
      'ANTO.KG': 'partner.anto',
      'Кумтор': 'partner.kumtor'
    };
    let activePopup = null;

    const closePopup = () => {
      if (!activePopup) return;
      activePopup.closest('.partners__logo')?.classList.remove('is-active');
      activePopup.setAttribute('aria-hidden', 'true');
      activePopup = null;
    };

    logos.forEach((logo) => {
      const key = logo.querySelector('img')?.alt?.trim();
      const storyKey = key ? partnerKeys[key] : null;
      if (!storyKey) return;
      const story = {
        since: translate(`${storyKey}.since`),
        stats: translate(`${storyKey}.stats`)
      };
      const popup = document.createElement('div');
      popup.className = 'partner-popup';
      popup.setAttribute('role', 'dialog');
      popup.setAttribute('aria-hidden', 'true');
      popup.innerHTML = `<strong>${key}</strong><p>${story.since}. ${story.stats}</p>`;
      logo.appendChild(popup);

      logo.addEventListener('click', (event) => {
        event.stopPropagation();
        if (activePopup && activePopup !== popup) {
          closePopup();
        }
        const willOpen = !logo.classList.contains('is-active');
        if (willOpen) {
          logo.classList.add('is-active');
          popup.setAttribute('aria-hidden', 'false');
          activePopup = popup;
        } else {
          closePopup();
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.partners__logo')) {
        closePopup();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    });
  };

  const initContactWidget = () => {
    if (document.querySelector('.contact-widget')) return;
    const widget = document.createElement('div');
    widget.className = 'contact-widget';
    widget.innerHTML = `
      <div class="contact-widget__panel" aria-hidden="true">
        <h4>${translate('contact.widget.title')}</h4>
        <p>${translate('contact.widget.text')}</p>
        <div class="contact-widget__links">
          <a class="contact-widget__link whatsapp" href="https://wa.me/996555113333" target="_blank" rel="noopener">
            <span class="contact-widget__icon">WA</span>
            <div>
              <span>${translate('contact.widget.whatsapp.label')}</span>
              <small>${translate('contact.widget.whatsapp.desc')}</small>
            </div>
          </a>
          <a class="contact-widget__link telegram" href="https://t.me/+996555113333" target="_blank" rel="noopener">
            <span class="contact-widget__icon">TG</span>
            <div>
              <span>${translate('contact.widget.telegram.label')}</span>
              <small>${translate('contact.widget.telegram.desc')}</small>
            </div>
          </a>
          <a class="contact-widget__link phone" href="tel:+996555113333">
            <span class="contact-widget__icon">TEL</span>
            <div>
              <span>${translate('contact.widget.phone.label')}</span>
              <small>${translate('contact.widget.phone.desc')}</small>
            </div>
          </a>
        </div>
      </div>
      <button class="contact-widget__toggle" type="button" aria-label="${translate('contact.widget.toggle')}">
        <span class="contact-widget__toggle-icon">☎</span>
      </button>`;
    document.body.appendChild(widget);
    const toggle = widget.querySelector('.contact-widget__toggle');
    const panel = widget.querySelector('.contact-widget__panel');

    const setState = (isOpen) => {
      widget.classList.toggle('is-open', isOpen);
      panel?.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      toggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    toggle?.addEventListener('click', (event) => {
      event.stopPropagation();
      setState(!widget.classList.contains('is-open'));
    });

    document.addEventListener('click', (event) => {
      if (!widget.contains(event.target)) {
        setState(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setState(false);
      }
    });
  };

  const openModal = () => {
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
    successNode.textContent = '';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  };

  document.querySelectorAll('[data-modal="callback"]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      openModal();
    });
  });

  closeControls.forEach((control) => {
    control.addEventListener('click', closeModal);
  });

  overlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || 'Без имени';
    const phone = formData.get('phone') || 'Не указан';
    const details = formData.get('details') || 'Нет описания';

    const subject = encodeURIComponent('Заявка с сайта Caravan Logistics');
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\nОписание: ${details}`
    );

    window.location.href = `mailto:info@caravan-logistics.com?subject=${subject}&body=${body}`;
    successNode.textContent = translate('modal.success');
    form.reset();
    setTimeout(closeModal, 2500);
  });

  const initBlurNumberHighlights = () => {
    if (document.body.dataset.page !== 'index') return;

    const containers = document.querySelectorAll(
      '.hero--info, .features .info .block, .tool-card__placeholder.blur'
    );

    containers.forEach((container) => {
      container.querySelectorAll('.digit-highlight').forEach((node) => {
        node.replaceWith(document.createTextNode(node.textContent || ''));
      });

      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          if (!node.nodeValue || !/\d/.test(node.nodeValue)) {
            return NodeFilter.FILTER_REJECT;
          }
          const parent = node.parentElement;
          if (!parent || parent.closest('.digit-highlight')) {
            return NodeFilter.FILTER_REJECT;
          }
          if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      });

      const nodes = [];
      while (walker.nextNode()) {
        nodes.push(walker.currentNode);
      }

      nodes.forEach((node) => {
        const text = node.nodeValue;
        if (!text) return;
        const parts = text.split(/(\d[\d\s.,–\/-]*)/g);
        if (parts.length === 1) return;
        const fragment = document.createDocumentFragment();
        parts.forEach((part, index) => {
          if (!part) return;
          if (index % 2 === 1) {
            const span = document.createElement('span');
            span.className = 'digit-highlight';
            span.textContent = part;
            fragment.appendChild(span);
          } else {
            fragment.appendChild(document.createTextNode(part));
          }
        });
        node.replaceWith(fragment);
      });
    });
  };

  const applyLanguage = (lang) => {
    if (!translations[lang]) {
      lang = 'ru';
    }
    currentLang = lang;
    const dict = {
      ...(translations[lang]?.common || {}),
      ...(translations[lang]?.[page] || {})
    };

    Object.entries(dict).forEach(([key, value]) => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
        const attr = node.getAttribute('data-i18n-attr');
        if (attr) {
          node.setAttribute(attr, value);
        } else {
          node.textContent = value;
        }
      });
    });

    document.documentElement.lang = lang === 'zh' ? 'zh' : lang === 'en' ? 'en' : 'ru';
    localStorage.setItem('lang', lang);
    document.querySelectorAll('.lang-switcher button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    highlightServiceNav();
    initBlurNumberHighlights();
  };

  document.body.addEventListener('click', (event) => {
    const btn = event.target.closest('.lang-switcher button');
    if (!btn) return;
    event.preventDefault();
    if (btn.dataset.lang) {
      applyLanguage(btn.dataset.lang);
    }
  });

  window.checkEmail = function checkEmail() {
    const email = document.querySelector('#emailField')?.value || '';
    if (!email.includes('@')) {
      alert(translate('email.validation.missingAt'));
    } else if (!email.includes('.')) {
      alert(translate('email.validation.missingDot'));
    } else {
      alert(translate('email.validation.success'));
    }
  };

  initFaqPopups();
  initSnowfall();
  initFeatureThumbHeights();
  initPartnerPopups();
  initContactWidget();
  initMobileNav();
  initServicesSlider();
  applyLanguage(currentLang);
});
