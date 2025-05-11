import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

const cacheFile = path.resolve('./cache.json');
const CACHE_DURATION = 10 * 60 * 1000; // 10 минут

const features = [
  { icon: "insert_emoticon", title: "Комфорт", text: "Шумопоглощающие стены" },
  { icon: "location_city", title: "Удобство", text: "Окно в каждой из спален" },
  {
    icon: "lock",
    title: "Сейф",
    text: "Номер оснащён сейфом высокой системы безопасности",
  },
  {
    icon: "wifi",
    title: "Быстрый Wi-Fi",
    text: "Номер оснащен выделенной скоростной беспроводной точкой доступа",
  },
  {
    icon: "heat_pump",
    title: "Прохлада",
    text: "Номер оборудован кондиционером",
  },
  {
    icon: "sailing",
    title: "Вид на море",
    text: "Номер с живописным видом на море",
  },
  {
    icon: "landscape",
    title: "Вид на горы",
    text: "Номер с живописным видом на горы",
  },
  {
    icon: "shopping_bag",
    title: "Хранение багажа",
    text: "К номеру прилагается бесплатная камера хранения",
  },
];

const rating = [25, 50, 75];

const feedbacks = [
  {
    image: "/img/profile-pictures/author-1.jpg",
    name: "Мурад Сарафанов",
    date: "5 дней назад",
    text: "Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.",
    likes: "11",
  },
  {
    image: "/img/profile-pictures/author-2.jpg",
    name: "Патрисия Стёклышкова",
    date: "Неделю назад",
    text: "Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент",
    likes: "2",
  },
  {
    image: "/img/profile-pictures/no-profile-picture.png",
    name: "Василий Смирнов",
    date: "Месяц назад",
    text: "Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент",
    likes: "8",
  },
  {
    image: "/img/profile-pictures/no-profile-picture.png",
    name: "Иван Петров",
    date: "Год назад",
    text: "Всё аккуратно, чисто.",
    likes: "1",
  },
];

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
    to: new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000),
  });
  startDate.setUTCHours(12, 0, 0, 0);

  const daysToAdd = faker.datatype.number({ min: 1, max: 14 });
  const endDate = new Date(
    startDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000
  );
  endDate.setUTCHours(12, 0, 0, 0);

  return [startDate, endDate];
};

const createRandomRoom = () => {
  const dates = generateDates().map((date) => date.toISOString());
  return {
    id: faker.datatype.uuid(),
    roomNumber: faker.datatype.number({ min: 1, max: 100 }).toString(),
    price: faker.datatype.number({ max: 9999 }).toString(),
    reviews: faker.datatype.number({ max: 10 }).toString(),
    srcArr: shuffle([
      "/img/rooms-preview/room2.jpg",
      "/img/rooms-preview/room1.jpg",
      "/img/rooms-preview/room3.jpg",
      "/img/rooms-preview/room4.jpg",
    ]),
    rating: `${faker.datatype.number({ max: 100 }).toString()}%`,
    lux: faker.datatype.boolean(),
    dates: dates,
    maxGuests: faker.datatype.number({ min: 1, max: 10 }),
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
      bedroomCount: faker.datatype.number(2),
      bedsCount: faker.datatype.number(5),
      bathRoomsCount: faker.datatype.number(2),
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
};

const createFullRandomRoom = (room) => {
  return {
    imgArr: shuffle([
      "/img/rooms-image/room-image1.jpg",
      "/img/rooms-image/room-image2.jpg",
      "/img/rooms-image/room-image3.jpg",
    ]),
    features: faker.helpers.arrayElements(features, { min: 1, max: 3 }),
    feedback: faker.helpers.arrayElements(feedbacks, {
      min: parseInt(room.reviews, 10),
      max: parseInt(room.reviews, 10),
    }),
    votes: faker.datatype.number({ max: 100 }),
    totalRating: rating[faker.datatype.number({ max: rating.length - 1 })],
  };
};

const createRooms = (numRooms = 50) =>
  Array.from({ length: numRooms }, createRandomRoom);

const createFullRooms = (rooms) =>
  rooms.map((room) => {
    return { ...room, ...createFullRandomRoom(room) };
  });

const loadCache = () => {
  if (fs.existsSync(cacheFile)) {
    const { rooms, fullRooms, lastUpdated } = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
    if (Date.now() - lastUpdated < CACHE_DURATION) {
      console.log("Чтение данных из файла кэша...");
      return { rooms, fullRooms };
    }
  }
  console.log("Генерация новых данных...");
  const rooms = createRooms();
  const fullRooms = createFullRooms(rooms);
  fs.writeFileSync(cacheFile, JSON.stringify({ rooms, fullRooms, lastUpdated: Date.now() }));
  return { rooms, fullRooms };
};

let { rooms, fullRooms } = loadCache();

export default function handler(req, res) {
  // Добавляем заголовки CORS
  res.setHeader('Access-Control-Allow-Origin', '*');// Разрешаем запросы с указанного источника
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Разрешаем методы
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Разрешаем заголовки

  // Обрабатываем OPTIONS-запросы (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { id } = req.query;
  if (id) {
    const fullRoom = fullRooms.find((room) => room.id === id);
    if (!fullRoom) {
      res.status(404).json({ message: "Full room data not found" });
      return;
    }
    res.json(fullRoom);
  } else {
    res.json(rooms);
  }
}
