import { useState } from 'react';
import { NavLink } from 'react-router';
import styles from './Navbar.module.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          KORSHAK
        </NavLink>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <NavLink to="/pro-mene" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} onClick={() => setMenuOpen(false)}>
            Про мене
          </NavLink>
          <NavLink to="/posluhy" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} onClick={() => setMenuOpen(false)}>
            Послуги
          </NavLink>
          <NavLink to="/kontakty" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} onClick={() => setMenuOpen(false)}>
            Контакти
          </NavLink>
        </nav>

        <a href="tel:+380988138942" className={styles.phone}>
          +38 098 813 89 42
        </a>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Відкрити меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
