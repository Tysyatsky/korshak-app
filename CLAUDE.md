# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server with HMR
npm run build      # type-check + Vite production build
npm run lint       # ESLint
npm run preview    # serve the dist/ build locally
```

No test framework is configured.

Deployment is to GitHub Pages via `npm run deploy` (runs build then `gh-pages`). The live site is at `uzd-rivne-korshak.rv.ua`.

## Architecture

**Single-page app** — React 19 + TypeScript + Vite. `src/main.tsx` is the true entry point; `src/App.tsx` is unused boilerplate.

**Routing** — React Router v7 with three Ukrainian-slug routes:
- `/` → `HomePage`
- `/posluhy` → `ServicesPage`
- `/kontakty` → `ContactsPage`

The router uses `basename: import.meta.env.BASE_URL` for GitHub Pages subdirectory compatibility. Google Analytics `page_view` events are fired via `router.subscribe`.

**Data layer** — All content is static TypeScript in `src/data/`:
- `services.ts` — full categorised price list (`Category[]` / `Service[]` types)
- `home.ts` — stats, featured services subset, reviews, FAQs
- `config.ts` — clinic address and Google Maps URLs

**Images** — stored in `public/images/`, always referenced through the `asset()` utility (`src/utils/asset.ts`), which prepends `BASE_URL`. Never use bare paths like `/images/...` or direct imports.

**Styling** — SCSS Modules for all component styles. Global typography, reset, and the `.container` layout class live in `src/styles/global.scss`. Design tokens are in `src/styles/_variables.scss` (colors, breakpoints, container width). Responsive breakpoints are applied with the `respond($size)` mixin from `src/styles/_mixins.scss` (sizes: `sm` 480px, `md` 768px, `lg` 1024px, `xl` 1280px) — all queries are mobile-via `max-width`.

**UI library** — Mantine v9 (`@mantine/core`, `@mantine/carousel`). `MantineProvider` wraps the app in `main.tsx`.

**Page composition** — Each page manually imports and composes `Navbar`, `Footer`, and its section components. `HomePage` uses a `useRef` passed to both `<ScrollToServices>` and `<ServicesPreview>` so the floating scroll button can programmatically scroll to the services section.

`src/pages/Sandbox.tsx` is a dev scratch page — it is not registered in the router.
