import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './ContactsPage.module.scss';
import { MAP_LINK, MAP_EMBED } from '../data/config';
import '../styles/global.scss';

const faqs = [
  {
    question: 'Як проходить обстеження? Скільки часу займає?',
    answer: 'Для проведення обстеження потрібно звільнити від одягу частину тіла, яка буде обстежуватися, та лягти на кушетку. На ділянки, що обстежуються, наноситься гель. У кабінеті є серветки, але можна взяти власний рушник за бажанням.\n\nЧас обстеження залежить від об\'єму обстеження і складності, зазвичай це 15–30 хв.',
  },
  {
    question: 'Чи потрібно якось готуватися до обстежень?',
    answer: 'Деякі обстеження вимагають підготовки. Наприклад, УЗД органів черевної порожнини проводиться натще, а УЗД органів малого тазу — при наповненому сечовому міхурі. Уточніть деталі підготовки при записі.',
  },
  {
    question: 'Чи отримаю я висновок одразу?',
    answer: 'Так, висновок видається одразу після проведення обстеження.',
  },
  {
    question: 'Чи можна провести декілька УЗД за один раз?',
    answer: 'Так, за наявності часу та відповідної підготовки можна провести кілька видів обстеження за один візит.',
  },
  {
    question: 'Чи можна пройти УЗД, якщо я приймаю ліки від тиску або серця?',
    answer: 'Так, прийом більшості медикаментів не є протипоказанням до проведення УЗД діагностики.',
  },
];

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

function ContactsPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* Address */}
      <section className={styles.address}>
        <div className={`container ${styles.addressInner}`}>
          <div className={styles.addressText}>
            <h2 className={styles.title}>Контакти</h2>
            <h3>Адреса</h3>
            <p>
              Знайдіть нас за адресою, враховуючи зручний розклад і доступність для відвідувачів
            </p>
            <address className={styles.addressDetails}>
              Рівне, вул. Карнаухова 25А,<br />
              Центральна міська лікарня,<br />
              терапевтичний корпус,<br />
              1 поверх, кабінет №121
            </address>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Відкрити на мапі
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className={styles.mapEmbed}>
            <iframe
              title="Адреса клініки"
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <h2>Запис на УЗД судин за телефоном</h2>
            <p>Жодних форм та очікувань — просто телефонуйте, щоб узгодити час і бути впевненими, що все під контролем</p>
            <p className={styles.ctaNote}>Запис на обстеження здійснюється тільки під час робочих годин</p>
            <div className={styles.ctaContact}>
              <span>пн — пт&nbsp;&nbsp;9:00 — 15:00</span>
              <a href="tel:+380988138942" className={styles.ctaPhone}>+38 098 813 89 42</a>
            </div>
          </div>
          <div className={styles.ctaImage}>
            <img src="/images/doctor-portrait.jpg" alt="Коршак Наталія" />
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      <Footer />
    </div>
  );
}

export default ContactsPage;
