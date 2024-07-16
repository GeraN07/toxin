import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { roomsSort } from '../filter';
import { Store } from '../types/state';
import { fetchRooms, fetchRoomById } from './api-actions'; // Импорт ваших асинхронных экшенов

const initialState: Store = {
  rooms: [],
  fullRoom: undefined,
  sortedRooms: [],
  maxGuests: 1,
  adultCount: 0,
  childCount: 0,
  infantCount: 0,
  datesRange: [undefined, undefined],
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

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setMaxGuests(state, action: PayloadAction<number>) {
      state.maxGuests = action.payload;
    },
    setAdultCount(state, action: PayloadAction<number>) {
      state.adultCount = action.payload;
    },
    setChildCount(state, action: PayloadAction<number>) {
      state.childCount = action.payload;
    },
    setInfantCount(state, action: PayloadAction<number>) {
      state.infantCount = action.payload;
    },
    setDatesRange(state, action: PayloadAction<string[]>) {
      state.datesRange = action.payload;
    },
    setMinPrice(state, action: PayloadAction<number>) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.maxPrice = action.payload;
    },
    setSmoking(state, action: PayloadAction<boolean | undefined>) {
      state.smoking = action.payload;
    },
    setPet(state, action: PayloadAction<boolean | undefined>) {
      state.pet = action.payload;
    },
    setGuests(state, action: PayloadAction<boolean | undefined>) {
      state.guests = action.payload;
    },
    setWideCoridor(state, action: PayloadAction<boolean | undefined>) {
      state.wideCoridor = action.payload;
    },
    setHelper(state, action: PayloadAction<boolean | undefined>) {
      state.helper = action.payload;
    },
    setBedrooms(state, action: PayloadAction<number>) {
      state.bedroomCount = action.payload;
    },
    setBeds(state, action: PayloadAction<number>) {
      state.bedsCount = action.payload;
    },
    setBathrooms(state, action: PayloadAction<number>) {
      state.bathRoomsCount = action.payload;
    },
    setBreakfast(state, action: PayloadAction<boolean | undefined>) {
      state.breakfast = action.payload;
    },
    setTable(state, action: PayloadAction<boolean | undefined>) {
      state.table = action.payload;
    },
    setHchair(state, action: PayloadAction<boolean | undefined>) {
      state.hchair = action.payload;
    },
    setBabyBed(state, action: PayloadAction<boolean | undefined>) {
      state.babyBed = action.payload;
    },
    setTv(state, action: PayloadAction<boolean | undefined>) {
      state.tv = action.payload;
    },
    setShampoo(state, action: PayloadAction<boolean | undefined>) {
      state.shampoo = action.payload;
    },
    setSortedRooms(state) {
      state.sortedRooms = roomsSort(state.rooms, state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.rooms = action.payload;
      })
      .addCase(fetchRoomById.fulfilled, (state, action) => {
        state.fullRoom = action.payload;
      });
  },
});

export const {
  setMaxGuests,
  setAdultCount,
  setChildCount,
  setInfantCount,
  setDatesRange,
  setMinPrice,
  setMaxPrice,
  setSmoking,
  setPet,
  setGuests,
  setWideCoridor,
  setHelper,
  setBedrooms,
  setBeds,
  setBathrooms,
  setBreakfast,
  setTable,
  setHchair,
  setBabyBed,
  setTv,
  setShampoo,
  setSortedRooms,
} = filterSlice.actions;

export default filterSlice.reducer;
