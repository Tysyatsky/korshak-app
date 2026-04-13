export interface Service {
  name: string;
  note: string | null;
  prep: string | null;
  price: number;
}

export interface Category {
  id: string;
  label: string;
  services: Service[];
}

export const categories: Category[] = [
  {
    id: 'abdomen',
    label: 'Черевна порожнина та нирки',
    services: [
      { name: 'УЗД органів черевної порожнини', note: 'Печінки, жовчного міхура, підшлункової залози, селезінки', prep: 'Проводиться натще', price: 500 },
      { name: 'УЗД нирок і нижньої третини сечоводів', note: null, prep: 'Проводиться при наповненому сечовому міхурі', price: 450 },
      { name: 'УЗД наднирників', note: null, prep: null, price: 400 },
      { name: 'УЗД органів черевної порожнини та нирок', note: null, prep: 'Проводиться натще', price: 600 },
      { name: 'УЗД органів малого тазу у чоловіків', note: null, prep: 'Проводиться при наповненому сечовому міхурі', price: 400 },
      { name: 'УЗД органів малого тазу у чоловіків та нирок', note: null, prep: 'Проводиться при наповненому сечовому міхурі', price: 550 },
      { name: 'УЗД органів черевної порожнини, нирок та органів малого тазу чоловіків', note: null, prep: 'Проводиться натще та при наповненому сечовому міхурі', price: 700 },
    ],
  },
  {
    id: 'thyroid',
    label: 'Щитоподібна та молочні залози',
    services: [
      { name: 'УЗД молочних залоз', note: null, prep: null, price: 500 },
      { name: 'УЗД щитоподібної залози', note: null, prep: null, price: 400 },
      { name: 'УЗД щитоподібної та прищитоподібних залоз', note: null, prep: null, price: 400 },
    ],
  },
  {
    id: 'chest',
    label: 'Груди та лімфовузли',
    services: [
      { name: 'УЗД плевральних синусів', note: null, prep: null, price: 400 },
      { name: 'УЗД регіональних лімфатичних вузлів', note: null, prep: null, price: 400 },
    ],
  },
  {
    id: 'tumors',
    label: 'Обʼємні утвори та суглоби',
    services: [
      { name: 'УЗД пухлиноподібних (обʼємних) утворів з кольоровою доплерографією', note: null, prep: null, price: 400 },
      { name: 'УЗД мʼязово-звязкових структур суглоба', note: null, prep: null, price: 500 },
      { name: 'УЗД мʼязово-звязкових структур 2 суглобів', note: null, prep: null, price: 700 },
    ],
  },
  {
    id: 'vessels',
    label: 'Судини (дуплексне сканування)',
    services: [
      { name: 'Дуплексне сканування судин шиї та голови (екстракраніальний відділ)', note: null, prep: 'Проводиться натще', price: 600 },
      { name: 'Дуплексне сканування черевного відділу аорти', note: null, prep: 'Проводиться натще', price: 500 },
      { name: 'Дуплексне сканування судин нирок', note: null, prep: 'Проводиться натще', price: 500 },
      { name: 'Дуплексне сканування артерій черевної порожнини', note: null, prep: 'Проводиться натще', price: 500 },
      { name: 'Дуплексне сканування вен однієї кінцівки', note: null, prep: null, price: 500 },
      { name: 'Дуплексне сканування артерій однієї кінцівки', note: null, prep: null, price: 500 },
      { name: 'Дуплексне сканування вен та артерій однієї кінцівки', note: null, prep: null, price: 650 },
      { name: 'Дуплексне сканування вен обох нижніх (або верхніх) кінцівок', note: null, prep: null, price: 650 },
      { name: 'Дуплексне сканування артерій обох нижніх (або верхніх) кінцівок', note: null, prep: null, price: 650 },
      { name: 'Дуплексне сканування судин однієї кінцівки (вени або артерії) та клубові судини', note: null, prep: null, price: 650 },
      { name: 'УЗД вен та артерій нижніх (або верхніх) кінцівок', note: null, prep: null, price: 800 },
      { name: 'УЗД судин (вени або артерії) кінцівок та клубові судини (вени або артерії)', note: null, prep: null, price: 800 },
      { name: 'УЗД вен та артерій кінцівок і клубові судини', note: null, prep: null, price: 1000 },
    ],
  },
];
