import type { Localized } from '../i18n/types';

export interface Service {
  name: Localized;
  note: Localized | null;
  prep: Localized | null;
  price: number;
}

export interface Category {
  id: string;
  label: Localized;
  services: Service[];
}

export const PREP_FASTING: Localized = { uk: 'Проводиться натще', en: 'Done on an empty stomach' };
export const PREP_FULL_BLADDER: Localized = { uk: 'Проводиться при наповненому сечовому міхурі', en: 'Done with a full bladder' };
const PREP_FASTING_FULL_BLADDER: Localized = {
  uk: 'Проводиться натще та при наповненому сечовому міхурі',
  en: 'Done on an empty stomach and with a full bladder',
};

export const ABDOMEN_NOTE: Localized = {
  uk: 'Печінки, жовчного міхура, підшлункової залози, селезінки',
  en: 'Liver, gallbladder, pancreas, spleen',
};

export const categories: Category[] = [
  {
    id: 'abdomen',
    label: { uk: 'Черевна порожнина та нирки', en: 'Abdomen and kidneys' },
    services: [
      { name: { uk: 'УЗД органів черевної порожнини', en: 'Abdominal ultrasound' }, note: ABDOMEN_NOTE, prep: PREP_FASTING, price: 500 },
      { name: { uk: 'УЗД нирок', en: 'Kidney ultrasound' }, note: null, prep: null, price: 500 },
      { name: { uk: 'УЗД нирок і нижньої третини сечоводів', en: 'Ultrasound of the kidneys and lower third of the ureters' }, note: null, prep: PREP_FULL_BLADDER, price: 550 },
      { name: { uk: 'УЗД наднирників', en: 'Adrenal ultrasound' }, note: null, prep: null, price: 400 },
      { name: { uk: 'УЗД органів черевної порожнини та нирок', en: 'Abdominal and kidney ultrasound' }, note: null, prep: PREP_FASTING, price: 600 },
      { name: { uk: 'УЗД органів малого тазу', en: 'Pelvic ultrasound' }, note: null, prep: PREP_FULL_BLADDER, price: 500 },
      { name: { uk: 'УЗД органів малого тазу та нирок', en: 'Pelvic and kidney ultrasound' }, note: null, prep: PREP_FULL_BLADDER, price: 600 },
      { name: { uk: 'УЗД органів черевної порожнини, нирок та органів малого тазу', en: 'Abdominal, kidney and pelvic ultrasound' }, note: null, prep: PREP_FASTING_FULL_BLADDER, price: 700 },
    ],
  },
  {
    id: 'thyroid',
    label: { uk: 'Щитоподібна та молочні залози', en: 'Thyroid and breasts' },
    services: [
      { name: { uk: 'УЗД молочних залоз', en: 'Breast ultrasound' }, note: null, prep: null, price: 500 },
      { name: { uk: 'УЗД щитоподібної залози', en: 'Thyroid ultrasound' }, note: null, prep: null, price: 400 },
      { name: { uk: 'УЗД щитоподібної та прищитоподібних залоз', en: 'Thyroid and parathyroid ultrasound' }, note: null, prep: null, price: 400 },
    ],
  },
  {
    id: 'chest',
    label: { uk: 'Груди та лімфовузли', en: 'Chest and lymph nodes' },
    services: [
      { name: { uk: 'УЗД плевральних синусів', en: 'Pleural sinus ultrasound' }, note: null, prep: null, price: 400 },
      { name: { uk: 'УЗД регіональних лімфатичних вузлів', en: 'Regional lymph node ultrasound' }, note: null, prep: null, price: 400 },
    ],
  },
  {
    id: 'tumors',
    label: { uk: 'Обʼємні утвори та суглоби', en: 'Masses and joints' },
    services: [
      { name: { uk: 'УЗД пухлиноподібних (обʼємних) утворів з кольоровою доплерографією', en: 'Ultrasound of tumor-like masses with color Doppler' }, note: null, prep: null, price: 400 },
      { name: { uk: 'УЗД мʼязово-звязкових структур суглоба', en: 'Ultrasound of joint muscles and ligaments' }, note: null, prep: null, price: 500 },
    ],
  },
  {
    id: 'vessels',
    label: { uk: 'Судини (дуплексне сканування)', en: 'Vessels (duplex scanning)' },
    services: [
      { name: { uk: 'Дуплексне сканування судин шиї та голови (екстракраніальний відділ)', en: 'Duplex scan of head and neck vessels (extracranial)' }, note: null, prep: PREP_FASTING, price: 600 },
      { name: { uk: 'Дуплексне сканування черевного відділу аорти', en: 'Duplex scan of the abdominal aorta' }, note: null, prep: PREP_FASTING, price: 500 },
      { name: { uk: 'Дуплексне сканування судин нирок', en: 'Duplex scan of the renal vessels' }, note: null, prep: PREP_FASTING, price: 500 },
      { name: { uk: 'Дуплексне сканування артерій черевної порожнини', en: 'Duplex scan of the abdominal arteries' }, note: null, prep: PREP_FASTING, price: 500 },
      { name: { uk: 'Дуплексне сканування вен однієї кінцівки', en: 'Duplex scan of the veins of one limb' }, note: null, prep: null, price: 500 },
      { name: { uk: 'Дуплексне сканування артерій однієї кінцівки', en: 'Duplex scan of the arteries of one limb' }, note: null, prep: null, price: 500 },
      { name: { uk: 'Дуплексне сканування вен та артерій однієї кінцівки', en: 'Duplex scan of the veins and arteries of one limb' }, note: null, prep: null, price: 650 },
      { name: { uk: 'Дуплексне сканування вен обох нижніх (або верхніх) кінцівок', en: 'Duplex scan of the veins of both legs (or arms)' }, note: null, prep: null, price: 650 },
      { name: { uk: 'Дуплексне сканування артерій обох нижніх (або верхніх) кінцівок', en: 'Duplex scan of the arteries of both legs (or arms)' }, note: null, prep: null, price: 650 },
      { name: { uk: 'Дуплексне сканування судин однієї кінцівки (вени або артерії) та клубові судини', en: 'Duplex scan of the vessels of one limb (veins or arteries) and the iliac vessels' }, note: null, prep: null, price: 650 },
      { name: { uk: 'УЗД вен та артерій нижніх (або верхніх) кінцівок', en: 'Ultrasound of the veins and arteries of the legs (or arms)' }, note: null, prep: null, price: 800 },
      { name: { uk: 'УЗД судин (вени або артерії) кінцівок та клубові судини (вени або артерії)', en: 'Ultrasound of limb vessels (veins or arteries) and iliac vessels (veins or arteries)' }, note: null, prep: null, price: 800 },
      { name: { uk: 'УЗД вен та артерій кінцівок і клубові судини', en: 'Ultrasound of limb veins and arteries and the iliac vessels' }, note: null, prep: null, price: 1000 },
    ],
  },
];
