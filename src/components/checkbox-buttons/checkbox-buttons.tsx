import { useDispatch } from 'react-redux';
import './checkbox-buttons.css';
import { setGuests, setPet, setSmoking, setSortedRooms } from '../../store/action';
import { useSelector } from 'react-redux';

type CheckboxButtonsProps = {
  h3: string;
};

const CheckboxButtons = ({ h3 }: CheckboxButtonsProps) => {
  const dispatch = useDispatch();
  const handleValueChange = (actionCreator) => (event) => {
    dispatch(actionCreator(event.target.checked));
    dispatch(setSortedRooms())
  };
  const smokingStatus = useSelector(
    (state: { smoking: Boolean }) => state.filter.smoking
  );
  const petStatus = useSelector(
    (state: { pet: Boolean }) => state.filter.pet
  );
  const guestStatus = useSelector(
    (state: { guests: Boolean }) => state.filter.guests
  );
  return (
    <div className="checkbox-buttons">
      <h3 className="checkbox-buttons__title">{h3}</h3>
      <div className="checkbox-buttons__checkbox-block">
        <input
          className="checkbox-buttons__checkbox-input"
          type="checkbox"
          id="smoke"
          onChange={handleValueChange(setSmoking)}
          checked={smokingStatus}
        />
        <label className="checkbox-buttons__checkbox-label" htmlFor="smoke">
          <p className="checkbox-buttons__checkbox-text">Можно курить</p>
        </label>
      </div>
      <div className="checkbox-buttons__checkbox-block">
        <input
          className="checkbox-buttons__checkbox-input"
          type="checkbox"
          id="pet"
          onChange={handleValueChange(setPet)}
          checked={petStatus}
        />
        <label className="checkbox-buttons__checkbox-label" htmlFor="pet">
          <p className="checkbox-buttons__checkbox-text">Можно с питомцами</p>
        </label>
      </div>
      <div className="checkbox-buttons__checkbox-block">
        <input
          className="checkbox-buttons__checkbox-input"
          type="checkbox"
          id="invite"
          onChange={handleValueChange(setGuests)}
          checked={guestStatus}
        />
        <label className="checkbox-buttons__checkbox-label" htmlFor="invite">
          <p className="checkbox-buttons__checkbox-text">
            Можно пригласить гостей (до 10 человек)
          </p>
        </label>
      </div>
    </div>
  );
};

export default CheckboxButtons;
