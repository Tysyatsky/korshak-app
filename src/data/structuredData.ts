// schema.org JSON-LD, injected into the <head> of pre-rendered pages at build time only.
// Uses only facts already shown on the site.
import { categories } from './services';
import { faqs } from './home';
import { SITE_URL, canonicalUrl, pageMeta } from './seo';

const BUSINESS_ID = `${SITE_URL}/#practice`;

const business = {
  '@type': 'Physician',
  '@id': BUSINESS_ID,
  name: 'Коршак Наталія Віталіївна — УЗД, м. Рівне',
  description: pageMeta['/'].description,
  url: canonicalUrl('/'),
  image: `${SITE_URL}/images/doctor-hero.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  telephone: '+380988138942',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'вул. Карнаухова 25А, Центральна міська лікарня, терапевтичний корпус, 1 поверх, кабінет №121',
    addressLocality: 'Рівне',
    postalCode: '33017',
    addressCountry: 'UA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 50.6043186, longitude: 26.2666772 },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '15:00',
  }],
  currenciesAccepted: 'UAH',
};

const priceCatalog = {
  '@type': 'OfferCatalog',
  name: 'Послуги УЗД-діагностики',
  itemListElement: categories.map((cat) => ({
    '@type': 'OfferCatalog',
    name: cat.label,
    itemListElement: cat.services.map((s) => ({
      '@type': 'Offer',
      price: s.price,
      priceCurrency: 'UAH',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        ...(s.note ? { description: s.note } : {}),
      },
    })),
  })),
};

const faqPage = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer.replace(/\n\n/g, ' ') },
  })),
};

export function structuredData(path: string): object {
  const graph: object[] = [];
  if (path === '/') graph.push(business, faqPage);
  if (path === '/posluhy') graph.push({ ...business, hasOfferCatalog: priceCatalog });
  if (path === '/kontakty') graph.push(business);
  return { '@context': 'https://schema.org', '@graph': graph };
}
