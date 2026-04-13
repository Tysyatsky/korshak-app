import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceRow from '../components/services/ServiceRow';
import { categories } from '../data/services';
import styles from './ServicesPage.module.scss';
import '../styles/global.scss';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('abdomen');
  const [search, setSearch] = useState('');

  const current = categories.find((c) => c.id === activeCategory)!;

  const filtered = search.trim()
    ? categories.flatMap((c) => c.services).filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      )
    : current.services;

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>Послуги</h2>
            <p className={styles.subtitle}>Усі ціни та послуги актуальні станом на травень 2025 року.</p>
          </div>

          <div className={styles.layout}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id && !search;
                return (
                  <button
                    key={cat.id}
                    className={`${styles.catBtn} ${isActive ? styles.catActive : ''}`}
                    onClick={() => { setActiveCategory(cat.id); setSearch(''); }}
                  >
                    {cat.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={styles.catArrow}
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                );
              })}
            </aside>

            {/* Services list */}
            <div className={styles.content}>
              <div className={styles.searchBar}>
                <input
                  type="text"
                  placeholder="Шукати за назвою"
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
                  <p className={styles.noResults}>Нічого не знайдено</p>
                ) : (
                  filtered.map((s) => <ServiceRow key={s.name} service={s} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
