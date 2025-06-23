'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CheckboxButtons from '../../checkbox-buttons/checkbox-buttons';
import Dropdown from '../../dropdown-qty/dropdown-qty';
import ExpandableCheckboxList from '../../expandable-checkbox-list/expandable-checkbox-list';
import FilterDateDropdown from '../../filter-date-dropdown/filter-date-dropdown';
import RangeSlider from '../../range-slider/range-slider';
import RichCheckboxButtons from '../../rich-checkbox-buttons/rich-checkbox-buttons';
import { getFilters } from '../../../store/selectors';
import { setFilters } from '../../../store/action';
import type { State } from '../../../types/state';

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

  const [isMobile, setIsMobile] = useState(false);
  const [localFilters, setLocalFilters] = useState<State>(filters);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1161);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  // Загружаем параметры из URL при монтировании
  useEffect(() => {
    const validated: { [key: string]: StateData } = {};

    const intOrDefault = (key: string, min = 0, max = 20, def = 0) => {
      const raw = searchParams.get(key);
      const val = parseInt(raw || '', 10);
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

    for (const key of boolKeys) {
      const raw = searchParams.get(key);
      validated[key] = raw === 'true';
    }

    const datesRaw = searchParams.get('datesRange');
    validated.datesRange = datesRaw
      ? datesRaw.split(',')
      : [undefined, undefined];

    const fullState = validated as State;

    if (!isMobile) {
      dispatch(setFilters(fullState));
    }

    setLocalFilters(fullState);
  }, [searchParams, dispatch, isMobile]);

  // При каждом открытии фильтров на мобилке — сбрасываем локальные на текущее состояние из Redux
  useEffect(() => {
    if (isMobile && asideOpen) {
      setLocalFilters(filters);
    }
  }, [asideOpen, isMobile, filters]);

  const updateUrlFromFilters = (filtersToUpdate: State) => {
    const params = new URLSearchParams();

    const addParam = (
      key: string,
      value: StateData,
      def?: number | boolean
    ) => {
      if (value !== undefined && value !== def) {
        if (typeof value === 'boolean' && value) {
          params.set(key, 'true');
        } else if (typeof value !== 'boolean') {
          params.set(key, value.toString());
        }
      }
    };

    addParam('maxGuests', filtersToUpdate.maxGuests, 1);
    addParam('adultCount', filtersToUpdate.adultCount, 0);
    addParam('childCount', filtersToUpdate.childCount, 0);
    addParam('infantCount', filtersToUpdate.infantCount, 0);
    addParam('minPrice', filtersToUpdate.minPrice, 0);
    addParam('maxPrice', filtersToUpdate.maxPrice, 16000);
    addParam('bedroomCount', filtersToUpdate.bedroomCount, 0);
    addParam('bedsCount', filtersToUpdate.bedsCount, 0);
    addParam('bathRoomsCount', filtersToUpdate.bathRoomsCount, 0);

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
    ];

    for (const key of boolKeys) {
      addParam(key, filtersToUpdate[key as keyof State] as boolean);
    }

    if (
      Array.isArray(filtersToUpdate.datesRange) &&
      filtersToUpdate.datesRange.length > 0 &&
      filtersToUpdate.datesRange[0]
    ) {
      params.set('datesRange', filtersToUpdate.datesRange.join(','));
    }

    params.delete('page');
    router.replace(`${window.location.pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    if (!isMobile) {
      updateUrlFromFilters(filters);
    }
  }, [filters, isMobile]);

  const applyMobileFilters = () => {
    dispatch(setFilters(localFilters));
    updateUrlFromFilters(localFilters);
    toggleAside();
  };

  return (
    <aside className={`filter-block ${asideOpen ? 'active' : ''}`}>
      <span className="filter-block__close-button" onClick={toggleAside}>
        <div className="filter-block__close-button-icon"></div>
      </span>
      <div className="filter-block__filter-block-wrapper">
        <FilterDateDropdown />
        <Dropdown option="guest" />
        <RangeSlider h3="ДИАПАЗОН ЦЕНЫ" />
        <CheckboxButtons h3="CHECKBOX BUTTONS" />
        <RichCheckboxButtons h3="ДОСТУПНОСТЬ" />
        <Dropdown option="rooms" />
        <ExpandableCheckboxList buttonTitle="дополнительные удобства" />
        <span className="button-purpule-large">
          <a
            className="button-purpule-large__link"
            onClick={applyMobileFilters}
          >
            применить
          </a>
        </span>
      </div>
    </aside>
  );
};

export default AsideFilters;
