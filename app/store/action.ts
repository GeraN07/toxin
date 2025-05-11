
import { State } from "../types/state";

export const setFilters = (filters:State) => ({
  type: 'filter/setFilters',
  payload: filters,
});
export const setMaxGuests = (maxGuests:number) => ({
  type: 'filter/setMaxGuests',
  payload: maxGuests,
});

export const setFullRoom = (id:string) => ({
  type: 'filter/setFullRoom',
  payload: id,
});

export const setAdultCount = (adultCount:number) => ({
  type: 'filter/setAdultCount',
  payload: adultCount,
});

export const setChildCount = (childCount:number) => ({
  type: 'filter/setChildCount',
  payload: childCount,
});

export const setInfantCount = (infantCount:number) => ({
  type: 'filter/setInfantCount',
  payload: infantCount,
});

export const setDatesRange = (datesRange:string[]) => ({
  type: 'filter/setDatesRange',
  payload: datesRange,
});

export const setMinPrice = (minPrice:number) => ({
  type: 'filter/setMinPrice',
  payload: minPrice,
});

export const setMaxPrice = (maxPrice:number) => ({
  type: 'filter/setMaxPrice',
  payload: maxPrice,
});

export const setSmoking = (smoking:boolean) => ({
  type: 'filter/setSmoking',
  payload: smoking,
});

export const setPet = (pet:boolean) => ({
  type: 'filter/setPet',
  payload: pet,
});

export const setGuests = (guests:boolean) => ({
  type: 'filter/setGuests',
  payload: guests,
});

export const setWideCoridor = (wideCoridor:boolean) => ({
  type: 'filter/setWideCoridor',
  payload: wideCoridor,
});

export const setHelper = (helper:boolean) => ({
  type: 'filter/setHelper',
  payload: helper,
});

export const setBedrooms = (bedroomCount:number) => ({
  type: 'filter/setBedrooms',
  payload: bedroomCount,
});

export const setBeds = (bedsCount:number) => ({
  type: 'filter/setBeds',
  payload: bedsCount,
});

export const setBathrooms = (bathrooms:number) => ({
  type: 'filter/setBathrooms',
  payload: bathrooms,
});

export const setBreakfast = (breakfast:boolean) => ({
  type: 'filter/setBreakfast',
  payload: breakfast,
});

export const setTable = (table:boolean) => ({
  type: 'filter/setTable',
  payload: table,
});

export const setHchair = (hchair:boolean) => ({
  type: 'filter/setHchair',
  payload: hchair,
});

export const setBabyBed = (babyBed:boolean) => ({
  type: 'filter/setBabyBed',
  payload: babyBed,
});

export const setTv = (tv:boolean) => ({
  type: 'filter/setTv',
  payload: tv,
});

export const setShampoo = (shampoo:boolean) => ({
  type: 'filter/setShampoo',
  payload: shampoo,
});

export const setSortedRooms = () => ({
  type: 'filter/setSortedRooms',
});
