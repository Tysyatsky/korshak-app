import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import KorshakLogo from './KorshakLogo';
import styles from './Navbar.module.scss';

const NAV_LINKS = [
  { to: '/posluhy', label: 'Послуги' },
  { to: '/kontakty', label: 'Контакти' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logoLink} aria-label="KORSHAK — головна" onClick={() => setMenuOpen(false)}>
          <KorshakLogo width={140} />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Burger button */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile / tablet menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
