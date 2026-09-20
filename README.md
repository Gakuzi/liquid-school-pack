# Liquid Glass School & Tasks Pack

Комплект универсальных карточек для Home Assistant в стиле **Liquid Glass** с эффектом матового стекла и поддержкой сенсоров электронных дневников (Госуслуги.Школа), календарей и списков дел.

## Возможности

1. **Liquid School Schedule Card** (`custom:liquid-school-schedule-card`)
   - Поддержка сенсоров электронных дневников (`sensor.*`) и календарей (`calendar.*`).
   - Автоматический расчет перемен между уроками.
   - Вкладки переключения «Сегодня» и «Завтра».
   - Полная настройка через визуальный интерфейс (UI Editor).

2. **Liquid Daily Tasks Card** (`custom:liquid-daily-tasks-card`)
   - Подключение списков задач (`todo.*`).
   - Синхронизация с Google Tasks (Android) и Напоминаниями (iOS Reminders).
   - Интерактивные чекбоксы выполнения прямо на панели.
   - Прогресс-бар выполнения задач за день.

## Установка вручную
1. Скопируйте `dist/liquid-school-pack.js` в папку `/config/www/`.
2. В Home Assistant откройте: **Настройки -> Панели -> значок трех точек -> Ресурсы -> Добавить ресурс**:
   - URL: `/local/liquid-school-pack.js`
   - Тип: `Модуль JavaScript`

## Установка через HACS
1. Откройте HACS -> Пользовательские репозитории (Custom repositories).
2. Вставьте URL этого репозитория.
3. Категория: **Lovelace (Dashboard)**.
