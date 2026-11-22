import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToHome from '../components/BackToHome';
import styles from './ContactsPage.module.scss';
import { MAP_LINK, MAP_EMBED } from '../data/config';
import { asset } from '../utils/asset';
import { faqs } from '../data/home';
import { useT } from '../i18n/context';
import '../styles/global.scss';


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
      <div className={`${styles.faqAnswer} ${open ? styles.faqAnswerOpen : ''}`}>
        <div className={styles.faqAnswerInner}>
          <div className={styles.faqAnswerContent}>
            {answer.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactsPage() {
  const { t, l } = useT();
  const [street, hospital, building, room] = t.address.lines;

  return (
    <div className={styles.page}>
      <Navbar />
      <BackToHome />

      {/* Address */}
      <section className={styles.address}>
        <div className={`container ${styles.addressInner}`}>
          <div className={styles.addressText}>
            <h1 className={styles.title}>{t.contactsPage.heading}</h1>
            <h2 className="h3">{t.address.heading}</h2>
            <p>
              {t.contactsPage.addressIntro}
            </p>
            <address className={styles.addressDetails}>
              {street}<br />
              {hospital}<br />
              {building}<br />
              {room}
            </address>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              {t.address.openMap}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className={styles.mapEmbed}>
            <iframe
              title={t.address.mapTitle}
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
            <h2>{t.cta.vesselsHeading}</h2>
            <p>{t.cta.description}</p>
            <p className={styles.ctaNote}>{t.cta.note}</p>
            <div className={styles.ctaContact}>
              <span>{t.hoursDays}&nbsp;&nbsp;9:00 — 15:00</span>
              <a href="tel:+380988138942" className={styles.ctaPhone}>+38 098 813 89 42</a>
            </div>
          </div>
          <div className={styles.ctaImage}>
            <img src={asset('images/doctor-portrait.jpg')} alt={t.doctorName} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={`container ${styles.faqInner}`}>
          <div className={styles.faqHeader}>
            <h2 className="h3">{t.faq.heading}</h2>
            <p>{t.faq.description}</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <FaqItem key={f.question.uk} question={l(f.question)} answer={l(f.answer)} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactsPage;
