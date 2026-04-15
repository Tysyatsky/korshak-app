import styles from './CtaSection.module.scss';
import { asset } from '../../utils/asset';


export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <svg className={styles.ctaLines} viewBox="0 0 240 240" fill="none" aria-hidden="true">
        <g stroke="white" strokeWidth="1" strokeOpacity="0.3">
          <line x1="240" y1="0" x2="0" y2="0" />
          <line x1="240" y1="0" x2="0" y2="48" />
          <line x1="240" y1="0" x2="0" y2="96" />
          <line x1="240" y1="0" x2="0" y2="144" />
          <line x1="240" y1="0" x2="0" y2="192" />
          <line x1="240" y1="0" x2="0" y2="240" />
          <line x1="240" y1="0" x2="48" y2="240" />
          <line x1="240" y1="0" x2="96" y2="240" />
          <line x1="240" y1="0" x2="144" y2="240" />
          <line x1="240" y1="0" x2="192" y2="240" />
          <line x1="240" y1="0" x2="240" y2="240" />
        </g>
      </svg>

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
