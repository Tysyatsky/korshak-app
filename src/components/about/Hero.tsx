import { Fragment } from 'react';
import styles from './Hero.module.scss';
import { asset } from '../../utils/asset';
import { useT } from '../../i18n/context';

const Hero = () => {
  const { t } = useT();

  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <h1 className={styles.heading}>
          {t.hero.heading.map((line, i) => (
            <Fragment key={i}>{i > 0 && <br />}{line} </Fragment>
          ))}
        </h1>

        <div className={styles.colLeft}>
          <p className={styles.description}>{t.hero.description}</p>
        </div>

        <div className={styles.colCenter}>
          <img src={asset('images/doctor-hero.jpg')} alt={t.doctorName} className={styles.heroImage} />
        </div>

        <div className={styles.colRight}>
          <div className={styles.nav}>
            <div className={styles.credentialStack}>
              <span className={styles.credentialText}>{t.hero.category}</span>
              <span className={styles.credentialText}>{t.hero.experience}</span>
            </div>
          </div>

          <div className={styles.credentialsGroup}>
            <span className={styles.contactHours}>{t.hero.hoursLabel}</span>
            <span className={styles.contactHours}>{t.hoursDays}</span>
            <span className={styles.contactHours}>9:00 – 15:00</span>
          </div>

          <div>
            <a href="tel:+380988138942" className={styles.contactPhone}>
              {t.hero.phoneLabel}<br/>
              +38 098 813 89 42
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
