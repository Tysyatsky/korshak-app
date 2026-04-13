import { Link } from 'react-router';
import KorshakLogo from './KorshakLogo';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logoLink} aria-label="KORSHAK — головна">
          <KorshakLogo width={160} />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
