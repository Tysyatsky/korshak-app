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

// Pages listed here are pre-rendered to static HTML at build time and go into the sitemap
export const pageMeta: Record<string, PageMeta> = {
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
};
