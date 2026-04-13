import styles from './EquipmentSection.module.scss';

export default function EquipmentSection() {
  return (
    <section className={styles.equipment}>
      <div className={`container ${styles.equipmentInner}`}>
        <div className={styles.equipmentInfo}>
          <h3 className={styles.equipmentTitle}>Моє обладнання</h3>
          <div className={styles.equipmentDesc}>
            <p>Уважність — це основа моєї роботи: від кожної розмови з пацієнтом до вибору обладнання. За 25 років практики я навчилась бачити те, що інші можуть пропустити, та спиратися лише на найнадійніші технології.</p>
            <p>Завдяки цьому ви отримуєте чіткі відповіді, економію часу та впевненість у кожній діагностиці.</p>
          </div>
        </div>
        <div className={styles.equipmentImageWrap}>
          <img src="/images/equipment.jpg" alt="Обладнання для УЗД діагностики" />
          <span className={`${styles.callout} ${styles.calloutA}`}>Чітко відображає найдрібніші структури</span>
          <span className={`${styles.callout} ${styles.calloutB}`}>Сканує структуру судин та кровотік</span>
          <span className={`${styles.callout} ${styles.calloutC}`}>Забезпечує якісне зображення</span>
        </div>
      </div>
    </section>
  );
}
