import { Store } from '../types/state';
import { createSelector } from 'reselect';

export const selectState = (state: Store) => state;

export const getMinPrice = createSelector(selectState, (state) => state.minPrice);
export const getMaxPrice = createSelector(selectState, (state) => state.maxPrice);


export const getSmokingStatus = createSelector(selectState, (state) => state.smoking);
export const getPetStatus = createSelector(selectState, (state) => state.pet);
export const getGuestStatus = createSelector(selectState, (state) => state.guests);

export const getBreakfastStatus = createSelector(selectState, (state) => state.breakfast);
export const getTableStatus = createSelector(selectState, (state) => state.table);
export const getChairStatus = createSelector(selectState, (state) => state.hchair);
export const getBedStatus = createSelector(selectState, (state) => state.babyBed);
export const getTvStatus = createSelector(selectState, (state) => state.tv);
export const getShowerStatus = createSelector(selectState, (state) => state.shampoo);

export const getWideCoridorStatus = createSelector(selectState, (state) => state.wideCoridor);
export const getHelperStatus = createSelector(selectState, (state) => state.helper);

export const getDates = createSelector(selectState, (state) => state.datesRange);
export const getBedrooms = createSelector(selectState, (state) => state.bedroomCount);
export const getBeds = createSelector(selectState, (state) => state.bedsCount);
export const getBathRooms = createSelector(selectState, (state) => state.bathRoomsCount);

export const getAdults = createSelector(selectState, (state) => state.adultCount);
export const getChild = createSelector(selectState, (state) => state.childCount);
export const getInfant = createSelector(selectState, (state) => state.infantCount);

export const getAllRooms = createSelector(selectState, (state) => state.rooms);
export const getFullRoom = createSelector(selectState, (state) => state.fullRoom);
export const getSortedRooms = createSelector(selectState, (state) => state.sortedRooms);

export const getTotalGuests = createSelector(selectState, (state) => state.maxGuests);


