import type { Service } from '../../data/services';
import styles from './ServiceRow.module.scss';

interface Props {
  service: Service;
}

const ServiceRow = ({ service }: Props) => (
  <div className={styles.row}>
    <div className={styles.info}>
      <span className={styles.name}>{service.name}</span>
      {service.note && <span className={styles.note}>{service.note}</span>}
      {service.prep && (
        <span className={styles.prep}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 4V7.5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {service.prep}
        </span>
      )}
    </div>
    <span className={styles.price}>{service.price} грн</span>
  </div>
);

export default ServiceRow;
