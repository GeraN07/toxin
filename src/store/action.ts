// actions.js
export const setMaxGuests = (maxGuests) => ({
  type: 'SET_MAX_GUESTS',
  payload: maxGuests,
});

export const setFullRoom = (id) => ({
  type: 'SET_FULL_ROOM',
  payload: id,
});

export const setAdultCount = (adultCount) => ({
  type: 'SET_ADULT_COUNT',
  payload: adultCount,
});
export const setChildCount = (childCount) => ({
  type: 'SET_CHILD_COUNT',
  payload: childCount,
});
export const setInfantCount = (infantCount) => ({
  type: 'SET_INFANT_COUNT',
  payload: infantCount,
});

export const setDatesRange = (datesRange) => ({
  type: 'SET_DATES_RANGE',
  payload: datesRange,
});

export const setMinPrice = (minPrice) => ({
  type: 'SET_MIN_PRICE',
  payload: minPrice,
});

export const setMaxPrice = (maxPrice) => ({
  type: 'SET_MAX_PRICE',
  payload: maxPrice,
});

export const setSmoking = (smoking) => ({
  type: 'SET_SMOKING',
  payload: smoking,
});

export const setPet = (pet) => ({
  type: 'SET_PET',
  payload: pet,
});

export const setGuests = (guests) => ({
  type: 'SET_GUESTS',
  payload: guests,
});

export const setWideCoridor = (wideCoridor) => ({
  type: 'SET_WIDE_CORIDOR',
  payload: wideCoridor,
});

export const setHelper = (helper) => ({
  type: 'SET_HELPER',
  payload: helper,
});
export const setBedrooms = (bedroomCount) => ({
  type: 'SET_BEDROOMS',
  payload: bedroomCount,
});
export const setBeds = (bedsCount) => ({
  type: 'SET_BEDS',
  payload: bedsCount,
});
export const setBathrooms = (bathrooms) => ({
  type: 'SET_BATHROOMS',
  payload: bathrooms,
});

export const setBreakfast = (breakfast) => ({
  type: 'SET_BREAKFAST',
  payload: breakfast,
});

export const setTable = (table) => ({
  type: 'SET_TABLE',
  payload: table,
});

export const setHchair = (hchair) => ({
  type: 'SET_HCHAIR',
  payload: hchair,
});

export const setBabyBed = (babyBed) => ({
  type: 'SET_BABY_BED',
  payload: babyBed,
});

export const setTv = (tv) => ({
  type: 'SET_TV',
  payload: tv,
});

export const setShampoo = (shampoo) => ({
  type: 'SET_SHAMPOO',
  payload: shampoo,
});

export const setRooms = () => ({
  type: 'SET_ROOMS',
});
export const setSortedRooms = () => ({
  type: 'SET_SORTED_ROOMS',
});
