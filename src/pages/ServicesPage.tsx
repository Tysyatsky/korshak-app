import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToHome from '../components/BackToHome';
import ServiceRow from '../components/services/ServiceRow';
import CategoryAccordion from '../components/services/CategoryAccordion';
import { categories } from '../data/services';
import { useT } from '../i18n/context';
import { usePricesAsOf } from '../i18n/usePricesDate';
import styles from './ServicesPage.module.scss';
import '../styles/global.scss';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('abdomen');
  const [search, setSearch] = useState('');
  const { t, l } = useT();
  const pricesAsOf = usePricesAsOf();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const current = categories.find((c) => c.id === activeCategory)!;

  const filtered = search.trim()
    ? categories.flatMap((c) => c.services).filter((s) =>
        l(s.name).toLowerCase().includes(search.trim().toLowerCase())
      )
    : current.services;

  return (
    <div className={styles.page}>
      <Navbar />
      <BackToHome />

      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>{t.servicesPage.heading}</h1>
            <p className={styles.subtitle}>{pricesAsOf}</p>
          </div>

          {/* Desktop layout */}
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id && !search;
                return (
                  <button
                    key={cat.id}
                    className={`${styles.catBtn} ${isActive ? styles.catActive : ''}`}
                    onClick={() => { setActiveCategory(cat.id); setSearch(''); }}
                  >
                    {l(cat.label)}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.catArrow}>
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                );
              })}
            </aside>

            <div className={styles.content}>
              <div className={styles.searchBar}>
                <input
                  type="text"
                  placeholder={t.servicesPage.search}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={styles.searchInput}
                />
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <div className={styles.servicesList}>
                {filtered.length === 0 ? (
                  <p className={styles.noResults}>{t.servicesPage.noResults}</p>
                ) : (
                  filtered.map((s) => <ServiceRow key={s.name.uk} service={s} />)
                )}
              </div>
            </div>
          </div>

          {/* Mobile / tablet accordion */}
          <div className={styles.mobileLayout}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder={t.servicesPage.search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
              />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {search.trim() ? (
              <div className={styles.servicesList}>
                {filtered.length === 0 ? (
                  <p className={styles.noResults}>{t.servicesPage.noResults}</p>
                ) : (
                  filtered.map((s) => <ServiceRow key={s.name.uk} service={s} />)
                )}
              </div>
            ) : (
              <CategoryAccordion categories={categories} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
