// actions.js
export const setMaxGuests = (maxGuests: number) => ({
  type: 'SET_MAX_GUESTS',
  payload: maxGuests,
});

export const setFullRoom = (id: string) => ({
  type: 'SET_FULL_ROOM',
  payload: id,
});

export const setAdultCount = (adultCount: number) => ({
  type: 'SET_ADULT_COUNT',
  payload: adultCount,
});
export const setChildCount = (childCount: number) => ({
  type: 'SET_CHILD_COUNT',
  payload: childCount,
});
export const setInfantCount = (infantCount: number) => ({
  type: 'SET_INFANT_COUNT',
  payload: infantCount,
});

export const setDatesRange = (datesRange: Date[]) => ({
  type: 'SET_DATES_RANGE',
  payload: datesRange.map((date) => date.toISOString()),
});

export const setMinPrice = (minPrice: number) => ({
  type: 'SET_MIN_PRICE',
  payload: minPrice,
});

export const setMaxPrice = (maxPrice: number) => ({
  type: 'SET_MAX_PRICE',
  payload: maxPrice,
});

export const setSmoking = (smoking: boolean) => ({
  type: 'SET_SMOKING',
  payload: smoking,
});

export const setPet = (pet: boolean) => ({
  type: 'SET_PET',
  payload: pet,
});

export const setGuests = (guests: boolean) => ({
  type: 'SET_GUESTS',
  payload: guests,
});

export const setWideCoridor = (wideCoridor: boolean) => ({
  type: 'SET_WIDE_CORIDOR',
  payload: wideCoridor,
});

export const setHelper = (helper: boolean) => ({
  type: 'SET_HELPER',
  payload: helper,
});
export const setBedrooms = (bedroomCount: number) => ({
  type: 'SET_BEDROOMS',
  payload: bedroomCount,
});
export const setBeds = (bedsCount: number) => ({
  type: 'SET_BEDS',
  payload: bedsCount,
});
export const setBathrooms = (bathrooms: number) => ({
  type: 'SET_BATHROOMS',
  payload: bathrooms,
});

export const setBreakfast = (breakfast: boolean) => ({
  type: 'SET_BREAKFAST',
  payload: breakfast,
});

export const setTable = (table: boolean) => ({
  type: 'SET_TABLE',
  payload: table,
});

export const setHchair = (hchair: boolean) => ({
  type: 'SET_HCHAIR',
  payload: hchair,
});

export const setBabyBed = (babyBed: boolean) => ({
  type: 'SET_BABY_BED',
  payload: babyBed,
});

export const setTv = (tv: boolean) => ({
  type: 'SET_TV',
  payload: tv,
});

export const setShampoo = (shampoo: boolean) => ({
  type: 'SET_SHAMPOO',
  payload: shampoo,
});

export const setRooms = () => ({
  type: 'SET_ROOMS',
});
export const setSortedRooms = () => ({
  type: 'SET_SORTED_ROOMS',
});
