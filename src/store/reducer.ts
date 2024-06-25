import { roomsSort } from '../filter';
import { Rooms } from '../types/rooms';
import { createRooms, createFullRooms } from '../mocks/rooms';

const initialState = {
  rooms: [],
  fullRoom:"",
  sortedRooms: <Rooms>[],
  maxGuests: 1,
  adultCount: 0,
  childCount: 0,
  infantCount: 0,
  datesRange: [null, null],
  minPrice: 0,
  maxPrice: 16000,
  smoking: undefined,
  pet: undefined,
  guests: undefined,
  wideCoridor: undefined,
  helper: undefined,
  bedroomCount: 0,
  bedsCount: 0,
  bathRoomsCount: 0,
  breakfast: undefined,
  table: undefined,
  hchair: undefined,
  babyBed: undefined,
  tv: undefined,
  shampoo: undefined,
};
const rooms = createRooms(50);
const fullRooms = createFullRooms(rooms);
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROOMS':
      return { ...state, rooms: rooms };
    case 'SET_FULL_ROOM':
      const fullRoom = fullRooms.find((room) => room.id === action.payload);
      return { ...state, fullRoom: fullRoom };
    case 'SET_ADULT_COUNT':
      return { ...state, adultCount: action.payload };
    case 'SET_CHILD_COUNT':
      return { ...state, childCount: action.payload };
    case 'SET_INFANT_COUNT':
      return { ...state, infantCount: action.payload };
    case 'SET_MAX_GUESTS':
      return { ...state, maxGuests: action.payload };
    case 'SET_DATES_RANGE':
      return { ...state, datesRange: action.payload };
    case 'SET_MIN_PRICE':
      return { ...state, minPrice: action.payload };
    case 'SET_MAX_PRICE':
      return { ...state, maxPrice: action.payload };
    case 'SET_SMOKING':
      return { ...state, smoking: action.payload };
    case 'SET_PET':
      return { ...state, pet: action.payload };
    case 'SET_GUESTS':
      return { ...state, guests: action.payload };
    case 'SET_WIDE_CORIDOR':
      return { ...state, wideCoridor: action.payload };
    case 'SET_BEDROOMS':
      return { ...state, bedroomCount: action.payload };
    case 'SET_BEDS':
      return { ...state, bedsCount: action.payload };
    case 'SET_BATHROOMS':
      return { ...state, bathRoomsCount: action.payload };
    case 'SET_HELPER':
      return { ...state, helper: action.payload };
    case 'SET_BREAKFAST':
      return { ...state, breakfast: action.payload };
    case 'SET_TABLE':
      return { ...state, table: action.payload };
    case 'SET_HCHAIR':
      return { ...state, hchair: action.payload };
    case 'SET_BABY_BED':
      return { ...state, babyBed: action.payload };
    case 'SET_TV':
      return { ...state, tv: action.payload };
    case 'SET_SHAMPOO':
      return { ...state, shampoo: action.payload };
    case 'SET_SORTED_ROOMS':
      const sortedRooms = roomsSort(state.rooms, state);
      return { ...state, sortedRooms: sortedRooms };
    default:
      return state;
  }
};
// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeCity, (state, action) => {
//       const city = action.payload;
//       state.city = city;
//     })
//     .addCase(changeSort, (state, action) => {
//       const sortType = action.payload;
//       state.currentSort = sortType;
//     })
//     .addCase(showRooms, (state) => {
//       const { currentSort, city, rooms } = state;
//       state.displayedOffers = roomsSort(rooms, city.name, currentSort);
//     });
// });
export default filterReducer;
