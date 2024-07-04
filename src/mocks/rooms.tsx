import { faker } from '@faker-js/faker';
import { FullOffer, Room, Rooms } from '../types/rooms';
import { features, feedbacks, rating } from '../const';

const shuffle = <T,>(array: T[]): T[] => {
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
function createRandomRoom(): Room {
  return {
    id: faker.string.uuid(),
    roomNumber: faker.number.int({ min: 1, max: 100 }).toString(),
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
    dates: generateDates().map((date) => date.toISOString()),
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
  };
}

function createFullRandomRoom(room: Room): Omit<FullOffer, keyof Room> {
  return {
    imgArr: shuffle([
      'img/rooms-image/room-image1.jpg',
      'img/rooms-image/room-image2.jpg',
      'img/rooms-image/room-image3.jpg',
    ]),
    features: faker.helpers.arrayElements(features, { min: 1, max: 3 }),
    feedback: faker.helpers.arrayElements(feedbacks, {
      min: parseInt(room.reviews, 10),
      max: parseInt(room.reviews, 10),
    }),
    votes: faker.number.int({ max: 100 }),
    totalRating: rating[faker.number.int({ max: rating.length - 1 })],
  };
}

const createRooms = (numRums = 15) =>
  Array.from({ length: numRums }, createRandomRoom);

const createFullRooms = (rooms: Rooms): FullOffer[] =>
  rooms.map((room: Room) => {
    const fullOfferData = createFullRandomRoom(room);
    return { ...room, ...fullOfferData };
  });

export { createRooms, createFullRooms };
