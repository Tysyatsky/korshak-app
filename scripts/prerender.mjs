// Runs after the client and SSR builds: writes static HTML for every page in src/data/seo.ts,
// so crawlers see real headings and links without executing JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, pageMeta, canonicalUrl, structuredData } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

// Client-only fallback for routes that are not pre-rendered (e.g. /login).
// GitHub Pages serves 404.html for unknown paths and the app renders the route from scratch.
fs.writeFileSync(
  path.join(dist, '404.html'),
  template.replace('<head>', '<head>\n    <meta name="robots" content="noindex" />'),
);

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

for (const [route, meta] of Object.entries(pageMeta)) {
  const appHtml = await render(route);

  const html = template
    // function replacers so "$" in content is never treated as a replacement pattern
    .replace(/<title>[^<]*<\/title>/, () => `<title>${escapeText(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, (_, a, b) => a + escapeAttr(meta.description) + b)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, (_, a, b) => a + canonicalUrl(route) + b)
    .replace(/<div id="root"><\/div>/, () => `<div id="root">${appHtml}</div>`)
    // "<" escaped so JSON text can never close the script tag
    .replace('</head>', () =>
      `  <script type="application/ld+json">${JSON.stringify(structuredData(route)).replace(/</g, '\\u003c')}</script>\n  </head>`);

  if (!html.includes(appHtml)) throw new Error(`Could not inject markup for ${route}`);

  const outFile = path.join(dist, route, 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`prerendered ${route} -> ${path.relative(root, outFile)}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
