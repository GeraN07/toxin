export type Room = {
  id: string;
  roomNumber: string;
  price: string;
  reviews: string;
  srcArr: string[];
  rating: string;
  lux: boolean;
  dates: Date[];
  maxGuests: number;
  checkboxes: { smoking: boolean; pet: boolean; guests: boolean };
  accessibilityCheckboxes: {wideCoridor: boolean; helper: boolean};
  additionalDropdown:{bedroomCount: number, bedsCount: number, bathRoomsCount: number};
  additionalCheckboxes: {breakfast: boolean; table: boolean; hchair: boolean; badbyBad: boolean; tv: boolean; shampoo: boolean};
};

export type Rooms = Room[];
