import styles from './Reviews.module.scss';

const reviews = [
  { text: 'Просто спокійно, чітко, без зайвого. Пояснила, показала, на все відповіла. Дуже радий, що потрапив саме до неї — все по суті', name: 'Ігор Кривич', role: 'Клієнт' },
  { text: 'Не знаю як ви то бачите, але побачили те чого інші не бачили 3 рази до того. Я була перелякана за своє життя а ви його врятували. Спасибі величезне', name: 'Наталія Мисюра', role: 'Клієнтка' },
  { text: 'У моєї мами були складнощі, і ми вже не знали куди йти. Наталія єдина, хто нормально подивився і сказав, що з тим всім робити', name: 'Галина Ковальчук', role: 'Клієнтка' },
  { text: 'Звертався за порадою знайомого лікаря. Не пожалкував. Професійно', name: 'Юрій Демчук', role: 'Клієнт' },
  { text: 'Якби всі лікарі були такі, як вона, то я б не боялась ходити на обстеження. Спокійна, але видно що профі', name: 'Юлія Мозолюк', role: 'Клієнтка' },
];

function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={`container ${styles.reviewsInner}`}>
        <h3 className={styles.sectionTitle}>Відгуки клієнтів</h3>
        <div className={styles.reviewsGrid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.reviewCard}>
              <p className={styles.reviewText}>{r.text}</p>
              <div className={styles.reviewAuthor}>
                <span className={styles.reviewName}>{r.name}</span>
                <span className={styles.reviewRole}>{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
