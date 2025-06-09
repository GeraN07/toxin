
import { faker } from '@faker-js/faker';
import { Room } from '../types/rooms';


const features = [
  { icon: 'insert_emoticon', title: 'Комфорт', text: 'Шумопоглощающие стены' },
  { icon: 'location_city', title: 'Удобство', text: 'Окно в каждой из спален' },
  {
    icon: 'lock',
    title: 'Сейф',
    text: 'Номер оснащён сейфом высокой системы безопасности',
  },
  {
    icon: 'wifi',
    title: 'Быстрый Wi-Fi',
    text: 'Номер оснащен выделенной скоростной беспроводной точкой доступа',
  },
  {
    icon: 'heat_pump',
    title: 'Прохлада',
    text: 'Номер оборудован кондиционером',
  },
  {
    icon: 'sailing',
    title: 'Вид на море',
    text: 'Номер с живописным видом на море',
  },
  {
    icon: 'landscape',
    title: 'Вид на горы',
    text: 'Номер с живописным видом на горы',
  },
  {
    icon: 'shopping_bag',
    title: 'Хранение багажа',
    text: 'К номеру прилагается бесплатная камера хранения',
  },
];

const rating = [25, 50, 75];

const feedbacks = [
  {
    image: '/img/profile-pictures/author-1.jpg',
    name: 'Мурад Сарафанов',
    date: '5 дней назад',
    text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    likes: '11',
  },
  {
    image: '/img/profile-pictures/author-2.jpg',
    name: 'Патрисия Стёклышкова',
    date: 'Неделю назад',
    text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likes: '2',
  },
  {
    image: '/img/profile-pictures/no-profile-picture.png',
    name: 'Василий Смирнов',
    date: 'Месяц назад',
    text: 'Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likes: '8',
  },
  {
    image: '/img/profile-pictures/no-profile-picture.png',
    name: 'Иван Петров',
    date: 'Год назад',
    text: 'Всё аккуратно, чисто.',
    likes: '1',
  },
];

const shuffle = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateDates = () => {
  const start = faker.date.soon({ days: 15 });
  start.setUTCHours(12, 0, 0, 0);
  const end = new Date(start.getTime() + faker.number.int({ min: 1, max: 14 }) * 86400000);
  end.setUTCHours(12, 0, 0, 0);
  return [start.toISOString(), end.toISOString()];
};

const createRandomRoom = (): Room => ({
  id: faker.string.uuid(),
  roomNumber: faker.number.int({ min: 1, max: 100 }).toString(),
  price: faker.number.int({ max: 9999 }).toString(),
  reviews: faker.number.int({ max: 10 }).toString(),
  srcArr: shuffle([
    '/img/rooms-preview/room1.jpg',
    '/img/rooms-preview/room2.jpg',
    '/img/rooms-preview/room3.jpg',
    '/img/rooms-preview/room4.jpg',
  ]),
  rating: `${faker.number.int({ max: 100 })}%`,
  lux: faker.datatype.boolean(),
  dates: generateDates(),
  maxGuests: faker.number.int({ min: 1, max: 10 }),
  checkboxes: {
    smoking: faker.datatype.boolean(),
    pet: faker.datatype.boolean(),
    guests: faker.datatype.boolean(),
  },
  accessibilityCheckboxes: {
    wideCoridor: faker.datatype.boolean(),
    helper: faker.datatype.boolean(),
  },
  additionalDropdown: {
    bedroomCount: faker.number.int(2),
    bedsCount: faker.number.int(5),
    bathRoomsCount: faker.number.int(2),
  },
  additionalCheckboxes: {
    breakfast: faker.datatype.boolean(),
    table: faker.datatype.boolean(),
    hchair: faker.datatype.boolean(),
    badbyBad: faker.datatype.boolean(),
    tv: faker.datatype.boolean(),
    shampoo: faker.datatype.boolean(),
  },
});

const createFullRandomRoom = (room: Room) => ({
  imgArr: shuffle([
    '/img/rooms-image/room-image1.jpg',
    '/img/rooms-image/room-image2.jpg',
    '/img/rooms-image/room-image3.jpg',
  ]),
  features: faker.helpers.arrayElements(features, { min: 1, max: 3 }),
  feedback: faker.helpers.arrayElements(feedbacks, {
    min: parseInt(room.reviews),
    max: parseInt(room.reviews),
  }),
  votes: faker.number.int({ max: 100 }),
  totalRating: rating[faker.number.int({ max: rating.length - 1 })],
});

export const generateRooms = (count = 50): Room[] =>
  Array.from({ length: count }, createRandomRoom);

  
export const generateFullRooms = (): any[] => {
  const rooms = generateRooms();
  return rooms.map((room) => ({ ...room, ...createFullRandomRoom(room) }));
};