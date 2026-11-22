import { useLanguage, useT } from '../i18n/context';
import { LANGS, type Lang } from '../i18n/types';
import { strings } from '../i18n/strings';
import styles from './LanguagePicker.module.scss';

const SHORT_LABEL: Record<Lang, string> = { uk: 'Укр', en: 'Eng' };

function LanguagePicker({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const { t } = useT();

  return (
    <div role="group" aria-label={t.langPicker} className={`${styles.picker}${className ? ` ${className}` : ''}`}>
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={strings[code].langName}
          aria-pressed={lang === code}
          className={`${styles.option} ${lang === code ? styles.optionActive : ''}`}
          onClick={() => setLang(code)}
        >
          {SHORT_LABEL[code]}
        </button>
      ))}
    </div>
  );
}

export default LanguagePicker;
