import store from '../store/store';

export type Store = {
  maxGuests: number;
  adultCount: number;
  childCount: number;
  infantCount: number;
  datesRange: string[] | null[];
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
