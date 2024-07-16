// Dropdown.tsx

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import useDropdown from '../../hooks/use-dropdown';
import './item-quantity-dropdown.min.css';
import './dropdown-qty.css';
import { dropdownOptions } from '../../const';
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
import { useAppDispatch } from '../../hooks';
import {
  getBathRooms,
  getBedrooms,
  getBeds,
  getTotalGuests,
} from '../../store/selectors';

type DropdownProps = {
  option: string;
};

const Dropdown = ({ option }: DropdownProps) => {
  const options =
    option === 'rooms' ? dropdownOptions['rooms'] : dropdownOptions['guest'];
  const {
    itemCount,
    totalItems,
    selectionText,
    handleDecrement,
    handleIncrement,
    resetCounts,
    hasSelection,
  } = useDropdown(options);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  const maxGuests = useSelector(getTotalGuests);
  const bedrooms = useSelector(getBedrooms);
  const beds = useSelector(getBeds);
  const bathRooms = useSelector(getBathRooms);

  const handleSubmitButtonClick = useCallback(() => {
    let bedroomsChanged = false;
    let bedsChanged = false;
    let bathRoomsChanged = false;

    if (option === 'rooms') {
      if (bedrooms !== itemCount.bedrooms) {
        dispatch(setBedrooms(itemCount.bedrooms || 0));
        bedroomsChanged = true;
      }
      if (beds !== itemCount.beds) {
        dispatch(setBeds(itemCount.beds || 0));
        bedsChanged = true;
      }
      if (bathRooms !== itemCount.bathrooms) {
        dispatch(setBathrooms(itemCount.bathrooms || 0));
        bathRoomsChanged = true;
      }
    } else {
      dispatch(setAdultCount(itemCount.adult || 0));
      dispatch(setChildCount(itemCount.child || 0));
      dispatch(setInfantCount(itemCount.infant || 0));
      dispatch(setMaxGuests(totalItems));
    }
    if (
      (option !== 'rooms' && maxGuests !== totalItems) ||
      bedroomsChanged ||
      bedsChanged ||
      bathRoomsChanged
    ) {
      dispatch(setSortedRooms());
    }
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
    resetCounts();
  }, [dispatch, resetCounts, option]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const hasAdult = itemCount.adult && itemCount.adult > 0;
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

const NamedDropdown = React.memo(Dropdown);
export default NamedDropdown;
