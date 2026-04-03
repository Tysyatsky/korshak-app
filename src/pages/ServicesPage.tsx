import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './ServicesPage.module.scss';
import '../styles/global.scss';

const categories = [
  {
    id: 'abdomen',
    label: 'Черевна порожнина та нирки',
    services: [
      { name: 'УЗД органів черевної порожнини', note: 'Печінки, жовчного міхура, підшлункової залози, селезінки', prep: 'Проводиться натще', price: 400 },
      { name: 'УЗД нирок і нижньої третини сечоводів', note: null, prep: 'Проводиться при наповненому сечовому міхурі', price: 400 },
      { name: 'УЗД наднирників', note: null, prep: null, price: 300 },
      { name: 'УЗД органів черевної порожнини та нирок', note: null, prep: 'Проводиться натще', price: 500 },
      { name: 'УЗД органів малого тазу у чоловіків', note: null, prep: 'Проводиться при наповненому сечовому міхурі', price: 400 },
      { name: 'УЗД органів малого тазу у чоловіків та нирок', note: null, prep: 'Проводиться при наповненому сечовому міхурі', price: 500 },
      { name: 'УЗД органів черевної порожнини, нирок та органів малого тазу чоловіків', note: null, prep: 'Проводиться натще та при наповненому сечовому міхурі', price: 700 },
    ],
  },
  {
    id: 'thyroid',
    label: 'Щитоподібна та молочні залози',
    services: [
      { name: 'УЗД молочних залоз', note: null, prep: null, price: 400 },
      { name: 'УЗД щитоподібної залози', note: null, prep: null, price: 300 },
      { name: 'УЗД щитоподібної та прищитоподібних залоз', note: null, prep: null, price: 350 },
    ],
  },
  {
    id: 'chest',
    label: 'Груди та лімфовузли',
    services: [
      { name: 'УЗД плевральних синусів', note: null, prep: null, price: 300 },
      { name: 'УЗД регіональних лімфатичних вузлів', note: null, prep: null, price: 300 },
    ],
  },
  {
    id: 'tumors',
    label: 'Обʼємні утвори та суглоби',
    services: [
      { name: 'УЗД пухлиноподібних (обʼємних) утворів з кольоровою доплерографією', note: null, prep: null, price: 300 },
      { name: 'УЗД мʼязово-звязкових структур суглоба', note: null, prep: null, price: 400 },
      { name: 'УЗД мʼязово-звязкових структур 2 суглобів', note: null, prep: null, price: 600 },
    ],
  },
  {
    id: 'vessels',
    label: 'Судини (дуплексне сканування)',
    services: [
      { name: 'Дуплексне сканування судин шиї та голови (екстракраніальний відділ)', note: null, prep: 'Проводиться натще', price: 500 },
      { name: 'Дуплексне сканування черевного відділу аорти', note: null, prep: 'Проводиться натще', price: 300 },
      { name: 'Дуплексне сканування судин нирок', note: null, prep: 'Проводиться натще', price: 400 },
      { name: 'Дуплексне сканування артерій черевної порожнини', note: null, prep: 'Проводиться натще', price: 400 },
      { name: 'Дуплексне сканування вен однієї кінцівки', note: null, prep: null, price: 400 },
      { name: 'Дуплексне сканування артерій однієї кінцівки', note: null, prep: null, price: 400 },
      { name: 'Дуплексне сканування вен та артерій однієї кінцівки', note: null, prep: null, price: 500 },
      { name: 'Дуплексне сканування вен обох нижніх (або верхніх) кінцівок', note: null, prep: null, price: 500 },
      { name: 'Дуплексне сканування артерій обох нижніх (або верхніх) кінцівок', note: null, prep: null, price: 500 },
      { name: 'Дуплексне сканування судин однієї кінцівки (вени або артерії) та клубові судини', note: null, prep: null, price: 500 },
      { name: 'УЗД вен та артерій нижніх (або верхніх) кінцівок', note: null, prep: null, price: 700 },
      { name: 'УЗД судин (вени або артерії) кінцівок та клубові судини (вени або артерії)', note: null, prep: null, price: 700 },
      { name: 'УЗД вен та артерій кінцівок і клубові судини', note: null, prep: null, price: 1000 },
    ],
  },
];

function ServicesPage() {
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
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.catBtn} ${activeCategory === cat.id && !search ? styles.catActive : ''}`}
                  onClick={() => { setActiveCategory(cat.id); setSearch(''); }}
                >
                  {cat.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.catArrow}>
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </aside>

            {/* Services list */}
            <div className={styles.content}>
              <div className={styles.searchBar}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Шукати за назвою"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.servicesList}>
                {filtered.length === 0 ? (
                  <p className={styles.noResults}>Нічого не знайдено</p>
                ) : (
                  filtered.map((s) => (
                    <div key={s.name} className={styles.serviceRow}>
                      <div className={styles.serviceInfo}>
                        <span className={styles.serviceName}>{s.name}</span>
                        {s.note && <span className={styles.serviceNote}>{s.note}</span>}
                        {s.prep && (
                          <span className={styles.servicePrep}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                              <path d="M7 4V7.5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                            {s.prep}
                          </span>
                        )}
                      </div>
                      <span className={styles.servicePrice}>{s.price} грн</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;
