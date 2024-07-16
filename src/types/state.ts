import store from '../store/store';
import { FullOffer, Rooms } from './rooms';

export type Store = {
  rooms: Rooms;
  fullRoom: FullOffer | undefined;
  sortedRooms: Rooms;
  maxGuests: number;
  adultCount: number;
  childCount: number;
  infantCount: number;
  datesRange: string[] | undefined[];
  minPrice: number;
  maxPrice: number;
  smoking: boolean | undefined;
  pet: boolean | undefined;
  guests: boolean | undefined;
  wideCoridor: boolean | undefined;
  helper: boolean | undefined;
  bedroomCount: number;
  bedsCount: number;
  bathRoomsCount: number;
  breakfast: boolean | undefined;
  table: boolean | undefined;
  hchair: boolean | undefined;
  babyBed: boolean | undefined;
  tv: boolean | undefined;
  shampoo: boolean | undefined;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
