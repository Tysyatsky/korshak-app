import styles from './Career.module.scss';

const career = [
  {
    place: 'ВНМУ',
    title: 'Медична освіта',
    description: 'Закінчила Вінницький медичний інститут ім. М. І. Пирогова',
  },
  {
    place: 'Рівне та Львів',
    title: 'Інтернатура',
    description: 'Інтернатура у Рівненській обласній клінічній лікарні та на кафедрі рентгенології Львова дала безцінний досвід живої практики',
  },
  {
    place: 'РОКЛДЦ',
    title: 'Лікар УЗД',
    description: 'Почала працювати у Рівненському обласному діагностичному центрі ім. В. Поліщука, закріплювати свої знання та навички на практиці',
  },
  {
    place: 'РОКЛДЦ',
    title: 'Завідувач відділенням',
    description: 'Невдовзі стала завідувачем відділення й до 2017 року поєднувала керівництво з активною практикою. Це створило свої виклики, але й допомогло ще більше заглибитись у діагностику',
  },
  {
    place: 'Рівне',
    title: 'Незалежна практика лікаря УЗД',
    description: 'У 2011 році обрала власну практику, щоб мати свободу розвиватися, постійно вдосконалюватись і працювати в комфортному темпі',
  },
];

function Career() {
  return (
    <section className={styles.career}>
      <div className={`container ${styles.careerInner}`}>
        <h3 className={styles.sectionTitle}>Кар'єрний шлях</h3>
        <div className={styles.timeline}>
          {career.map((item, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineLeft}>
                <span className={styles.timelinePlace}>{item.place}</span>
              </div>
              <div className={styles.timelineDivider}>
                <div className={styles.timelineDot} />
                {i < career.length - 1 && <div className={styles.timelineLine} />}
              </div>
              <div className={styles.timelineRight}>
                <p className={styles.timelineTitle}>{item.title}</p>
                <p className={styles.timelineDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Career;
