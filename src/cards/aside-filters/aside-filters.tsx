import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckboxButtons from '../../components/checkbox-buttons/checkbox-buttons';
import Dropdown from '../../components/dropdown-qty/dropdown-qty';
import ExpandableCheckboxList from '../../components/expandable-checkbox-list/expandable-checkbox-list';
import FilterDateDropdown from '../../components/filter-date-dropdown/filter-date-dropdown';
import RangeSlider from '../../components/range-slider/range-slider';
import RichCheckboxButtons from '../../components/rich-checkbox-buttons/rich-checkbox-buttons';
import { Store } from '../../types/state';

type AsideFiltersProps = {
  asideOpen: boolean;
  toggleAside: () => void;
};

const AsideFilters = ({ asideOpen, toggleAside }: AsideFiltersProps) => {
  const filters = useSelector((state: Store) => state);
  const navigate = useNavigate();

  useEffect(() => {
    const updateURL = (filters: Store) => {
      const params = new URLSearchParams();

      if (filters.maxGuests !== undefined && filters.maxGuests !== 1) params.set('maxGuests', filters.maxGuests.toString());
      if (filters.adultCount !== undefined && filters.adultCount !== 0) params.set('adultCount', filters.adultCount.toString());
      if (filters.childCount !== undefined && filters.childCount !== 0) params.set('childCount', filters.childCount.toString());
      if (filters.infantCount !== undefined && filters.infantCount !== 0) params.set('infantCount', filters.infantCount.toString());
      if (filters.datesRange[0] && filters.datesRange.length > 0) {
        params.set('datesRange', filters.datesRange.join(','));
      }
      if (filters.minPrice !== undefined && filters.minPrice !== 0) params.set('minPrice', filters.minPrice.toString());
      if (filters.maxPrice !== undefined && filters.maxPrice !== 16000) params.set('maxPrice', filters.maxPrice.toString());
      if (filters.smoking !== undefined) params.set('smoking', filters.smoking.toString());
      if (filters.pet !== undefined) params.set('pet', filters.pet.toString());
      if (filters.guests !== undefined) params.set('guests', filters.guests.toString());
      if (filters.wideCoridor !== undefined) params.set('wideCoridor', filters.wideCoridor.toString());
      if (filters.helper !== undefined) params.set('helper', filters.helper.toString());
      if (filters.bedroomCount !== undefined && filters.bedroomCount !== 0) params.set('bedroomCount', filters.bedroomCount.toString());
      if (filters.bedsCount !== undefined && filters.bedsCount !== 0) params.set('bedsCount', filters.bedsCount.toString());
      if (filters.bathRoomsCount !== undefined && filters.bathRoomsCount !== 0) params.set('bathrooms', filters.bathRoomsCount.toString());
      if (filters.breakfast !== undefined) params.set('breakfast', filters.breakfast.toString());
      if (filters.table !== undefined) params.set('table', filters.table.toString());
      if (filters.hchair !== undefined) params.set('hchair', filters.hchair.toString());
      if (filters.babyBed !== undefined) params.set('babyBed', filters.babyBed.toString());
      if (filters.tv !== undefined) params.set('tv', filters.tv.toString());
      if (filters.shampoo !== undefined) params.set('shampoo', filters.shampoo.toString());

      // Обновление URL с использованием navigate
      navigate(`${window.location.pathname}?${params.toString()}`, { replace: true });
    };

    updateURL(filters);
  }, [filters, navigate]);

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
