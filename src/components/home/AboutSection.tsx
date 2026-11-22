import { stats } from '../../data/home';
import { useT } from '../../i18n/context';
import styles from './AboutSection.module.scss';

export default function AboutSection() {
  const { t, l } = useT();

  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.aboutSectionInner}`}>
        <div className={styles.aboutSectionLeft}>
          <h2 className={styles.aboutSectionHeading}>{t.about.heading}</h2>
          <div className={styles.aboutSectionText}>
            {t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <div className={styles.aboutSectionRight}>
          <div className={styles.aboutStatsList}>
            {stats.map((s) => (
              <div key={s.value} className={styles.aboutStatItem}>
                <span className={styles.aboutStatValue}>{s.value}</span>
                <span className={styles.aboutStatLabel}>{l(s.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
