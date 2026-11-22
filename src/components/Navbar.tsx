import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import KorshakLogo from './KorshakLogo';
import LanguagePicker from './LanguagePicker';
import { useT } from '../i18n/context';
import styles from './Navbar.module.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useT();

  const navLinks = [
    { to: '/posluhy', label: t.nav.services },
    { to: '/kontakty', label: t.nav.contacts },
  ];
  const mobileNavLinks = [{ to: '/', label: t.nav.home }, ...navLinks];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logoLink} aria-label={t.nav.logoLabel} onClick={() => setMenuOpen(false)}>
          <KorshakLogo width={140} />
        </Link>

        <div className={styles.actions}>
          {/* Desktop nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <LanguagePicker />

          {/* Burger button */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {mobileNavLinks.map(({ to, label }) => (
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
