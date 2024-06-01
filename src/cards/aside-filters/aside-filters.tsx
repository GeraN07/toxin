import CheckboxButtons from '../../components/checkbox-buttons/checkbox-buttons';
import DropdownQty from '../../components/dropdown-qty/dropdown-qty';
import ExpandableCheckboxList from '../../components/expandable-checkbox-list/expandable-checkbox-list';
import FilterDateDropdown from '../../components/filter-date-dropdown/filter-date-dropdown';
import RangeSlider from '../../components/range-slider/range-slider';
import RichCheckboxButtons from '../../components/rich-checkbox-buttons/rich-checkbox-buttons';

type AsideFiltersProps = {
  asideOpen: boolean;
  toggleAside: () => void;
};

const AsideFilters = ({ asideOpen, toggleAside }: AsideFiltersProps) => (
  <aside className={`filter-block ${asideOpen ? 'active' : ''}`}>
    <span className="filter-block__close-button" onClick={toggleAside}>
      <div className="filter-block__close-button-icon"></div>
    </span>
    <div className="filter-block__filter-block-wrapper">
      <FilterDateDropdown />
      <DropdownQty options="guests" h3="Гости" />
      <RangeSlider h3="ДИАПАЗОН ЦЕНЫ" />
      <CheckboxButtons h3="CHECKBOX BUTTONS" />
      <RichCheckboxButtons h3="ДОСТУПНОСТЬ" />
      <DropdownQty options="rooms" h3="УДОБСТВА НОМЕРА" />
      <ExpandableCheckboxList buttonTitle="дополнительные удобства" />
      <span className="button-purpule-large">
        <a className="button-purpule-large__link">применить</a>
      </span>
    </div>
  </aside>
);

export default AsideFilters;
