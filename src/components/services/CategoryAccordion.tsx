import { useState } from 'react';
import type { Category } from '../../data/services';
import ServiceRow from './ServiceRow';
import styles from './CategoryAccordion.module.scss';

interface Props {
  categories: Category[];
}

const CategoryAccordion = ({ categories }: Props) => {
  const [openId, setOpenId] = useState<string | null>(categories[0]?.id ?? null);

  return (
    <div className={styles.accordion}>
      {categories.map((cat) => {
        const isOpen = openId === cat.id;
        return (
          <div key={cat.id} className={styles.item}>
            <button
              className={`${styles.header} ${isOpen ? styles.headerOpen : ''}`}
              onClick={() => setOpenId(prev => prev === cat.id ? null : cat.id)}
            >
              {cat.label}
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`${styles.body} ${isOpen ? styles.bodyOpen : ''}`}>
              <div className={styles.bodyInner}>
                {cat.services.map((s) => (
                  <ServiceRow key={s.name} service={s} className={styles.row} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryAccordion;
