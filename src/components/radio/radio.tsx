import './radio.css';


const Radio = () => (
  <div className="radio">
    <h3 className="radio__title" />
    <div className="radio__block">
      <div className="radio__button">
        <input
          className="radio__input"
          type="radio"
          name="sex"
          defaultValue="man"
          id="man"
          defaultChecked
        />
        <label className="radio__label" htmlFor="man">
          <p className="radio__label-text">Мужчина</p>
        </label>
      </div>
      <div className="radio__button">
        <input
          className="radio__input"
          type="radio"
          name="sex"
          defaultValue="woman"
          id="woman"
        />
        <label className="radio__label" htmlFor="woman">
          <p className="radio__label-text">Женщина</p>
        </label>
      </div>
    </div>
  </div>
);

export default Radio;
