import { ButtonPurpleLarge } from '../../components/buttons/buttons';
import DoubleDateDropdown from '../../components/double-date-dropdown/double-date-dropdown';
import DropdownQty from '../../components/dropdown-qty/dropdown-qty';
import './filter-main.css';

const FilterMain = () => (
  <div className="filter-main">
    <h1 className="filter-main__title">Найдём номера под ваши пожелания</h1>
    <DoubleDateDropdown firstTitle="ПРИБЫТИЕ" secondTitle="ВЫЕЗД" />
    <DropdownQty options={'guests'} h3={'Гости'} />
    <ButtonPurpleLarge name="подобрать номер" link="/rooms-catalog" />
  </div>
);

export default FilterMain;
