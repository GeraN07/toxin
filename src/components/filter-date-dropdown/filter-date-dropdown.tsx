import useCallendar from '../../hooks/use-callendar';
import { useState, useEffect, useRef } from 'react';
import './filter-date-dropdown.css';


const FilterDateDropdown = () => {
  const calRef = useRef(null);
  const calBlockRef = useRef(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  useEffect(() => {
    const handleCalendarClose = (event) => {
      const cal = document.querySelector('.air-datepicker');
      if (
        calBlockRef.current &&
        !calBlockRef.current.contains(event.target) &&
        !cal.contains(event.target)
      ) {
        setCalendarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleCalendarClose);

    return () => {
      document.removeEventListener('mousedown', handleCalendarClose);
    };
  }, []);

  const handleCalendarToggle = () => {
    setCalendarOpen(!calendarOpen);
  };
  useEffect(() => {
    if (calBlockRef.current) {
      if (calendarOpen) {
        calBlockRef.current.classList.add('datepicker-activated');
      } else {
        calBlockRef.current.classList.remove('datepicker-activated');
      }
    }
  }, [calendarOpen]);
  useCallendar(calRef);
  return (
    <div className="filter-date-dropdown-block" ref={calBlockRef}>
      <div className="filter-date-dropdown-block__filter-date-dropdown-header">
        <h3 className="filter-date-dropdown-block__filte-date-dropdown-title">
          Даты пребывания в отеле
        </h3>
      </div>
      <input
        className="datepicker-here filter-date-dropdown"
        type="text"
        data-range="true"
        data-multiple-dates-separator=" - "
        id="date_range"
        readOnly
        ref={calRef}
        placeholder="Выберите даты пребывания"
        onClick={handleCalendarToggle}
      />
    </div>
  );
};

export default FilterDateDropdown;
