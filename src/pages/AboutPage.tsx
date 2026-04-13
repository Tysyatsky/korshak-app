import Footer from '../components/Footer';
import Hero from '../components/about/Hero';
import Principles from '../components/about/Principles';
import Career from '../components/about/Career';
import Certificates from '../components/about/Certificates';
import Reviews from '../components/about/Reviews';
import styles from './AboutPage.module.scss';
import '../styles/global.scss';

function AboutPage() {
  return (
    <div className={styles.page}>
      <Hero />
      <Principles />
      <Career />
      <Certificates />
      <Reviews />
      <Footer />
    </div>
  );
}

export default AboutPage;
