import { NavLink } from 'react-router';
import styles from './Footer.module.scss';
import KorshakWatermark from './KorshakWatermark';
import { useT } from '../i18n/context';

function Footer() {
  const { t } = useT();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <p className={styles.hours}>
            {t.hoursDays}<br />
            9:00 — 15:00
          </p>
          <a href="tel:+380988138942" className={styles.phone}>
            +38 098 813 89 42
          </a>
          <p className={styles.copy}>{t.footer.copyright}</p>
        </div>

        <div className={styles.right}>
          <nav className={styles.nav}>
            <NavLink to="/" end className={styles.link}>{t.nav.home}</NavLink>
            <NavLink to="/posluhy" className={styles.link}>{t.nav.services}</NavLink>
            <NavLink to="/kontakty" className={styles.link}>{t.nav.contacts}</NavLink>
          </nav>
          {/* <div className={styles.credits}>
            <p>Дизайн:&nbsp;<span>balumatkina</span></p>
            <p>Розробка:&nbsp;<span>tysyatsky</span></p>
          </div> */}
        </div>
      </div>

      <KorshakWatermark className={styles.watermark} />
    </footer>
  );
}

export default Footer;
