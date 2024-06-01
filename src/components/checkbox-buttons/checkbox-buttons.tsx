import './checkbox-buttons.css';

type CheckboxButtonsProps = {
  h3: string;
};

const CheckboxButtons = ({ h3 }: CheckboxButtonsProps) => (
  <div className="checkbox-buttons">
    <h3 className="checkbox-buttons__title">{h3}</h3>
    <div className="checkbox-buttons__checkbox-block">
      <input
        className="checkbox-buttons__checkbox-input"
        type="checkbox"
        id="smoke"
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
        defaultChecked="checked"
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
        defaultChecked="checked"
      />
      <label className="checkbox-buttons__checkbox-label" htmlFor="invite">
        <p className="checkbox-buttons__checkbox-text">
            Можно пригласить гостей (до 10 человек)
        </p>
      </label>
    </div>
  </div>
);

export default CheckboxButtons;
