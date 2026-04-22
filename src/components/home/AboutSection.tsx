import { stats } from '../../data/home';
import styles from './AboutSection.module.scss';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.aboutSectionInner}`}>
        <div className={styles.aboutSectionLeft}>
          <h2 className={styles.aboutSectionHeading}>Про мене</h2>
          <div className={styles.aboutSectionText}>
            <p>
              Як лікар ультразвукової діагностики вищої категорії, я пройшла шлях від діагностичного центру до приватної практики. До 2017 року працювала завідуючим відділенням ультразвукової діагностики, проводила післядипломну освіту лікарів Тернопільського та Львівського медичних інститутів.
            </p>
            <p>
              Сьогодні веду приватну практику, поєднуючи звичайні огляди з важкими викликами, серед яких — проведення УЗД у хірургічному кабінеті.
            </p>
          </div>
        </div>
        <div className={styles.aboutSectionRight}>
          <div className={styles.aboutStatsList}>
            {stats.map((s) => (
              <div key={s.value} className={styles.aboutStatItem}>
                <span className={styles.aboutStatValue}>{s.value}</span>
                <span className={styles.aboutStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
