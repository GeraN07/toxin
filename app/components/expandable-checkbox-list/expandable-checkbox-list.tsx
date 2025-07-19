import './expandable-checkbox-list.css';
import { useState } from 'react';
import {
  setBabyBed,
  setBreakfast,
  setHchair,
  setShampoo,
  setSortedRooms,
  setTable,
  setTv,
} from '../../store/action';
import { useSelector } from 'react-redux';
import {
  getBedStatus,
  getBreakfastStatus,
  getChairStatus,
  getShowerStatus,
  getTableStatus,
  getTvStatus,
} from '../../store/selectors';
import { useAppDispatch } from '../../hooks';

type ExpandableCheckboxListProps = {
  buttonTitle: string;
};

const ExpandableCheckboxList = ({
  buttonTitle,
}: ExpandableCheckboxListProps) => {
  const [checkboxListOpen, setCheckboxlistOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleInputChange = (actionCreator: (checked: boolean) => { type: string; payload: boolean }) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(actionCreator(event.target.checked));
      dispatch(setSortedRooms());
    };
  const handleOpenButtonClick = () => {
    setCheckboxlistOpen(!checkboxListOpen);
  };

  const breakfastStatus = useSelector(getBreakfastStatus);
  const tableStatus = useSelector(getTableStatus);

  const chairStatus = useSelector(getChairStatus);
  const bedStatus = useSelector(getBedStatus);

  const tvStatus = useSelector(getTvStatus);
  const showerStatus = useSelector(getShowerStatus);

  const checkboxes = [
    {
      id: 'break',
      label: 'Завтрак',
      action: setBreakfast,
      data: breakfastStatus,
    },
    {
      id: 'table',
      label: 'Письменный стол',
      action: setTable,
      data: tableStatus,
    },
    {
      id: 'chair',
      label: 'Стул для кормления',
      action: setHchair,
      data: chairStatus,
    },
    { id: 'bed', label: 'Кроватка', action: setBabyBed, data: bedStatus },
    { id: 'tv', label: 'Телевизор', action: setTv, data: tvStatus },
    { id: 'shower', label: 'Шампунь', action: setShampoo, data: showerStatus },
  ];

  return (
    <div className="expandable-checkbox-list-block">
      <div onClick={handleOpenButtonClick} className={`button-wrapper ${checkboxListOpen ? 'active' : ''}`}>
        <button className="collapsible">
          {buttonTitle}
        </button>
      </div>
      <div
        className={`expandable-checkbox-buttons ${
          checkboxListOpen ? 'open' : ''
        }`}
      >
        {checkboxes.map((checkbox) => {
          if (checkbox.data && !checkboxListOpen) {
            setCheckboxlistOpen(true);
          }
          return (
            <div
              key={checkbox.id}
              className="expandable-checkbox-buttons__checkbox-block"
            >
              <input
                className="expandable-checkbox-buttons__checkbox"
                type="checkbox"
                id={checkbox.id}
                onChange={handleInputChange(checkbox.action)}
                checked={checkbox.data}
              />
              <label
                className="expandable-checkbox-buttons__checkbox-label"
                htmlFor={checkbox.id}
              >
                {checkbox.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandableCheckboxList;
