import styles from './CtaSection.module.scss';
import { asset } from '../../utils/asset';
import CtaLines from './CtaLines';


export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <CtaLines className={styles.ctaLines} />

      <div className={`container ${styles.ctaInner}`}>
        <div className={styles.ctaLeft}>
          <h2>Запис на УЗД за телефоном</h2>
          <p>Жодних форм та очікувань — просто телефонуйте, щоб узгодити час і бути впевненими, що все під контролем</p>
        </div>

        <div className={styles.ctaPhoto}>
          <img src={asset('images/doctor-portrait.jpg')} alt="Коршак Наталія" />
        </div>

        <p className={styles.ctaNote}>Запис на обстеження здійснюється тільки під час робочих годин</p>

        <div className={styles.ctaRight}>
          <div className={styles.ctaHours}>
            <span>ПН — ПТ</span>
            <span>9:00 — 15:00</span>
          </div>
          <a href="tel:+380988138942" className={styles.ctaPhone}>+38 098 813 89 42</a>
        </div>
      </div>
    </section>
  );
}
