import { type Ref, type RefObject } from 'react';
import { Link } from 'react-router';
import { services } from '../../data/home';
import styles from './ServicesPreview.module.scss';
import btn from '../../styles/buttons.module.scss';
import { useT } from '../../i18n/context';
import { usePricesAsOf } from '../../i18n/usePricesDate';

export default function ServicesPreview({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  const { t, l } = useT();
  const pricesAsOf = usePricesAsOf();

  return (
    <section ref={sectionRef as Ref<HTMLElement>} className={styles.servicesPreview}>
      <div className={`container ${styles.servicesPrevInner}`}>
        <div className={styles.servicesLeft}>
          <h2 className={styles.sectionTitle}>{t.servicesPreview.heading}</h2>
          <p className={styles.servicesDisclaimer}>{pricesAsOf}</p>
        </div>
        <div className={styles.servicesRight}>
          <div className={styles.servicesList}>
            {services.slice(0, 5).map((s) => (
              <div key={s.name.uk} className={styles.serviceRow}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceName}>{l(s.name)}</span>
                  {s.note && <span className={styles.serviceNote}>{l(s.note)}</span>}
                </div>
                <div className={styles.serviceBottom}>
                  <span className={styles.servicePrep}>
                    {s.prep && (
                      <>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M8 7v4M8 5.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                        {l(s.prep)}
                      </>
                    )}
                  </span>
                  <span className={styles.servicePrice}>{s.price} {t.currency}</span>
                </div>
              </div>
            ))}
          </div>
          <Link to="/posluhy" className={btn.btnFilled}>{t.servicesPreview.all}&nbsp;&nbsp;→</Link>
        </div>
      </div>
    </section>
  );
}
