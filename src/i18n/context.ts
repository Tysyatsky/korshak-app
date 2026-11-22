import { createContext, useContext } from 'react';
import type { Lang, Localized } from './types';
import { strings, type Strings } from './strings';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'uk',
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

// UI strings plus a helper that picks the current language from a Localized value
export function useT(): { t: Strings; l: (value: Localized) => string; lang: Lang } {
  const { lang } = useLanguage();
  return { t: strings[lang], l: (value) => value[lang], lang };
}
