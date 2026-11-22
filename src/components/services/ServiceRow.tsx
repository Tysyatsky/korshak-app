import type { Service } from '../../data/services';
import { useT } from '../../i18n/context';
import styles from './ServiceRow.module.scss';

interface Props {
  service: Service;
  className?: string;
}

const ServiceRow = ({ service, className }: Props) => {
  const { t, l } = useT();

  return (
    <div className={`${styles.row}${className ? ` ${className}` : ''}`}>
      <div className={styles.info}>
        <span className={styles.name}>{l(service.name)}</span>
        {service.note && <span className={styles.note}>{l(service.note)}</span>}
        {service.prep && (
          <span className={styles.prep}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M7 4V7.5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {l(service.prep)}
          </span>
        )}
      </div>
      <span className={styles.price}>{service.price} {t.currency}</span>
    </div>
  );
};

export default ServiceRow;
