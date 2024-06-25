import { Rooms } from './types/rooms';

const isWithinRange = (dateRange: Date[], startDate: Date, endDate: Date) => {
  const [rangeStart, rangeEnd] = dateRange.map((date) => new Date(date));
  if (startDate != undefined && endDate != undefined) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
  }
  return (
    (startDate >= rangeStart &&
      startDate <= rangeEnd &&
      endDate >= rangeStart &&
      endDate <= rangeEnd) ||
    (startDate == null && endDate == null)
  );
};

const meetsCriteria = (
  criteriaValue: boolean | undefined,
  roomValue: boolean | undefined
) => {
  return (
    criteriaValue === undefined ||
    criteriaValue === false ||
    roomValue === criteriaValue
  );
};

export const roomsSort = (rooms: Rooms, state: Object): Rooms => {
  const [startDateStr, endDateStr] = state.datesRange;
  const startDate = startDateStr;
  const endDate = endDateStr;

  return rooms.filter((room) => {
    const meetsGuestCriteria = room.maxGuests >= state.maxGuests;
    const meetsDateCriteria = isWithinRange(room.dates, startDate, endDate);
    const meetsBedroomsCriteria =
      room.additionalDropdown.bedroomCount >= state.bedroomCount;
    const meetsBedsCriteria =
      room.additionalDropdown.bedsCount >= state.bedsCount;
    const meetsBathroomsCriteria =
      room.additionalDropdown.bathRoomsCount >= state.bathRoomsCount;

    const meetsPriceCriteria =
      (state.minPrice == undefined && state.maxPrice == undefined) ||
      (Number(room.price) >= Number(state.minPrice) &&
        Number(room.price) <= Number(state.maxPrice));

    const meetsCheckboxesCriteria =
      meetsCriteria(state.smoking, room.checkboxes?.smoking) &&
      meetsCriteria(state.pet, room.checkboxes?.pet) &&
      meetsCriteria(state.guests, room.checkboxes?.guests);

    const meetsAccessibilityCriteria =
      meetsCriteria(
        state.wideCoridor,
        room.accessibilityCheckboxes?.wideCoridor
      ) && meetsCriteria(state.helper, room.accessibilityCheckboxes?.helper);

    const meetsAdditionalCriteria =
      meetsCriteria(state.breakfast, room.additionalCheckboxes?.breakfast) &&
      meetsCriteria(state.table, room.additionalCheckboxes?.table) &&
      meetsCriteria(state.hchair, room.additionalCheckboxes?.hchair) &&
      meetsCriteria(state.babyBed, room.additionalCheckboxes?.badbyBad) &&
      meetsCriteria(state.tv, room.additionalCheckboxes?.tv) &&
      meetsCriteria(state.shampoo, room.additionalCheckboxes?.shampoo);

    return (
      meetsGuestCriteria &&
      meetsDateCriteria &&
      meetsPriceCriteria &&
      meetsCheckboxesCriteria &&
      meetsBedroomsCriteria &&
      meetsBedsCriteria &&
      meetsBathroomsCriteria &&
      meetsAccessibilityCriteria &&
      meetsAdditionalCriteria
    );
  });
};

export default roomsSort;
