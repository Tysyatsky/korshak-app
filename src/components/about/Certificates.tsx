import { useRef } from 'react';
import styles from './Certificates.module.scss';

const certImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Certificates() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.certs}>
      <div className="container">
        <div className={styles.certsHeader}>
          <h3 className={styles.sectionTitle}>Мої сертифікати</h3>
          <span className={styles.certsHint}>Гортайте →</span>
        </div>
      </div>
      <div className={styles.certsScroll} ref={scrollRef}>
        {certImages.map((n) => (
          <div key={n} className={styles.certCard}>
            <img src={`/images/cert-${n}.jpg`} alt={`Сертифікат ${n}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
