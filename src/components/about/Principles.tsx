import styles from './Principles.module.scss';

const principles = [
  { title: 'Абсолютний комфорт клієнта', description: 'Тому я роблю все можливе, щоб ви максимально почувалися спокійно й впевнено у своєму виборі' },
  { title: 'Прозорість обстеження', description: 'Детальніше про те, звідки я починала та які кроки привели мене до приватної практики' },
  { title: 'Чіткість результатів', description: 'Від щоденних діагностик до виїздів із власним обладнанням у хірургічні кабінети — мій шлях як лікаря УЗД справді насичений' },
];

function Principles() {
  return (
    <section className={styles.principles}>
      <div className={`container ${styles.principlesInner}`}>
        <p className={styles.principlesTitle}>Мої основні принципи:</p>
        <div className={styles.principlesGrid}>
          {principles.map((p) => (
            <div key={p.title} className={styles.principleCard}>
              <h3>{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Principles;
