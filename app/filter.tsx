import { Rooms } from './types/rooms';
import { State } from './types/state';

const isWithinRange = (
  dateRange: string[],
  startDate?: string | null,
  endDate?: string | null
): boolean => {
  const [rangeStart, rangeEnd] = dateRange.map((date) => new Date(date));

  let startDateObj: Date | undefined;
  let endDateObj: Date | undefined;

  if (startDate !== undefined && startDate !== null) {
    startDateObj = new Date(startDate);
  }

  if (endDate !== undefined && endDate !== null) {
    endDateObj = new Date(endDate);
  }

  return (
    (startDateObj !== undefined &&
      endDateObj !== undefined &&
      startDateObj >= rangeStart &&
      startDateObj <= rangeEnd &&
      endDateObj >= rangeStart &&
      endDateObj <= rangeEnd) ||
    (startDateObj === undefined && endDateObj === undefined)
  );
};

const meetsCriteria = (
  criteriaValue: boolean | undefined,
  roomValue: boolean | undefined
) =>
  criteriaValue === undefined ||
  criteriaValue === false ||
  roomValue === criteriaValue;

export const roomsSort = (rooms: Rooms, filters: State): Rooms => {
  const {
    datesRange,
    maxGuests = 1,
    minPrice = 0,
    maxPrice = 16000,
    bedroomCount = 0,
    bedsCount = 0,
    bathRoomsCount = 0,
    smoking,
    pet,
    guests,
    wideCoridor,
    helper,
    breakfast,
    table,
    hchair,
    babyBed,
    tv,
    shampoo,
  } = filters;

  return rooms.filter((room) => {
    const meetsGuestCriteria = room.maxGuests >= maxGuests;
    const meetsDateCriteria =
      datesRange === undefined ||
      isWithinRange(room.dates, datesRange[0], datesRange[1]);
    const meetsBedroomsCriteria =
      room.additionalDropdown.bedroomCount >= bedroomCount;
    const meetsBedsCriteria = room.additionalDropdown.bedsCount >= bedsCount;
    const meetsBathroomsCriteria =
      room.additionalDropdown.bathRoomsCount >= bathRoomsCount;

    const meetsPriceCriteria =
      (minPrice === undefined && maxPrice === undefined) ||
      (Number(room.price) >= Number(minPrice) &&
        Number(room.price) <= Number(maxPrice));

    const meetsCheckboxesCriteria =
      meetsCriteria(smoking, room.checkboxes?.smoking) &&
      meetsCriteria(pet, room.checkboxes?.pet) &&
      meetsCriteria(guests, room.checkboxes?.guests);

    const meetsAccessibilityCriteria =
      meetsCriteria(wideCoridor, room.accessibilityCheckboxes?.wideCoridor) &&
      meetsCriteria(helper, room.accessibilityCheckboxes?.helper);

    const meetsAdditionalCriteria =
      meetsCriteria(breakfast, room.additionalCheckboxes?.breakfast) &&
      meetsCriteria(table, room.additionalCheckboxes?.table) &&
      meetsCriteria(hchair, room.additionalCheckboxes?.hchair) &&
      meetsCriteria(babyBed, room.additionalCheckboxes?.badbyBad) &&
      meetsCriteria(tv, room.additionalCheckboxes?.tv) &&
      meetsCriteria(shampoo, room.additionalCheckboxes?.shampoo);

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
