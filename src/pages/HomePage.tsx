import { useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './HomePage.module.scss';
import '../styles/global.scss';
import Hero from '../components/about/Hero';

const stats = [
  { value: '25+', label: 'років сумлінної лікарської практики' },
  { value: '8000+', label: 'пацієнтів, що отримали діагностику' },
  { value: '20+', label: 'сертифікатів підвищення кваліфікації' },
  { value: '3', label: 'лікарі, з якими я тісно співпрацюю' },
];

const services = [
  { name: 'УЗД органів черевної порожнини', note: 'Печінки, жовчного міхура, підшлункової залози, селезінки', price: 400 },
  { name: 'УЗД нирок і нижньої третини сечоводів', note: null, price: 400 },
  { name: 'УЗД наднирників', note: null, price: 300 },
  { name: 'УЗД органів черевної порожнини та нирок', note: null, price: 500 },
  { name: 'УЗД органів малого тазу у чоловіків', note: null, price: 400 },
  { name: 'УЗД щитоподібної залози', note: null, price: 300 },
  { name: 'УЗД молочних залоз', note: null, price: 400 },
];

const reviews = [
  {
    text: 'Її висновки для мене завжди стопроцентна гарантія. Якщо вона щось написала — я впевнена, що там все чітко',
    name: 'Мартинюк Галина',
    role: 'Клієнтка',
  },
  {
    text: 'Просто спокійно, чітко, без зайвого. Пояснила, показала, на все відповіла. Дуже радий, що потрапив саме до неї — все по суті',
    name: 'Ігнацевич Ігор',
    role: 'Клієнт',
  },
  {
    text: 'Не знаю як ви то бачите, але побачили те чого інші не бачили 3 рази до того. Я була перелякана за своє життя а ви його врятували. Спасибі величезне',
    name: 'Наталія Мисюра',
    role: 'Клієнтка',
  },
  {
    text: 'Я з нею працюю вже років десять. І за цей час жодного разу не було, щоб її висновок був «мимо». Дуже глибоко в темі, і дуже уважна до всього',
    name: 'Юрій Демчук',
    role: 'Клієнт',
  },
];

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

function HomePage() {
  return (
    <div className={styles.page}>
      {/* <Navbar /> */}

      {/* Hero */}
      {/* <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1>
              Коршак<br />
              Наталія<br />
              УЗД судин<br />
              м. Рівне
            </h1>
            <div className={styles.heroMeta}>
              <p className={styles.heroTitle}>Лікар вищої категорії<br />25+ років&nbsp;практики</p>
              <div className={styles.heroContact}>
                <span>пн — пт&nbsp;&nbsp;9:00 — 15:00</span>
                <a href="tel:+380988138942" className={styles.heroPhone}>+38 098 813 89 42</a>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/doctor-hero.jpg" alt="Коршак Наталія — лікар УЗД судин" />
          </div>
        </div>
      </section> */}
      <Hero />

      {/* Stats */}
      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((s) => (
            <div key={s.value} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className={styles.aboutPreview}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.aboutQuote}>
            <p>
              Ставитися до пацієнта потрібно так, як я хотіла б, щоб ставились до мене. Чуйно. Уважно. Не зашкодити, а допомогти.
            </p>
            <p className={styles.aboutQuoteSecondary}>
              Саме так звучить моє кредо, яким я керуюсь кожного дня
            </p>
          </div>
          <div className={styles.aboutBody}>
            <p>
              Від самого початку своєї практики і дотепер, я завжди інвестую у знання й нові методики, щоб кожен ваш прийом був максимально точним
            </p>
            <p>
              Уважність — це основа моєї роботи: від кожної розмови з пацієнтом до вибору обладнання. За 25 років практики я навчилась бачити те, що інші можуть пропустити, та спиратися лише на найнадійніші технології.
            </p>
            <p>
              Завдяки цьому ви отримуєте чіткі відповіді, економію часу та впевненість у кожній діагностиці.
            </p>
            <Link to="/pro-mene" className={styles.linkArrow}>
              Більше про мене
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className={styles.servicesPreview}>
        <div className={`container ${styles.servicesPrevInner}`}>
          <h2 className={styles.sectionTitle}>Послуги</h2>
          <div className={styles.servicesList}>
            {services.map((s) => (
              <div key={s.name} className={styles.serviceRow}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>{s.name}</span>
                  {s.note && <span className={styles.serviceNote}>{s.note}</span>}
                </div>
                <span className={styles.servicePrice}>{s.price} грн</span>
              </div>
            ))}
          </div>
          <div className={styles.servicesFooter}>
            <p className={styles.servicesDisclaimer}>Усі ціни та послуги актуальні станом на травень 2025 року</p>
            <Link to="/posluhy" className={styles.btnOutline}>Усі послуги</Link>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className={styles.certs}>
        <div className={`container ${styles.certsInner}`}>
          <div className={styles.certsHeader}>
            <h3>Сертифікати — показники розвитку і відданості медицині</h3>
            <p>15+ інших сертифікатів</p>
          </div>
          <div className={styles.certsGrid}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={styles.certCard}>
                <img src={`/images/cert-${n}.jpg`} alt={`Сертифікат ${n}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={styles.reviews}>
        <div className={`container ${styles.reviewsInner}`}>
          <h3 className={styles.reviewsTitle}>Відгуки про мене</h3>
          <div className={styles.reviewsGrid}>
            {reviews.map((r) => (
              <div key={r.name} className={styles.reviewCard}>
                <p className={styles.reviewText}>{r.text}</p>
                <div className={styles.reviewAuthor}>
                  <span className={styles.reviewName}>{r.name}</span>
                  <span className={styles.reviewRole}>{r.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className={styles.equipment}>
        <div className={`container ${styles.equipmentInner}`}>
          <div className={styles.equipmentImage}>
            <img src="/images/equipment.jpg" alt="Обладнання для УЗД діагностики" />
          </div>
          <div className={styles.equipmentInfo}>
            <h3>Моє обладнання</h3>
            <ul className={styles.equipmentFeatures}>
              <li>
                <span className={styles.featureDot} />
                Сканує структуру судин та кровотік
              </li>
              <li>
                <span className={styles.featureDot} />
                Забезпечує якісне зображення
              </li>
              <li>
                <span className={styles.featureDot} />
                Чітко відображає найдрібніші структури
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Address */}
      <section className={styles.address}>
        <div className={`container ${styles.addressInner}`}>
          <h3>Адреса</h3>
          <p className={styles.addressText}>
            Рівне. вул. Карнаухова 25А,<br />
            Центральна міська лікарня,<br />
            терапевтичний корпус, 1 поверх, кабінет №121
          </p>
          <a
            href="https://maps.google.com/?q=Рівне,+вул.+Карнаухова+25А"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkArrow}
          >
            Відкрити на мапі
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <div className={styles.mapEmbed}>
            <iframe
              title="Адреса клініки"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.6!2d26.2516!3d50.6199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1576a7c97a11%3A0x0!2z0KDRltCy0L3QtSwg0LLRg9C7LiDQmtCw0YDQvdCw0YXQvtCy0LAg25A!5e0!3m2!1suk!2sua!4v1!5m2!1suk!2sua"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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

      <Footer />
    </div>
  );
}

export default HomePage;
