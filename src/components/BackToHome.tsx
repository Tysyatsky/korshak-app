import { Link } from 'react-router';
import { useT } from '../i18n/context';
import styles from './BackToHome.module.scss';

const BackToHome = () => {
  const { t } = useT();
  return (
    <Link to="/" className={styles.button} aria-label={t.backToHome.aria}>
      ← {t.backToHome.label}
    </Link>
  );
};

export default BackToHome;
