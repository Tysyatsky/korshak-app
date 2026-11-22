import { pageMetaByLang, canonicalUrl, normalizePath } from '../data/seo';
import type { Lang } from './types';

// Keep <html lang>, title and description in sync with the language and the current page
export function applyDocumentMeta(lang: Lang, pathname: string) {
  document.documentElement.lang = lang;
  const meta = pageMetaByLang[lang][normalizePath(pathname)];
  if (!meta) return;
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl(pathname));
}
