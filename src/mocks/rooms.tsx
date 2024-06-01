import { faker } from '@faker-js/faker';
import { Room } from '../types/rooms';

function createRandomRoom(): Room {
  return {
    id: faker.string.uuid(),
    roomNumber: faker.number.int(100).toString(),
    price: faker.number.int(9999).toString(),
    reviews: faker.number.int(10).toString(),
    srcArr: shuffle(['img/rooms-preview/room2.jpg','img/rooms-preview/room1.jpg','img/rooms-preview/room3.jpg','img/rooms-preview/room4.jpg']),
    rating: `${faker.number.int(100).toString() }%`,
    lux: faker.datatype.boolean(),
    dates: [faker.date.anytime(), faker.date.anytime()],
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
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const createRooms = (numRums = 15) => Array.from({length: numRums}, createRandomRoom);
export default createRooms;
