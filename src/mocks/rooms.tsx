import { faker } from '@faker-js/faker';
import { Room } from '../types/rooms';

function createRandomRoom(): Room {
  return {
    id: faker.string.uuid(),
    roomNumber: faker.number.int(100).toString(),
    price: faker.number.int(9999).toString(),
    reviews: faker.number.int(10).toString(),
    srcArr: shuffle([
      'img/rooms-preview/room2.jpg',
      'img/rooms-preview/room1.jpg',
      'img/rooms-preview/room3.jpg',
      'img/rooms-preview/room4.jpg',
    ]),
    rating: `${faker.number.int(100).toString()}%`,
    lux: faker.datatype.boolean(),
    dates: generateDates(),
    maxGuests: faker.number.int(10),
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
  };
}

function createFullRandomRoom(): any {
  return {
    imgArr: shuffle([
      'img/rooms-image/room-image1.jpg',
      'img/rooms-image/room-image2.jpg',
      'img/rooms-image/room-image3.jpg',
    ]),
    features: features,
    feedback: feedbacks,
    votes: faker.number.int(100),
    totalRating: rating[faker.number.int(rating.length - 1)],
  };
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateDates = () => {
  const startDate = faker.date.between({
    from: new Date(),
    to: new Date().getTime() + 15 * 24 * 60 * 60 * 1000,
  });

  const endDate = faker.date.between({
    from: startDate.getTime() + 1 * 24 * 60 * 60 * 1000,
    to: startDate.getTime() + 15 * 24 * 60 * 60 * 1000,
  });

  return [startDate, endDate];
};
const features = [
  { icon: 'insert_emoticon', title: 'Комфорт', text: 'Шумопоглощающие стены' },
  { icon: 'location_city', title: 'Удобство', text: 'Окно в каждой из спален' },
  {
    icon: 'lock',
    title: 'Сейф',
    text: 'Номер оснащён сейфом высокой системы безопастности',
  },
  {
    icon: 'wifi',
    title: 'быстрый Wi-Fi',
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
    image: 'img/profile-pictures/author-1.jpg',
    name: 'Мурад Сарафанов',
    date: '5 дней назад',
    text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    likes: '11',
  },
  {
    image: 'img/profile-pictures/author-2.jpg',
    name: 'Патрисия Стёклышкова',
    date: 'Неделю назад',
    text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likes: '2',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Василий Смирнов',
    date: 'Месяц назад',
    text: 'Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likes: '8',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Иван Петров',
    date: 'Год назад',
    text: 'Всё аккуратно, чисто.',
    likes: '1',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Наталья Смирнова',
    date: '2 года назад',
    text: 'Обслуживание на высоте!',
    likes: '9',
  },
];

const createRooms = (numRums = 15) =>
  Array.from({ length: numRums }, createRandomRoom);

const createFullRooms = (rooms) =>
  rooms.map((room) => {
    const fullOfferData = createFullRandomRoom();
    return { ...fullOfferData, ...room };
  });
export {createRooms, createFullRooms} ;
