'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CheckboxButtons from '../../checkbox-buttons/checkbox-buttons';
import Dropdown from '../../dropdown-qty/dropdown-qty';
import ExpandableCheckboxList from '../../expandable-checkbox-list/expandable-checkbox-list';
import FilterDateDropdown from '../../filter-date-dropdown/filter-date-dropdown';
import RangeSlider from '../../range-slider/range-slider';
import RichCheckboxButtons from '../../rich-checkbox-buttons/rich-checkbox-buttons';
import { getFilters } from '../../../store/selectors';
import { setFilters } from '../../../store/action';
import { State } from '../../../types/state';

type AsideFiltersProps = {
  asideOpen: boolean;
  toggleAside: () => void;
};
type StateData = number | boolean | undefined | string[] | undefined[];

const AsideFilters = ({ asideOpen, toggleAside }: AsideFiltersProps) => {
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  //  Загружаем фильтры из URL в Redux при каждом изменении searchParams
  useEffect(() => {
    const validated: { [key: string]: StateData } = {};

    const intOrDefault = (key: string, min = 0, max = 20, def = 0) => {
      const raw = searchParams.get(key);
      const val = parseInt(raw || '');
      validated[key] = isNaN(val) || val < min || val > max ? def : val;
    };
    intOrDefault('maxGuests', 1, 10, 1);
    intOrDefault('adultCount', 0, 10, 0);
    intOrDefault('childCount', 0, 10, 0);
    intOrDefault('infantCount', 0, 10, 0);
    intOrDefault('minPrice', 0, 16000, 0);
    intOrDefault('maxPrice', 0, 16000, 16000);
    intOrDefault('bedroomCount', 0, 10, 0);
    intOrDefault('bedsCount', 0, 10, 0);
    intOrDefault('bathRoomsCount', 0, 10, 0);

    const boolKeys = [
      'smoking',
      'pet',
      'guests',
      'wideCoridor',
      'helper',
      'breakfast',
      'table',
      'hchair',
      'babyBed',
      'tv',
      'shampoo',
    ] as const;

    type BoolKey = (typeof boolKeys)[number];

    for (const key of boolKeys) {
      const raw = searchParams.get(key);
      validated[key] = (raw === 'true') as State[BoolKey];
    }

    const datesRaw = searchParams.get('datesRange');
    validated.datesRange = datesRaw
      ? datesRaw.split(',')
      : [undefined, undefined];

    dispatch(setFilters(validated as State));
  }, [searchParams]);

  //  Синхронизируем Redux В URL
  useEffect(() => {
    const params = new URLSearchParams();
    let changed = false;

    const addParam = (
      key: string,
      value: StateData,
      defaultValue?: number | boolean
    ) => {
      if (value !== undefined && value !== defaultValue) {
        if (value !== false) {
          if (params.get(key) !== value.toString()) {
            changed = true;
            params.set(key, value.toString());
          }
        } else {
          changed = true;
          params.delete(key);
        }
      }
    };

    addParam('maxGuests', filters.maxGuests, 1);
    addParam('adultCount', filters.adultCount, 0);
    addParam('childCount', filters.childCount, 0);
    addParam('infantCount', filters.infantCount, 0);
    addParam('minPrice', filters.minPrice, 0);
    addParam('maxPrice', filters.maxPrice, 16000);
    addParam('smoking', filters.smoking);
    addParam('pet', filters.pet);
    addParam('guests', filters.guests);
    addParam('wideCoridor', filters.wideCoridor);
    addParam('helper', filters.helper);
    addParam('bedroomCount', filters.bedroomCount, 0);
    addParam('bedsCount', filters.bedsCount, 0);
    addParam('bathrooms', filters.bathRoomsCount, 0);
    addParam('breakfast', filters.breakfast);
    addParam('table', filters.table);
    addParam('hchair', filters.hchair);
    addParam('babyBed', filters.babyBed);
    addParam('tv', filters.tv);
    addParam('shampoo', filters.shampoo);

    if (
      Array.isArray(filters.datesRange) &&
      filters.datesRange.length > 0 &&
      filters.datesRange[0]
    ) {
      params.set('datesRange', filters.datesRange.join(','));
    }

    if (typeof window !== 'undefined' && changed) {
      router.replace(`${window.location.pathname}?${params.toString()}`, {
        scroll: false,
      });
    }
  }, [filters, router]);

  return (
    <aside className={`filter-block ${asideOpen ? 'active' : ''}`}>
      <span className="filter-block__close-button" onClick={toggleAside}>
        <div className="filter-block__close-button-icon"></div>
      </span>
      <div className="filter-block__filter-block-wrapper">
        <FilterDateDropdown />
        <Dropdown option={'guest'} />
        <RangeSlider h3="ДИАПАЗОН ЦЕНЫ" />
        <CheckboxButtons h3="CHECKBOX BUTTONS" />
        <RichCheckboxButtons h3="ДОСТУПНОСТЬ" />
        <Dropdown option={'rooms'} />
        <ExpandableCheckboxList buttonTitle="дополнительные удобства" />
        <span className="button-purpule-large">
          <a className="button-purpule-large__link" onClick={toggleAside}>
            применить
          </a>
        </span>
      </div>
    </aside>
  );
};

export default AsideFilters;
