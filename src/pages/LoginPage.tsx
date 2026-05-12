import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './LoginPage.module.scss';
import '../styles/global.scss';

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.99-4.3 2.99-7.31Z" fill="#4285F4"/>
    <path d="M10 20c2.7 0 4.96-.9 6.61-2.46l-3.23-2.5c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.75-5.59-4.11H1.08v2.58A9.997 9.997 0 0 0 10 20Z" fill="#34A853"/>
    <path d="M4.41 11.89A5.98 5.98 0 0 1 4.1 10c0-.66.11-1.3.31-1.89V5.53H1.08A9.997 9.997 0 0 0 0 10c0 1.61.38 3.14 1.08 4.47l3.33-2.58Z" fill="#FBBC04"/>
    <path d="M10 3.98c1.46 0 2.77.5 3.8 1.49l2.85-2.85A9.96 9.96 0 0 0 10 0 9.997 9.997 0 0 0 1.08 5.53l3.33 2.58C5.2 5.73 7.4 3.98 10 3.98Z" fill="#EA4335"/>
  </svg>
);

const LoginPage = () => {
  const handleGoogleLogin = () => {
    console.log('OAuth: Google login triggered');
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={`container ${styles.container}`}>
          <div className={styles.card}>
            <div className={styles.brand}>
              <span className={styles.brandDot} />
              <span className={styles.brandName}>УЗД Коршак</span>
            </div>

            <div className={styles.heading}>
              <h3>Вхід до особистого кабінету</h3>
              <p className={`caption ${styles.sub}`}>
                Увійдіть, щоб переглядати свої записи та результати обстежень
              </p>
            </div>

            <button className={styles.oauthBtn} onClick={handleGoogleLogin}>
              <GoogleIcon />
              Увійти через Google
            </button>

            <p className={styles.privacy}>
              Продовжуючи, ви погоджуєтесь з{' '}
              <a href="#" className={styles.privacyLink}>
                політикою конфіденційності
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
