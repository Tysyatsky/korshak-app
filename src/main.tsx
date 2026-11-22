import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { routes } from './routes';
import { pageMeta, canonicalUrl, normalizePath } from './data/seo';

const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });

declare global {
  interface Window { gtag: (...args: unknown[]) => void; }
}

// Keep title, description and canonical in sync on client-side navigation
function applyPageMeta(pathname: string) {
  const meta = pageMeta[normalizePath(pathname)];
  if (!meta) return;
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl(pathname));
}

let lastPath = router.state.location.pathname;
router.subscribe((state) => {
  const path = state.location.pathname;
  if (path === lastPath) return;
  lastPath = path;
  applyPageMeta(path);
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
});

const app = (
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
);

const rootEl = document.getElementById('root')!;
// Pre-rendered pages already contain markup, so hydrate them. Other routes (dev, /login via 404.html)
// render from scratch, discarding any fallback markup that belongs to a different page.
const isPrerendered = normalizePath(router.state.location.pathname) in pageMeta;
if (rootEl.hasChildNodes() && isPrerendered) {
  hydrateRoot(rootEl, app);
} else {
  rootEl.replaceChildren();
  createRoot(rootEl).render(app);
}
