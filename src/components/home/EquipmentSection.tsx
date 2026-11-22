import styles from './EquipmentSection.module.scss';
import { asset } from '../../utils/asset';
import { useT } from '../../i18n/context';

export default function EquipmentSection() {
  const { t } = useT();

  return (
    <section className={styles.equipment}>
      <div className={`container ${styles.equipmentInner}`}>
        <div className={styles.equipmentInfo}>
          <h2 className={`h3 ${styles.equipmentTitle}`}>{t.equipment.heading}</h2>
          <div className={styles.equipmentDesc}>
            {t.equipment.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <div className={styles.equipmentImageWrap}>
          <img src={asset('images/equipment.jpg')} alt={t.equipment.alt} />
          <span className={`${styles.callout} ${styles.calloutA}`}>{t.equipment.calloutA}</span>
          <span className={`${styles.callout} ${styles.calloutB}`}>{t.equipment.calloutB}</span>
          <span className={`${styles.callout} ${styles.calloutC}`}>{t.equipment.calloutC}</span>
        </div>
      </div>
    </section>
  );
}
