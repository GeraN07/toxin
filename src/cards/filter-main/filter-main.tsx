import { ButtonPurpleLarge } from '../../components/buttons/buttons';
import DoubleDateDropdown from '../../components/double-date-dropdown/double-date-dropdown';
import Dropdown from '../../components/dropdown-qty/dropdown-qty';
import './filter-main.css';

const FilterMain = () => {

  return (
    <div className="filter-main">
      <h1 className="filter-main__title">Найдём номера под ваши пожелания</h1>
      <DoubleDateDropdown firstTitle="ПРИБЫТИЕ" secondTitle="ВЫЕЗД" />
      <Dropdown option={"guest"}/>
      <ButtonPurpleLarge name="подобрать номер" link="/rooms-catalog" />
    </div>
  );
};

export default FilterMain;
