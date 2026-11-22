import { useState } from 'react';
import { faqs } from '../../data/home';
import { useT } from '../../i18n/context';
import styles from './FaqSection.module.scss';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.faqIcon}>
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Always rendered (hidden when closed) so the answers are in the pre-rendered HTML */}
      <div className={styles.faqAnswer} hidden={!open}>
        {answer.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  );
}

export default function FaqSection() {
  const { t, l } = useT();

  return (
    <section className={styles.faq}>
      <div className={`container ${styles.faqInner}`}>
        <div className={styles.faqHeader}>
          <h2>{t.faq.heading}</h2>
          <p>{t.faq.description}</p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((f) => (
            <FaqItem key={f.question.uk} question={l(f.question)} answer={l(f.answer)} />
          ))}
        </div>
      </div>
    </section>
  );
}
