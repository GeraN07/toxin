import useDropdownPlugin from '../../hooks/use-dropdown';
import './dropdown-qty.css';
import { useRef } from 'react';

type DropdownQtyProps = {
  options: string;
  h3: string;
  p?: string;
  widthClass?: string;
};

const DropdownQty = ({ options, h3, p, widthClass }: DropdownQtyProps) => {
  const pluginRef = useRef(null);

  let dropdownSizeClass = '';

  if (options === 'guests') {
    dropdownSizeClass = 'dropdown-guests';
  } else if (options === 'rooms') {
    dropdownSizeClass = 'dropdown-rooms';
  } else if (options === 'empty') {
    dropdownSizeClass = 'iqdropdown_empty';
  }

  let dropdownContent;
  if (dropdownSizeClass === 'dropdown-guests') {
    dropdownContent = (
      <div ref={pluginRef} className={'custom iqdropdown'}>
        <p className="iqdropdown-selection"></p>
        <div className="iqdropdown-menu">
          <div className="iqdropdown-menu-option" data-id="adult">
            <div className="iqdropdown__wrapper">
              <p className="iqdropdown-item">Взрослые</p>
            </div>
          </div>
          <div className="iqdropdown-menu-option" data-id="child">
            <div className="iqdropdown__wrapper">
              <p className="iqdropdown-item">Дети</p>
            </div>
          </div>
          <div className="iqdropdown-menu-option" data-id="infant">
            <div className="iqdropdown__wrapper">
              <p className="iqdropdown-item">Младенцы</p>
            </div>
          </div>
          <div className="iqdropdown__footer">
            <span className="iqdropdown__erase-button button-hidden">
              Очистить
            </span>
            <span className="iqdropdown__apply-button">Применить</span>
          </div>
        </div>
      </div>
    );
  } else if (dropdownSizeClass === 'dropdown-rooms') {
    dropdownContent = (
      <div ref={pluginRef} className={'custom-message iqdropdown'}>
        <p className="iqdropdown-selection"></p>
        <div className="iqdropdown-menu">
          <div className="iqdropdown-menu-option" data-id="bedroom">
            <div className="iqdropdown__wrapper">
              <p className="iqdropdown-item">Спальни</p>
            </div>
          </div>
          <div className="iqdropdown-menu-option" data-id="bed">
            <div className="iqdropdown__wrapper">
              <p className="iqdropdown-item">Кровати</p>
            </div>
          </div>
          <div className="iqdropdown-menu-option" data-id="bathroom">
            <div className="iqdropdown__wrapper">
              <p className="iqdropdown-item">Ванные комнаты</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (dropdownSizeClass === 'iqdropdown_empty') {
    dropdownContent = (
      <div ref={pluginRef} className={'empty iqdropdown '}>
        <p className="iqdropdown-selection"></p>
      </div>
    );
  }

  useDropdownPlugin(pluginRef);
  return (
    <div className={`dropdown-block ${dropdownSizeClass}`}>
      <div className="dropdown-header">
        <h3 className="dropdown-tile">{h3}</h3>
        <p className="dropdown-p">{p}</p>
      </div>
      {dropdownContent}
    </div>
  );
};

export default DropdownQty;
