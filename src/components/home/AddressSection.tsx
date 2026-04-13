import { MAP_EMBED } from '../../data/config';
import styles from './AddressSection.module.scss';

export default function AddressSection() {
  return (
    <section className={styles.address}>
      <div className={`container ${styles.addressInner}`}>
        <div className={styles.addressLeft}>
          <div className={styles.addressContent}>
            <h2 className={styles.addressHeading}>Адреса</h2>
            <p className={styles.addressText}>
              Рівне. вул. Карнаухова 25А,<br />
              Центральна міська лікарня,<br />
              терапевтичний корпус, 1 поверх, кабінет №121
            </p>
          </div>
          <a
            href="https://www.google.com/maps/place/%D0%9A%D0%B0%D0%B1%D1%96%D0%BD%D0%B5%D1%82+%D0%A3%D0%97%D0%94+%E2%84%96121+%D0%9A%D0%BE%D1%80%D1%88%D0%B0%D0%BA+%D0%9D%D0%B0%D1%82%D0%B0%D0%BB%D1%96%D1%97+%D0%92%D1%96%D1%82%D0%B0%D0%BB%D1%96%D1%97%D0%B2%D0%BD%D0%B8+(%D0%A2%D0%B5%D1%80%D0%B0%D0%BF%D0%B5%D0%B2%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81)/@50.6047997,26.26621,16.75z/data=!4m15!1m8!3m7!1s0x472f136aafb4e331:0x825ed86406f062b1!2sMykoly+Karnaukhova+St,+25+%D0%90,+Rivne,+Rivnens'ka+oblast,+Ukraine,+33017!3b1!8m2!3d50.6043186!4d26.2666772!16s%2Fg%2F11bw3yy451!3m5!1s0x472f13385827033f:0xd9708729fa0f394e!8m2!3d50.6047867!4d26.2655172!16s%2Fg%2F11y07nny6q?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.addressBtn}
          >
            Відкрити на мапі&nbsp;&nbsp;→
          </a>
        </div>
        <div className={styles.addressMap}>
          <iframe
            title="Адреса клініки"
            src={MAP_EMBED}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
