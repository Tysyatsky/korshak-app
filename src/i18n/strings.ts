import type { Lang } from './types';

const uk = {
  langName: 'Українська',
  langPicker: 'Мова сайту',
  currency: 'грн',
  doctorName: 'Коршак Наталія',
  hoursDays: 'пн — пт',
  months: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'],
  pricesAsOf: (month: string, year: number) => `Усі ціни та послуги актуальні станом на ${month} ${year} року`,

  nav: {
    home: 'Головна',
    services: 'Послуги',
    contacts: 'Контакти',
    logoLabel: 'KORSHAK — головна',
    openMenu: 'Відкрити меню',
    closeMenu: 'Закрити меню',
  },

  backToHome: { label: 'На головну', aria: 'На головну сторінку' },
  scrollToServices: { label: 'До послуг', aria: 'Перейти до послуг' },

  footer: {
    copyright: '© 2026 Наталія Коршак. Усі права захищені.',
  },

  hero: {
    heading: ['Коршак Наталія', 'УЗД', 'м. Рівне'],
    description:
      "Швидка та точна ультразвукова діагностика. Передове, якісне обладнання, надійні результати — і впевненість у вашому здоров'ї",
    category: 'Лікар вищої категорії',
    experience: '30+ років практики',
    hoursLabel: 'Години роботи',
    phoneLabel: 'Телефон для запису',
  },

  about: {
    heading: 'Про мене',
    paragraphs: [
      'Як лікар ультразвукової діагностики вищої категорії, я пройшла шлях від діагностичного центру до приватної практики. До 2017 року працювала завідуючим відділенням ультразвукової діагностики, проводила післядипломну освіту лікарів Тернопільського та Львівського медичних інститутів.',
      'Сьогодні веду приватну практику, поєднуючи звичайні огляди з складними діагностичними випадками.',
    ],
  },

  servicesPreview: {
    heading: 'Послуги',
    all: 'Усі послуги',
  },

  certs: {
    heading: 'Сертифікати — показники розвитку і відданості медицині',
    description:
      'Від самого початку своєї практики і дотепер, я завжди інвестую у знання й нові методики, щоб кожен ваш прийом був максимально точним',
    alt: 'Сертифікат',
  },

  reviews: { heading: 'Відгуки про мене' },

  equipment: {
    heading: 'Моє обладнання',
    paragraphs: [
      'Уважність — це основа моєї роботи: від кожної розмови з пацієнтом до вибору обладнання. За 25 років практики я навчилась бачити те, що інші можуть пропустити, та спиратися лише на найнадійніші технології.',
      'Завдяки цьому ви отримуєте чіткі відповіді, економію часу та впевненість у кожній діагностиці.',
    ],
    alt: 'Обладнання для УЗД діагностики',
    calloutA: 'Чітко відображає найдрібніші структури',
    calloutB: 'Сканує структуру судин та кровотік',
    calloutC: 'Забезпечує якісне зображення',
  },

  address: {
    heading: 'Адреса',
    lines: ['Рівне, вул. Карнаухова 25А,', 'Центральна міська лікарня,', 'терапевтичний корпус,', '1 поверх, кабінет №121'],
    openMap: 'Відкрити на мапі',
    mapTitle: 'Адреса клініки',
  },

  faq: {
    heading: 'Популярні питання',
    description: 'Ваш спокій — завжди мій пріоритет. Тут ви знайдете відповіді на ваші потенційні питання',
  },

  cta: {
    heading: 'Запис на УЗД за телефоном',
    vesselsHeading: 'Запис на УЗД судин за телефоном',
    description:
      'Жодних форм та очікувань — просто телефонуйте, щоб узгодити час і бути впевненими, що все під контролем',
    note: 'Запис на обстеження здійснюється тільки під час робочих годин',
  },

  servicesPage: {
    heading: 'Послуги',
    search: 'Шукати за назвою',
    noResults: 'Нічого не знайдено',
  },

  contactsPage: {
    heading: 'Контакти',
    addressIntro: 'Знайдіть нас за адресою, враховуючи зручний розклад і доступність для відвідувачів',
  },

  login: {
    brand: 'УЗД Коршак',
    heading: 'Вхід до особистого кабінету',
    description: 'Увійдіть, щоб переглядати свої записи та результати обстежень',
    google: 'Увійти через Google',
    privacyPrefix: 'Продовжуючи, ви погоджуєтесь з',
    privacyLink: 'політикою конфіденційності',
  },
};

