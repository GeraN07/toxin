import './expandable-checkbox-list.css';
import { useState } from 'react';

type ExpandableCheckboxListProps = {
  buttonTitle: string;
};

const ExpandableCheckboxList = ({ buttonTitle }: ExpandableCheckboxListProps) => {
  const [checkboxListOpen, setCheckboxlistOpen] = useState(false);

  const handleOpenButtonClick = () => {
    setCheckboxlistOpen(!checkboxListOpen);
  };

  const checkboxes = [
    { id: 'break', label: 'Завтрак' },
    { id: 'table', label: 'Письменный стол' },
    { id: 'chair', label: 'Стул для кормления' },
    { id: 'bed', label: 'Кроватка' },
    { id: 'tv', label: 'Телевизор' },
    { id: 'shower', label: 'Шампунь' },
  ];

  return (
    <div className="expandable-checkbox-list-block">
      <div className={`button-wrapper ${checkboxListOpen ? 'active' : ''}`}>
        <button onClick={handleOpenButtonClick} className="collapsible">
          {buttonTitle}
        </button>
      </div>
      <div className={`expandable-checkbox-buttons ${checkboxListOpen ? 'open' : ''}`}>
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id} className="expandable-checkbox-buttons__checkbox-block">
            <input
              className="expandable-checkbox-buttons__checkbox"
              type="checkbox"
              id={checkbox.id}
            />
            <label
              className="expandable-checkbox-buttons__checkbox-label"
              htmlFor={checkbox.id}
            >
              {checkbox.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableCheckboxList;
