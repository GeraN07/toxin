import './rich-checkbox-buttons.css';

type RichCheckboxButtonsProps = {
  h3: string;
};

const RichCheckboxButtons = ({ h3 }: RichCheckboxButtonsProps) => (
  <div className="rich-checkbox-buttons-block">
    <h3 className="rich-checkbox-buttons-block__title">{h3}</h3>
    <div className="rich-checkbox-buttons-block__rich-checkbox">
      <input
        className="rich-checkbox-buttons-block__checkbox-input"
        type="checkbox"
        id="wide"
      />
      <label
        className="rich-checkbox-buttons-block__checkbox-label"
        htmlFor="wide"
      >
        <div className="rich-checkbox-buttons-block__checkbox-text-block">
          <h4 className="rich-checkbox-buttons-block__checkbox-text-block-title">
              Широкий коридор
          </h4>
          <p className="rich-checkbox-buttons-block__checkbox-text-block-text wide-text">
              Ширина коридоров в номере не менее 91 см.
          </p>
        </div>
      </label>
    </div>
    <div className="rich-checkbox-buttons-block__rich-checkbox">
      <input
        className="rich-checkbox-buttons-block__checkbox-input"
        type="checkbox"
        id="helper"
      />
      <label
        className="rich-checkbox-buttons-block__checkbox-label"
        htmlFor="helper"
      >
        <div className="rich-checkbox-buttons-block__checkbox-text-block">
          <h4 className="rich-checkbox-buttons-block__checkbox-text-block-title">
              Помощник для инвалидов
          </h4>
          <p className="rich-checkbox-buttons-block__checkbox-text-block-text help-text">
              На 1 этаже вас встретит специалист и проводит до номера.
          </p>
        </div>
      </label>
    </div>
  </div>
);

export default RichCheckboxButtons;
