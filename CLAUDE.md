# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:3000
npm run build        # production build
npm run preview      # preview production build
```

Backend (Directus + PostgreSQL):
```bash
docker compose up -d          # start Directus (port 8055) and PostgreSQL
docker compose down           # stop
docker compose down -v        # stop and delete volumes (resets DB)
```

No linting or test commands are configured yet.

## Architecture

**Nuxt 4** with `srcDir: '.'` — pages, components, composables, and layouts all live at the project root (not inside a `src/` directory).

**Data layer (current MVP state):**
- All pages consume data via `composables/useGuideContent.ts`, which currently serves static mock data from `data/mock.ts`
- `composables/useDirectus.ts` provides a `$fetch` instance preconfigured to `NUXT_PUBLIC_DIRECTUS_URL/items` — ready to use but not yet wired up
- The next step is to replace the `ref()` stubs in `useGuideContent.ts` with actual Directus REST calls using `useDirectus()`

**Types** are in `types/content.ts`: `Category`, `District`, `Place`, `RouteStop`, `GuideRoute`. These mirror the database schema.

**Database schema** (`database/schema.sql`) is auto-applied by Docker when the PostgreSQL volume is first created. Tables: `categories`, `districts`, `tags`, `places`, `place_tags`, `routes`, `route_places`, `articles`. Schema changes on an existing volume require manual migration or volume recreation.

**Directus** acts as the headless CMS/admin UI. Public read permissions for published content still need to be configured in Directus before the frontend can fetch real data without auth.

**Environment**: copy `.env.example` to `.env`. The key frontend variable is `NUXT_PUBLIC_DIRECTUS_URL` (defaults to `http://localhost:8055`).
