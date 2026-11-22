import type { Lang } from '../i18n/types';

export const SITE_URL = 'https://uzd-rivne-korshak.rv.ua';

// GitHub Pages serves pre-rendered pages as folders, so /posluhy redirects to /posluhy/
export const canonicalUrl = (path: string) =>
  SITE_URL + (path === '/' ? '/' : `${path.replace(/\/$/, '')}/`);

export const normalizePath = (path: string) =>
  path.length > 1 ? path.replace(/\/$/, '') : path;

export interface PageMeta {
  title: string;
  description: string;
}

// Pages listed here are pre-rendered to static HTML at build time and go into the sitemap.
// Pre-rendered HTML is Ukrainian; the English meta is applied on the client.
export const pageMetaByLang: Record<Lang, Record<string, PageMeta>> = {
  uk: {
    '/': {
      title: 'Коршак Наталія Віталіївна — УЗД, м. Рівне',
      description: 'Коршак Наталія Віталіївна — лікар УЗД вищої категорії. Швидка та точна ультразвукова діагностика у Рівному.',
    },
    '/posluhy': {
      title: 'Послуги та ціни на УЗД — Коршак Наталія, м. Рівне',
      description: 'Повний перелік УЗД-обстежень і актуальні ціни: черевна порожнина та нирки, малий таз, щитоподібна та молочні залози, лімфовузли, суглоби, судини. Рівне, вул. Карнаухова 25А.',
    },
    '/kontakty': {
      title: 'Контакти та запис на УЗД — Коршак Наталія, м. Рівне',
      description: 'Запис на УЗД за телефоном +38 098 813 89 42, пн — пт 9:00 — 15:00. Рівне, вул. Карнаухова 25А, Центральна міська лікарня, кабінет №121.',
    },
  },
  en: {
    '/': {
      title: 'Nataliia Korshak — Ultrasound, Rivne',
      description: 'Nataliia Korshak, highest category ultrasound physician. Fast and accurate ultrasound diagnostics in Rivne, Ukraine.',
    },
    '/posluhy': {
      title: 'Ultrasound services and prices — Nataliia Korshak, Rivne',
      description: 'Full list of ultrasound examinations and current prices: abdomen and kidneys, pelvis, thyroid and breasts, lymph nodes, joints, vessels. 25A Karnaukhova St, Rivne.',
    },
    '/kontakty': {
      title: 'Contacts and booking — Nataliia Korshak, Rivne',
      description: 'Book an ultrasound by phone at +38 098 813 89 42, Mon — Fri 9:00 — 15:00. 25A Karnaukhova St, Rivne, Central City Hospital, room 121.',
    },
  },
};

export const pageMeta = pageMetaByLang.uk;
