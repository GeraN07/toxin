import 'air-datepicker/air-datepicker.css';
import './double-date-dropdown.css';
import useCallendar from '../../hooks/use-callendar';
import { useRef } from 'react';

type DoubleDateDropdownProps = {
  firstTitle?: string;
  secondTitle?: string;
  onDatesChange?: (days: number) => void;
  availableDates: string[];
};

const DoubleDateDropdown = ({
  firstTitle = '',
  secondTitle = '',
  onDatesChange,
  availableDates
}: DoubleDateDropdownProps) => {
  const calFirstRef = useRef<HTMLInputElement | null>(null);
  const calLastRef = useRef<HTMLInputElement | null>(null);
  const handleSecondInputClick = () => {
    if (calFirstRef.current) {
      calFirstRef.current.focus();
    }
  };
  useCallendar(calFirstRef, calLastRef, onDatesChange, availableDates);

  return (
    <div className="double-date-dropdown-block">
      <div className="double-date-dropdown-block__date-1">
        <h3 className="double-date-dropdown-block__title-1">{firstTitle}</h3>
        <input
          className="double-date-dropdown-block__input1 dates first-date"
          readOnly
          data-date-format="dd.mm.yyyy"
          type="text"
          id="start_one"
          data-range="true"
          data-multiple-dates-separator=" - "
          ref={calFirstRef}
          placeholder="ДД.ММ.ГГГГ"
        />
      </div>
      <div className="double-date-dropdown-block__date-2">
        <h3 className="double-date-dropdown-block__title-2">{secondTitle}</h3>
        <input
          className="double-date-dropdown-block__input2 dates second-date"
          readOnly
          type="text"
          id="end_one"
          ref={calLastRef}
          placeholder="ДД.ММ.ГГГГ"
          onClick={handleSecondInputClick}
        />
      </div>
    </div>
  );
};

export default DoubleDateDropdown;
