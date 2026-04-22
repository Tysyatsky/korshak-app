import styles from './CertsSection.module.scss';
import { asset } from '../../utils/asset';

export default function CertsSection() {
  return (
    <section className={styles.certs}>
      <div className={`container ${styles.certsInner}`}>
        <div className={styles.certsLeft}>
          <h2 className={styles.certsHeading}>Сертифікати — показники розвитку і відданості медицині</h2>
          <p className={styles.certsDesc}>Від самого початку своєї практики і дотепер, я завжди інвестую у знання й нові методики, щоб кожен ваш прийом був максимально точним</p>
        </div>
        <div className={styles.certsStack}>
          {[1, 6, 9, 12].map((n) => (
            <div key={n} className={styles.certCard}>
              <img src={asset(`images/cert-${n}.jpg`)} alt={`Сертифікат ${n}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
