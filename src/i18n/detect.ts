import type { Lang } from './types';

const STORAGE_KEY = 'lang';

// Time zones that place the visitor in Ukraine. The time zone is a location signal that is
// available synchronously, so the page renders in the right language without a geo-IP request.
const UKRAINE_TIME_ZONES = new Set([
  'Europe/Kyiv',
  'Europe/Kiev',
  'Europe/Uzhgorod',
  'Europe/Zaporozhye',
  'Europe/Simferopol',
]);

function readSaved(): Lang | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'uk' || value === 'en' ? value : null;
  } catch {
    return null;
  }
}

export function saveLanguage(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage blocked: the choice just won't persist across visits
  }
}

function isInUkraine(): boolean {
  try {
    return UKRAINE_TIME_ZONES.has(Intl.DateTimeFormat().resolvedOptions().timeZone);
  } catch {
    return true;
  }
}

// A choice made with the picker wins; otherwise Ukrainian in Ukraine, English everywhere else
export function detectLanguage(): Lang {
  return readSaved() ?? (isInUkraine() ? 'uk' : 'en');
}
