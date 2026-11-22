import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { routes } from './routes';
import { pageMeta, normalizePath } from './data/seo';
import { detectLanguage } from './i18n/detect';
import { LanguageProvider } from './i18n/LanguageProvider';
import { applyDocumentMeta } from './i18n/documentMeta';
import type { Lang } from './i18n/types';

const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });

declare global {
  interface Window { gtag: (...args: unknown[]) => void; }
}

const initialLang = detectLanguage();

let lastPath = router.state.location.pathname;
router.subscribe((state) => {
  const path = state.location.pathname;
  if (path === lastPath) return;
  lastPath = path;
  // Keep title, description and canonical in sync on client-side navigation
  applyDocumentMeta(document.documentElement.lang as Lang, path);
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
});

const app = (
  <StrictMode>
    <LanguageProvider initialLang={initialLang}>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </LanguageProvider>
  </StrictMode>
);

const rootEl = document.getElementById('root')!;
// Pre-rendered pages contain Ukrainian markup, so hydrate them only when the page renders in Ukrainian.
// Other routes (dev, /login via 404.html) and English visitors render from scratch,
// discarding fallback markup that belongs to a different page or language.
const isPrerendered = normalizePath(router.state.location.pathname) in pageMeta;
if (rootEl.hasChildNodes() && isPrerendered && initialLang === 'uk') {
  hydrateRoot(rootEl, app);
} else {
  rootEl.replaceChildren();
  createRoot(rootEl).render(app);
}
