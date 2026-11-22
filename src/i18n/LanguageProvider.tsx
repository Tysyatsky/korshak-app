import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext } from './context';
import { saveLanguage } from './detect';
import { applyDocumentMeta } from './documentMeta';
import type { Lang } from './types';

const currentPath = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return window.location.pathname.slice(base.length) || '/';
};

interface Props {
  initialLang: Lang;
  children: ReactNode;
}

export function LanguageProvider({ initialLang, children }: Props) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    saveLanguage(next);
    setLangState(next);
  }, []);

  useEffect(() => {
    applyDocumentMeta(lang, currentPath());
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
