import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToServices from '../components/ScrollToServices';
import Hero from '../components/about/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesPreview from '../components/home/ServicesPreview';
import CertsSection from '../components/home/CertsSection';
import ReviewsSection from '../components/home/ReviewsSection';
import EquipmentSection from '../components/home/EquipmentSection';
import AddressSection from '../components/home/AddressSection';
import FaqSection from '../components/home/FaqSection';
import CtaSection from '../components/home/CtaSection';
import styles from './HomePage.module.scss';
import '../styles/global.scss';

function HomePage() {
  const servicesRef = useRef<HTMLElement>(null);

  return (
    <div className={styles.page}>
      <Navbar />
      <ScrollToServices targetRef={servicesRef} />
      <Hero />
      <AboutSection />
      <ServicesPreview sectionRef={servicesRef} />
      <CertsSection />
      <ReviewsSection />
      <EquipmentSection />
      <AddressSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default HomePage;
