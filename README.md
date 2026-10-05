# Almaty Local

Независимый путеводитель по Алматы: места, маршруты, карта и честные рекомендации от местного.

## Стек

- Nuxt 4 + TypeScript
- Tailwind CSS
- Directus 11
- PostgreSQL 16
- Docker Compose

## Быстрый запуск frontend

```bash
cp .env.example .env
npm install
npm run dev
```

Откройте `http://localhost:3000`.

Frontend сейчас использует demo-данные из `data/mock.ts`, поэтому интерфейс можно разрабатывать независимо от CMS.

## Запуск Directus + PostgreSQL

```bash
cp .env.example .env
docker compose up -d
```

Directus: `http://localhost:8055`

Локальные demo credentials из `.env.example`:

- email: `admin@almaty.local`
- password: `change-me-now`

Перед деплоем обязательно замените пароль и `DIRECTUS_SECRET`.

## Схема данных

SQL лежит в `database/schema.sql` и создаёт:

- `categories`
- `districts`
- `tags`
- `places`
- `place_tags`
- `routes`
- `route_places`
- `articles`

При первом создании volume PostgreSQL файл выполняется автоматически. Если база уже была создана, изменения схемы нужно накатывать миграциями или пересоздать локальный volume.

## Структура frontend

```text
components/
  AppHeader.vue
  AppFooter.vue
  CategoryChips.vue
  PlaceCard.vue
  RouteCard.vue
composables/
  useDirectus.ts
  useGuideContent.ts
data/
  mock.ts
pages/
  index.vue
  places/index.vue
  places/[slug].vue
  routes/index.vue
  routes/[slug].vue
  map.vue
```

## Подключение реального Directus

`composables/useDirectus.ts` уже создаёт Directus HTTP client. Следующий шаг — заменить demo refs в `useGuideContent.ts` на запросы `$fetch` к Directus REST API и настроить public read permissions для опубликованного контента.

## Что уже есть в UI

- Главная с hero и категориями
- Карточки мест с `Local pick` / `Hidden gem`
- Каталог с фильтрацией по category query param
- Детальная страница места с авторским verdict
- Каталог маршрутов
- Детальная страница маршрута с последовательностью остановок
- Заглушка интерактивной карты
- Responsive layout

## Следующие задачи

1. Создать Directus metadata/relations для таблиц и настроить роли.
2. Перевести `useGuideContent` на CMS.
3. Подключить 2GIS или Mapbox.
4. Добавить загрузку фотографий через Directus Files / S3-compatible storage.
5. Добавить SEO: sitemap, OG, structured data.
6. Завести первые 30 реальных мест и 5 маршрутов.

## Почему Nuxt 4

Для нового проекта используется Nuxt 4. Nuxt 3 достиг EOL 31 июля 2026 года, поэтому начинать новый production-проект на v3 уже нерационально. `srcDir: '.'` оставляет компактную знакомую структуру каталогов в корне проекта.
