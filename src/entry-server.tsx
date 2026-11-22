// Build-time only: renders a route to an HTML string for scripts/prerender.mjs
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { MantineProvider } from '@mantine/core';
import { routes } from './routes';

export { pageMeta, canonicalUrl } from './data/seo';
export { structuredData } from './data/structuredData';

export async function render(path: string): Promise<string> {
  const basename = import.meta.env.BASE_URL;
  const handler = createStaticHandler(routes, { basename });
  const url = new URL(basename.replace(/\/$/, '') + path, 'http://localhost');
  const context = await handler.query(new Request(url));
  if (context instanceof Response) {
    throw new Error(`Unexpected redirect while pre-rendering ${path}`);
  }
  const router = createStaticRouter(handler.dataRoutes, context);

  return renderToString(
    <StrictMode>
      <MantineProvider>
        <StaticRouterProvider router={router} context={context} />
      </MantineProvider>
    </StrictMode>,
  );
}
