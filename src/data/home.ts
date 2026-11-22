import type { Localized } from '../i18n/types';
import { ABDOMEN_NOTE, PREP_FASTING, type Service } from './services';

export const stats: { value: string; label: Localized }[] = [
  { value: '30+', label: { uk: 'років сумлінної лікарської практики', en: 'years of dedicated medical practice' } },
  { value: '60000+', label: { uk: 'пацієнтів, що отримали діагностику', en: 'patients diagnosed' } },
  { value: '50+', label: { uk: 'сертифікатів підвищення кваліфікації', en: 'professional development certificates' } },
  { value: '100+', label: { uk: 'лікарі, з якими я співпрацюю та які мені довіряють', en: 'doctors who work with me and trust me' } },
];

export const services: Service[] = [
  { name: { uk: 'УЗД органів черевної порожнини', en: 'Abdominal ultrasound' }, note: ABDOMEN_NOTE, prep: PREP_FASTING, price: 500 },
  { name: { uk: 'УЗД органів черевної порожнини та нирок', en: 'Abdominal and kidney ultrasound' }, note: null, prep: PREP_FASTING, price: 600 },
  { name: { uk: 'УЗД щитоподібної залози', en: 'Thyroid ultrasound' }, note: null, prep: null, price: 400 },
  { name: { uk: 'УЗД судин шиї та голови (екстракраніальний відділ)', en: 'Ultrasound of head and neck vessels (extracranial)' }, note: null, prep: PREP_FASTING, price: 600 },
  { name: { uk: 'УЗД судин (вен та артерій) нижніх (або верхніх) кінцівок', en: 'Ultrasound of the vessels (veins and arteries) of the legs (or arms)' }, note: null, prep: null, price: 800 },
  { name: { uk: 'УЗД вен обох нижніх (або верхніх) кінцівок', en: 'Ultrasound of the veins of both legs (or arms)' }, note: null, prep: null, price: 650 },
  { name: { uk: 'УЗД артерій обох нижніх (або верхніх) кінцівок', en: 'Ultrasound of the arteries of both legs (or arms)' }, note: null, prep: null, price: 650 },
];

export interface Review {
  id: string;
  text: Localized;
  name: Localized;
  role: Localized;
  featured: boolean;
}

export const reviews: Review[] = [
  {
    id: 'martyniuk',
    text: {
      uk: 'Її висновки для мене завжди стопроцентна гарантія. Якщо вона щось написала — я впевнена, що там все чітко',
      en: 'Her conclusions are always a one hundred percent guarantee for me. If she wrote something down, I am sure it is exactly right',
    },
    name: { uk: 'Мартинюк Галина', en: 'Halyna Martyniuk' },
    role: { uk: 'Очільниця РОЛДГЦ, кандидат медичних наук', en: 'Head of the Rivne Regional Diagnostic Center, PhD in Medicine' },
    featured: false,
  },
  {
    id: 'ihnatiuk',
    text: {
      uk: 'Я з нею працюю вже років десять. І за цей час жодного разу не було, щоб її висновок був «мимо». Дуже глибоко в темі, і дуже уважна до всього',
      en: 'I have worked with her for about ten years, and in all that time her conclusion has never once been off. She knows the field deeply and pays attention to everything',
    },
    name: { uk: 'Ігнатюк Тамара', en: 'Tamara Ihnatiuk' },
    role: { uk: 'Лікар пульмонолог ЦМЛ', en: 'Pulmonologist, Central City Hospital' },
    featured: false,
  },
  {
    id: 'mysiura',
    text: {
      uk: 'Не знаю як ви то бачите, але побачили те чого інші не бачили 3 рази до того. Я була перелякана за своє життя а ви його врятували. Спасибі величезне',
      en: 'I don’t know how you see it, but you saw what others had missed three times before. I was afraid for my life and you saved it. Thank you so much',
    },
    name: { uk: 'Наталія Мисюра', en: 'Nataliia Mysiura' },
    role: { uk: 'Клієнтка', en: 'Patient' },
    featured: true,
  },
  {
    id: 'ihnatsevych',
    text: {
      uk: 'Працюємо разом роками. Можу сказати: вона той лікар, якого сам би пішов та відправив рідних',
      en: 'We have worked together for years. I can say she is the doctor I would go to myself and send my family to',
    },
    name: { uk: 'Ігнацевич Ігор', en: 'Ihor Ihnatsevych' },
    role: {
      uk: 'Завідувач відділенням гнійної хірургії ЦМЛ, заслужений лікар України',
      en: 'Head of the Purulent Surgery Department, Central City Hospital, Honored Doctor of Ukraine',
    },
    featured: false,
  },
  {
    id: 'demchuk',
    text: {
      uk: 'Просто спокійно, чітко, без зайвого. Пояснила, показала, на все відповіла. Дуже радий, що потрапив саме до неї — все по суті',
      en: 'Calm, clear, nothing extra. She explained, showed me and answered everything. Very glad I came to her — everything to the point',
    },
    name: { uk: 'Юрій Демчук', en: 'Yurii Demchuk' },
    role: { uk: 'Клієнт', en: 'Patient' },
    featured: false,
  },
];

export const faqs: { question: Localized; answer: Localized }[] = [
  {
    question: { uk: 'Як проходить обстеження? Скільки часу займає?', en: 'How does the examination go? How long does it take?' },
    answer: {
      uk: 'Для проведення обстеження потрібно звільнити від одягу частину тіла, яка буде обстежуватися, та лягти на кушетку. На ділянки, що обстежуються, наноситься гель. У кабінеті є серветки, але можна взяти власний рушник за бажанням.\n\nЧас обстеження залежить від об\'єму обстеження і складності, зазвичай це 15–30 хв.',
      en: 'You will need to uncover the part of the body being examined and lie down on the couch. Gel is applied to the areas being examined. Wipes are provided in the room, but you are welcome to bring your own towel.\n\nThe time depends on the scope and complexity of the examination, usually 15–30 min.',
    },
  },
  {
    question: { uk: 'Чи потрібно якось готуватися до обстежень?', en: 'Do I need to prepare for the examination?' },
    answer: {
      uk: 'Деякі обстеження вимагають підготовки. Наприклад, УЗД органів черевної порожнини проводиться натще, а УЗД органів малого тазу — при наповненому сечовому міхурі. Уточніть деталі підготовки при записі.',
      en: 'Some examinations require preparation. For example, an abdominal ultrasound is done on an empty stomach, and a pelvic ultrasound with a full bladder. Please check the preparation details when booking.',
    },
  },
  {
    question: { uk: 'Чи отримаю я висновок одразу?', en: 'Will I get the conclusion right away?' },
    answer: {
      uk: 'Так, висновок видається одразу після проведення обстеження.',
      en: 'Yes, the conclusion is issued right after the examination.',
    },
  },
  {
    question: { uk: 'Чи можна провести декілька УЗД за один раз?', en: 'Can I have several ultrasounds in one visit?' },
    answer: {
      uk: 'Так, за наявності часу та відповідної підготовки можна провести кілька видів обстеження за один візит.',
      en: 'Yes, if time allows and you have prepared accordingly, several types of examination can be done in one visit.',
    },
  },
  {
    question: { uk: 'Чи можна пройти УЗД, якщо я приймаю ліки від тиску або серця?', en: 'Can I have an ultrasound if I take blood pressure or heart medication?' },
    answer: {
      uk: 'Так, прийом більшості медикаментів не є протипоказанням до проведення УЗД діагностики.',
      en: 'Yes, most medications are not a contraindication to ultrasound diagnostics.',
    },
  },
];
