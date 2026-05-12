import { Link } from 'react-router';
import styles from './BackToHome.module.scss';

const BackToHome = () => (
  <Link to="/" className={styles.button} aria-label="На головну сторінку">
    ← На головну
  </Link>
);

export default BackToHome;
