import { NavLink } from 'react-router';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <NavLink to="/" className={styles.logo}>KORSHAK</NavLink>
          <p className={styles.hours}>
            пн — пт<br />
            9:00 — 15:00
          </p>
          <a href="tel:+380988138942" className={styles.phone}>
            +38 098 813 89 42
          </a>
          <p className={styles.copy}>© 2025 Наталія Коршак. Усі права захищені.</p>
        </div>

        <div className={styles.right}>
          <nav className={styles.nav}>
            <NavLink to="/pro-mene" className={styles.link}>Про мене</NavLink>
            <NavLink to="/posluhy" className={styles.link}>Послуги</NavLink>
            <NavLink to="/kontakty" className={styles.link}>Контакти</NavLink>
          </nav>
          <div className={styles.credits}>
            <p>Дизайн:&nbsp;<span>balumatkins</span></p>
            <p>Розробка:&nbsp;<span>tysyatsky</span></p>
          </div>
        </div>
      </div>

      <div className={styles.watermark}>KORSHAK</div>
    </footer>
  );
}

export default Footer;
