import styles from './Hero.module.scss';
import { asset } from '../../utils/asset';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <h1 className={styles.heading}>
          Коршак Наталія <br/>УЗД <br/>м. Рівне
        </h1>

        <div className={styles.colLeft}>
          <p className={styles.description}>
            Швидка та точна ультразвукова діагностика. Передове, якісне обладнання, надійні результати — і впевненість у вашому здоров'ї
          </p>
        </div>

        <div className={styles.colCenter}>
          <img src={asset('images/doctor-hero.jpg')} alt="Коршак Наталія" className={styles.heroImage} />
        </div>

        <div className={styles.colRight}>
          <div className={styles.nav}>
            <div className={styles.credentialStack}>
              <span className={styles.credentialText}>Лікар вищої категорії</span>
              <span className={styles.credentialText}>30+ років практики</span>
            </div>
          </div>

          <div className={styles.credentialsGroup}>
            <span className={styles.contactHours}>Години роботи</span>
            <span className={styles.contactHours}>пн — пт</span>
            <span className={styles.contactHours}>9:00 – 15:00</span>
          </div>

          <div>
            <a href="tel:+380988138942" className={styles.contactPhone}>
              Телефон для запису<br/>
              +38 098 813 89 42
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
