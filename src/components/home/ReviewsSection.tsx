import { reviews } from '../../data/home';
import styles from './ReviewsSection.module.scss';

export default function ReviewsSection() {
  return (
    <section className={styles.reviews}>
      <div className={`container ${styles.reviewsInner}`}>
        <h2 className={styles.reviewsTitle}>Відгуки про мене</h2>
        <div className={styles.reviewsGrid}>
          {reviews.map((r) => (
            <div
              key={r.name}
              className={`${styles.reviewCard} ${r.featured ? styles.reviewCardFeatured : ''}`}
            >
              <div className={styles.reviewContent}>
                <span className={styles.quoteIcon}>❝❝</span>
                <p className={styles.reviewText}>{r.text}</p>
              </div>
              <div className={styles.reviewAuthor}>
                <span className={styles.reviewName}>{r.name}</span>
                <span className={styles.reviewRole}>{r.role}</span>
              </div>
              {r.featured && (
                <svg
                  className={styles.featuredDecor}
                  width="130"
                  height="130"
                  viewBox="0 0 130 130"
                  fill="none"
                  aria-hidden="true"
                >
                  {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135].map((angle) => {
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <line
                        key={angle}
                        x1="130" y1="130"
                        x2={130 - Math.cos(rad) * 180}
                        y2={130 - Math.sin(rad) * 180}
                        stroke="white"
                        strokeWidth="1"
                        strokeOpacity="0.25"
                      />
                    );
                  })}
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
