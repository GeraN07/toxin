import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDropdown from '../../hooks/use-dropdown';
import './item-quantity-dropdown.min.css';
import './dropdown-qty.css';
import {
  setAdultCount,
  setBathrooms,
  setBedrooms,
  setBeds,
  setChildCount,
  setInfantCount,
  setMaxGuests,
  setSortedRooms,
} from '../../store/action';

const dropdownOptions = {
  guest: {
    textPlural: 'Гостей',
    selectionText: 'Гость',
    items: [
      { id: 'adult', label: 'Взрослые', maxCount: 10, minCount: 0 },
      { id: 'child', label: 'Дети', maxCount: 10, minCount: 0 },
      { id: 'infant', label: 'Младенцы', maxCount: 10, minCount: 0 },
    ],
  },
  rooms: {
    textPlural: 'Комнат',
    selectionText: 'Комната',
    items: [
      { id: 'bedrooms', label: 'Спальни', maxCount: 10, minCount: 0 },
      { id: 'beds', label: 'Кровати', maxCount: 10, minCount: 0 },
      { id: 'bathrooms', label: 'Ванные комнаты', maxCount: 10, minCount: 0 },
    ],
  },
};

const Dropdown = ({ option }) => {
  const options = dropdownOptions[option] || dropdownOptions['guest'];
  const {
    itemCount,
    totalItems,
    selectionText,
    handleDecrement,
    handleIncrement,
    resetCounts,
    hasSelection
  } = useDropdown(options);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleSubmitButtonClick = useCallback(() => {
    if (option === 'rooms') {
      dispatch(setBathrooms(itemCount['bathrooms']));
      dispatch(setBedrooms(itemCount['bedrooms']));
      dispatch(setBeds(itemCount['beds']));
    } else {
      dispatch(setAdultCount(itemCount['adult']));
      dispatch(setChildCount(itemCount['child']));
      dispatch(setInfantCount(itemCount['infant']));
      dispatch(setMaxGuests(totalItems));
    }
    dispatch(setSortedRooms());
    setIsOpen(false);
  }, [dispatch, itemCount, totalItems, option]);

  const handleEraseButtonClick = useCallback(() => {
    if (option === 'rooms') {
      dispatch(setBathrooms(0));
      dispatch(setBedrooms(0));
      dispatch(setBeds(0));
    } else {
      dispatch(setMaxGuests(0));
    }
    dispatch(setSortedRooms());
    resetCounts()
  }, [dispatch, itemCount, totalItems, option]);



 
  // if(option=='guest'){
  //   itemCount['adult'] = useSelector(
  //     (state: { dates: Date[] }) => state.filter.bedroomCount
  //   );
  //   itemCount['child'] = useSelector(
  //     (state: { dates: Date[] }) => state.filter.bedsCount
  //   );
  //   itemCount['infant'] = useSelector(
  //     (state: { dates: Date[] }) => state.filter.bathRoomsCount
  //   );
  // }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const hasAdult = itemCount['adult'] > 0;
  const addClass = option === 'rooms' ? 'dropdown-rooms' : 'dropdown-guests';
  const h1 = option === 'rooms' ? 'УДОБСТВА НОМЕРА' : 'Гости';
  const selectedText = option === 'rooms' ? 'Сколько комнат' : 'Сколько гостей';

 
  return (
    <div className={`dropdown-block ${addClass}`}>
      <div className="dropdown-header">
        <h3 className="dropdown-tile">{h1}</h3>
        <p className="dropdown-p"></p>
      </div>
      <div
        ref={dropdownRef}
        className={`iqdropdown custom ${isOpen ? 'menu-open' : ''}`}
      >
        <p className="iqdropdown-selection" onClick={() => setIsOpen(!isOpen)}>
          {hasSelection ? selectionText : selectedText}
        </p>
        {isOpen && (
          <div className="iqdropdown-menu">
            {options.items.map((item) => (
              <div key={item.id} className="iqdropdown-menu-option">
                <div className="iqdropdown__wrapper iqdropdown-content">
                  <p className="iqdropdown-item">{item.label}</p>
                </div>
                <div className="iqdropdown-item-controls">
                  <button
                    className="button-decrement"
                    onClick={() => handleDecrement(item.id)}
                  >
                    <i className="icon-decrement"></i>
                  </button>
                  <span className="counter">{itemCount[item.id] || 0}</span>
                  <button
                    className="button-increment"
                    onClick={() => handleIncrement(item.id)}
                    disabled={
                      (item.id === 'child' || item.id === 'infant') && !hasAdult
                    }
                  >
                    <i className="icon-decrement icon-increment"></i>
                  </button>
                </div>
              </div>
            ))}
            <div className="iqdropdown__footer">
              {hasSelection && (
                <span
                  className="iqdropdown__erase-button"
                  onClick={handleEraseButtonClick}
                >
                  Очистить
                </span>
              )}
              <span
                className="iqdropdown__apply-button"
                onClick={handleSubmitButtonClick}
              >
                Применить
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Dropdown);
