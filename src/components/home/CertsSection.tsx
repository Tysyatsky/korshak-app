import { useT } from '../../i18n/context';
import styles from './CertsSection.module.scss';
import { asset } from '../../utils/asset';

export default function CertsSection() {
  const { t } = useT();

  return (
    <section className={styles.certs}>
      <div className={`container ${styles.certsInner}`}>
        <div className={styles.certsLeft}>
          <h2 className={styles.certsHeading}>{t.certs.heading}</h2>
          <p className={styles.certsDesc}>{t.certs.description}</p>
        </div>
        <div className={styles.certsStack}>
          {[1, 6, 9, 12].map((n) => (
            <div key={n} className={styles.certCard}>
              <img src={asset(`images/cert-${n}.jpg`)} alt={`${t.certs.alt} ${n}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
