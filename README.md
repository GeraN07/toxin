# TOXIN — Каталог номеров отеля
Проект "Toxin" / Next.js 15 + Server-side фильтрация  
Главная страница - <a href="https://toxin-eight.vercel.app">Ссылка</a><br>
____

## Структура проекта
<pre>
.
├── app/                   # Основная директория маршрутов Next.js (страницы, layout и т.п.)
│   ├── rooms-catalog/     # Страница каталога номеров
│   ├── rooms/             # Страница отдельного номера (динамический маршрут [id])
│   └── api/               # API маршруты (фильтрация и получение номера по ID)
│
├── components/            # Переиспользуемые компоненты: карточки, формы, хедеры, футеры
├── hooks/                 # Кастомные хуки (например, useCallendar)
├── public/                # Изображения, шрифты и статичные ассеты
├── styles/                # Глобальные стили проекта
├── types/                 # Общие типы для TypeScript
├── next.config.mjs        # Конфигурация Next.js (в т.ч. BASE_API_URL)
├── .env.local             # Файл окружения (API адреса, ключи)
└── ...
</pre>
____

## Использованные библиотеки (плагины)
Календарь (логика и стили)- <a href="https://github.com/t1m0n/air-datepicker">air-datepicker</a><br>
"Ползунок" - <a href="https://github.com/gipyeong-lee/react-ion-slider">react-ion-slider</a><br>
"Выпадающее" меню с функцией выбора различных "пунктов" (логика и стили) - <a href="https://github.com/reservamos/item-quantity-dropdown">item-quantity-dropdown</a><br>
Слайдер-карусель - <a href="https://v8.swiperjs.com/react">Swiper</a><br>
Постепенное, плавное "появление" блоков на странице - <a href="https://github.com/QODIO/revealator">Revealator</a><br>


