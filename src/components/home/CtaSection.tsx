import styles from './CtaSection.module.scss';
import { asset } from '../../utils/asset';
import CtaLines from './CtaLines';
import { useT } from '../../i18n/context';


export default function CtaSection() {
  const { t } = useT();

  return (
    <section className={styles.cta}>
      <CtaLines className={styles.ctaLines} />

      <div className={`container ${styles.ctaInner}`}>
        <div className={styles.ctaLeft}>
          <h2>{t.cta.heading}</h2>
          <p>{t.cta.description}</p>
        </div>

        <div className={styles.ctaPhoto}>
          <img src={asset('images/doctor-portrait.jpg')} alt={t.doctorName} />
        </div>

        <p className={styles.ctaNote}>{t.cta.note}</p>

        <div className={styles.ctaRight}>
          <div className={styles.ctaHours}>
            <span>{t.hoursDays.toUpperCase()}</span>
            <span>9:00 — 15:00</span>
          </div>
          <a href="tel:+380988138942" className={styles.ctaPhone}>+38 098 813 89 42</a>
        </div>
      </div>
    </section>
  );
}
