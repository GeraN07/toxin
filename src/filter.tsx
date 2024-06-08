import { Rooms } from './types/rooms';

const isWithinRange = (dateRange: Date[], startDate: Date, endDate: Date) => {
  const [rangeStart, rangeEnd] = dateRange.map(date => new Date(date));
  return (
    (startDate >= rangeStart && startDate <= rangeEnd) ||
    (endDate >= rangeStart && endDate <= rangeEnd) ||
    (startDate <= rangeStart && endDate >= rangeEnd)
  );
};

const meetsCriteria = (criteriaValue: boolean | undefined, roomValue: boolean | undefined) => {
  return criteriaValue === undefined || roomValue === criteriaValue;
};

export const offersSort = (
  rooms: Rooms,
  maxGuests: number,
  datesRange: string[],
  minPrice?: string,
  maxPrice?: string,
  smoking?: boolean,
  pet?: boolean,
  guests?: boolean,
  wideCoridor?: boolean,
  helper?: boolean,
  breakfast?: boolean,
  table?: boolean,
  hchair?: boolean,
  babyBed?: boolean,
  tv?: boolean,
  shampoo?: boolean,
): Rooms => {
  const [startDateStr, endDateStr] = datesRange;
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  return rooms.filter((room) => {
    const meetsGuestCriteria = room.maxGuests >= maxGuests;
    const meetsDateCriteria = isWithinRange(room.dates, startDate, endDate);

    const meetsPriceCriteria = (
      (!minPrice || !maxPrice) || 
      (Number(room.price) >= Number(minPrice) && Number(room.price) <= Number(maxPrice))
    );

    const meetsCheckboxesCriteria = (
      meetsCriteria(smoking, room.checkboxes?.smoking) &&
      meetsCriteria(pet, room.checkboxes?.pet) &&
      meetsCriteria(guests, room.checkboxes?.guests)
    );

    const meetsAccessibilityCriteria = (
      meetsCriteria(wideCoridor, room.accessibilityCheckboxes?.wideCoridor) &&
      meetsCriteria(helper, room.accessibilityCheckboxes?.helper)
    );

    const meetsAdditionalCriteria = (
      meetsCriteria(breakfast, room.additionalCheckboxes?.breakfast) &&
      meetsCriteria(table, room.additionalCheckboxes?.table) &&
      meetsCriteria(hchair, room.additionalCheckboxes?.hchair) &&
      meetsCriteria(babyBed, room.additionalCheckboxes?.badbyBad) &&
      meetsCriteria(tv, room.additionalCheckboxes?.tv) &&
      meetsCriteria(shampoo, room.additionalCheckboxes?.shampoo)
    );

    return (
      meetsGuestCriteria &&
      meetsDateCriteria &&
      meetsPriceCriteria &&
      meetsCheckboxesCriteria &&
      meetsAccessibilityCriteria &&
      meetsAdditionalCriteria
    );
  });
};

export default offersSort;