export type Strings = typeof uk;

const en: Strings = {
  langName: 'English',
  langPicker: 'Site language',
  currency: 'UAH',
  doctorName: 'Nataliia Korshak',
  hoursDays: 'Mon — Fri',
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  pricesAsOf: (month: string, year: number) => `All prices and services are current as of ${month} ${year}`,

  nav: {
    home: 'Home',
    services: 'Services',
    contacts: 'Contacts',
    logoLabel: 'KORSHAK — home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  backToHome: { label: 'Home', aria: 'Back to the home page' },
  scrollToServices: { label: 'To services', aria: 'Go to services' },

  footer: {
    copyright: '© 2026 Nataliia Korshak. All rights reserved.',
  },

  hero: {
    heading: ['Nataliia Korshak', 'Ultrasound', 'Rivne'],
    description:
      'Fast and accurate ultrasound diagnostics. Advanced, high-quality equipment, reliable results — and confidence in your health',
    category: 'Highest category physician',
    experience: '30+ years of practice',
    hoursLabel: 'Working hours',
    phoneLabel: 'Phone for appointments',
  },

  about: {
    heading: 'About me',
    paragraphs: [
      'As a highest category ultrasound diagnostics physician, I have gone from a diagnostic center to private practice. Until 2017 I headed the ultrasound diagnostics department and taught postgraduate courses for doctors of the Ternopil and Lviv medical institutes.',
      'Today I run a private practice, combining routine examinations with complex diagnostic cases.',
    ],
  },

  servicesPreview: {
    heading: 'Services',
    all: 'All services',
  },

  certs: {
    heading: 'Certificates — a record of growth and dedication to medicine',
    description:
      'From the very start of my practice until today, I keep investing in knowledge and new methods so that every visit is as accurate as possible',
    alt: 'Certificate',
  },

  reviews: { heading: 'Reviews' },

  equipment: {
    heading: 'My equipment',
    paragraphs: [
      'Attention is the foundation of my work, from every conversation with a patient to the choice of equipment. Over 25 years of practice I have learned to see what others may miss, and to rely only on the most dependable technology.',
      'This gives you clear answers, saves your time and lets you trust every diagnosis.',
    ],
    alt: 'Ultrasound diagnostics equipment',
    calloutA: 'Shows the finest structures clearly',
    calloutB: 'Scans vessel structure and blood flow',
    calloutC: 'Delivers a high-quality image',
  },

  address: {
    heading: 'Address',
    lines: ['25A Karnaukhova St, Rivne,', 'Central City Hospital,', 'therapeutic building,', '1st floor, room 121'],
    openMap: 'Open in maps',
    mapTitle: 'Clinic address',
  },

  faq: {
    heading: 'Frequently asked questions',
    description: 'Your peace of mind is always my priority. Here you will find answers to the questions you may have',
  },

  cta: {
    heading: 'Book an ultrasound by phone',
    vesselsHeading: 'Book a vascular ultrasound by phone',
    description:
      'No forms and no waiting — just call to agree on a time and be sure everything is taken care of',
    note: 'Appointments are made only during working hours',
  },

  servicesPage: {
    heading: 'Services',
    search: 'Search by name',
    noResults: 'Nothing found',
  },

  contactsPage: {
    heading: 'Contacts',
    addressIntro: 'Find us at this address, with convenient hours and easy access for visitors',
  },

  login: {
    brand: 'Korshak Ultrasound',
    heading: 'Sign in to your account',
    description: 'Sign in to see your appointments and examination results',
    google: 'Sign in with Google',
    privacyPrefix: 'By continuing, you agree to the',
    privacyLink: 'privacy policy',
  },
};

export const strings: Record<Lang, Strings> = { uk, en };
