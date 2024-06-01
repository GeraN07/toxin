import './bullet-list.css';

const BulletList = () => (
  <ul className="bullet-list">
    <li className="bullet-list__item">
      <p className="bullet-list__text">Нельзя с питомцами</p>
    </li>
    <li className="bullet-list__item">
      <p className="bullet-list__text">Без вечеринок и мероприятий</p>
    </li>
    <li className="bullet-list__item">
      <p className="bullet-list__text">
          Время прибытия — после 13:00, а выезд до 12:00
      </p>
    </li>
  </ul>
);

export default BulletList;
