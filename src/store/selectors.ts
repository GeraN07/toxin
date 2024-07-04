import { Store } from '../types/state';
import { createSelector } from 'reselect';

export const selectState = (state: Store) => state;

export const getMinPrice = createSelector(selectState, (filter) => filter.minPrice);
export const getMaxPrice = createSelector(selectState, (filter) => filter.maxPrice);


export const getSmokingStatus = createSelector(selectState, (filter) => filter.smoking);
export const getPetStatus = createSelector(selectState, (filter) => filter.pet);
export const getGuestStatus = createSelector(selectState, (filter) => filter.guests);

export const getBreakfastStatus = createSelector(selectState, (filter) => filter.breakfast);
export const getTableStatus = createSelector(selectState, (filter) => filter.table);
export const getChairStatus = createSelector(selectState, (filter) => filter.hchair);
export const getBedStatus = createSelector(selectState, (filter) => filter.babyBed);
export const getTvStatus = createSelector(selectState, (filter) => filter.tv);
export const getShowerStatus = createSelector(selectState, (filter) => filter.shampoo);

export const getWideCoridorStatus = createSelector(selectState, (filter) => filter.wideCoridor);
export const getHelperStatus = createSelector(selectState, (filter) => filter.helper);

export const getDates = createSelector(selectState, (filter) => filter.datesRange);
export const getBedrooms = createSelector(selectState, (filter) => filter.bedroomCount);
export const getBeds = createSelector(selectState, (filter) => filter.bedsCount);
export const getBathRooms = createSelector(selectState, (filter) => filter.bathRoomsCount);

export const getAdults = createSelector(selectState, (filter) => filter.adultCount);
export const getChild = createSelector(selectState, (filter) => filter.childCount);
export const getInfant = createSelector(selectState, (filter) => filter.infantCount);

export const getFullRoom = createSelector(selectState, (filter) => filter.fullRoom);
export const getSortedRooms = createSelector(selectState, (filter) => filter.sortedRooms);
