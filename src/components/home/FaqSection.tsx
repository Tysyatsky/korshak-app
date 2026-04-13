import { useState } from 'react';
import { faqs } from '../../data/home';
import styles from './FaqSection.module.scss';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.faqIcon}>
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className={styles.faqAnswer}>
          {answer.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className={styles.faq}>
      <div className={`container ${styles.faqInner}`}>
        <div className={styles.faqHeader}>
          <h3>Популярні питання</h3>
          <p>Ваш спокій — завжди мій пріоритет. Тут ви знайдете відповіді на ваші потенційні питання</p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((f) => (
            <FaqItem key={f.question} question={f.question} answer={f.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
