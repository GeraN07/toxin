import { faker } from '@faker-js/faker';

import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: "https://daring-sponge-49441.upstash.io",
  token: "AcEhAAIncDJiYjdiZWFhYWVmZWQ0Y2RiODJlYTA1ODY0ZDE3MWI2N3AyNDk0NDE",
});

const TTL = 60 * 60;

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
  {
    image: "/img/profile-pictures/no-profile-picture.png",
    name: "Настя Смирнова",
    date: "2 года назад",
    text: "Обслуживание на высоте!",
    likes: "9",
  },
  {
    image: "/img/profile-pictures/no-profile-picture.png",
    name: "Мурад Сарафан",
    date: "15 дней назад",
    text: "Спасибо. Выкрикивал комплименты повару — никто не жаловался из соседей.",
    likes: "11",
  },
  {
    image: "/img/profile-pictures/author-2.jpg",
    name: "Патриция Стёклышкова",
    date: "Неделю назад",
    text: "Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент",
    likes: "2",
  },
  {
    image: "/img/profile-pictures/no-profile-picture.png",
    name: "Василий Петров",
    date: "Месяц назад",
    text: "Завтраки в номер советую заказать.",
    likes: "8",
  },
  {
    image: "/img/profile-pictures/no-profile-picture.png",
    name: "Петр Петров",
    date: "3 года назад",
    text: "Чисто...",
    likes: "1",
  },
  {
    image: "/img/profile-pictures/no-profile-picture.png",
    name: "Наталья Смирнова",
    date: "2 года назад",
    text: "Обслуживание на высоте!",
    likes: "9",
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

let fullRooms = [];

const createFullRooms = (rooms) =>
  rooms.map((room) => {
    const fullRoom = createFullRandomRoom(room);
    fullRooms.push({ id: room.id, data: fullRoom });
    return { ...room, ...fullRoom };
  });

let rooms = createRooms();
fullRooms = createFullRooms(rooms);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { id } = req.query;

    if (id) {
      const cachedRoom = await redis.hget('fullRooms', id);
      if (cachedRoom) {
        return res.json(cachedRoom);
      }

      return res.status(404).json({ message: "Room not found in cache" });
    }

    let cachedRooms = await redis.get('rooms');

    if (!cachedRooms) {
  
      console.log('Generating new faker data...');
      let rooms = createRooms();
      let fullRooms = createFullRooms(rooms);


      await redis.set('rooms', rooms, { ex: TTL });
      const fullRoomsMap = {};
      for (const room of fullRooms) {
        fullRoomsMap[room.id] = room;
      }
      await redis.hmset('fullRooms', fullRoomsMap); 
      await redis.expire('fullRooms', TTL);

      cachedRooms = rooms;
    }

    res.json(cachedRooms);
  } catch (error) {
    console.error('Redis error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
