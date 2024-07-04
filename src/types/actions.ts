interface SetRoomsAction {
    type: 'SET_ROOMS';
  }

  interface SetFullRoomAction {
    type: 'SET_FULL_ROOM';
    payload: string;
  }

  interface SetAdultCountAction {
    type: 'SET_ADULT_COUNT';
    payload: number;
  }

  interface SetChildCountAction {
    type: 'SET_CHILD_COUNT';
    payload: number;
  }

  interface SetInfantCountAction {
    type: 'SET_INFANT_COUNT';
    payload: number;
  }

  interface SetMaxGuestsAction {
    type: 'SET_MAX_GUESTS';
    payload: number;
  }

  interface SetDatesRangeAction {
    type: 'SET_DATES_RANGE';
    payload: [Date | undefined, Date | undefined];
  }

  interface SetMinPriceAction {
    type: 'SET_MIN_PRICE';
    payload: number;
  }

  interface SetMaxPriceAction {
    type: 'SET_MAX_PRICE';
    payload: number;
  }

  interface SetSmokingAction {
    type: 'SET_SMOKING';
    payload: boolean | undefined;
  }

  interface SetPetAction {
    type: 'SET_PET';
    payload: boolean | undefined;
  }

  interface SetGuestsAction {
    type: 'SET_GUESTS';
    payload: boolean | undefined;
  }

  interface SetWideCoridorAction {
    type: 'SET_WIDE_CORIDOR';
    payload: boolean | undefined;
  }

  interface SetBedroomsAction {
    type: 'SET_BEDROOMS';
    payload: number;
  }

  interface SetBedsAction {
    type: 'SET_BEDS';
    payload: number;
  }

  interface SetBathroomsAction {
    type: 'SET_BATHROOMS';
    payload: number;
  }

  interface SetHelperAction {
    type: 'SET_HELPER';
    payload: boolean | undefined;
  }

  interface SetBreakfastAction {
    type: 'SET_BREAKFAST';
    payload: boolean | undefined;
  }

  interface SetTableAction {
    type: 'SET_TABLE';
    payload: boolean | undefined;
  }

  interface SetHchairAction {
    type: 'SET_HCHAIR';
    payload: boolean | undefined;
  }

  interface SetBabyBedAction {
    type: 'SET_BABY_BED';
    payload: boolean | undefined;
  }

  interface SetTvAction {
    type: 'SET_TV';
    payload: boolean | undefined;
  }

  interface SetShampooAction {
    type: 'SET_SHAMPOO';
    payload: boolean | undefined;
  }

  interface SetSortedRoomsAction {
    type: 'SET_SORTED_ROOMS';
  }


export type FilterActions =
  | SetRoomsAction
  | SetFullRoomAction
  | SetAdultCountAction
  | SetChildCountAction
  | SetInfantCountAction
  | SetMaxGuestsAction
  | SetDatesRangeAction
  | SetMinPriceAction
  | SetMaxPriceAction
  | SetSmokingAction
  | SetPetAction
  | SetGuestsAction
  | SetWideCoridorAction
  | SetBedroomsAction
  | SetBedsAction
  | SetBathroomsAction
  | SetHelperAction
  | SetBreakfastAction
  | SetTableAction
  | SetHchairAction
  | SetBabyBedAction
  | SetTvAction
  | SetShampooAction
  | SetSortedRoomsAction;
