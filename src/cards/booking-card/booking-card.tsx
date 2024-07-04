import { useState } from 'react';
import DoubleDateDropdown from '../../components/double-date-dropdown/double-date-dropdown';
import Dropdown from '../../components/dropdown-qty/dropdown-qty';
import './booking-card.css';
type BookingCardProps = {
  price: number;
};

const BookingCard = ({ price }: BookingCardProps) => {
  const [totalDays, setTotalDays] = useState(0);
  const handleDatesChange = (days: number) => {
    setTotalDays(days);
  };

  return (
    <div className="booking-card">
      <div className="booking-card__header">
        <h1 className="booking-card__title">
          <span className="booking-card__number">№ </span> 888{' '}
          <span className="booking-card__lux">люкс</span>
        </h1>
        <p className="booking-card__dayprice">
          `{price}₽` <span className="booking-card__day">в сутки</span>
        </p>
      </div>
      <DoubleDateDropdown
        firstTitle="ПРИБЫТИЕ"
        secondTitle="ВЫЕЗД"
        onDatesChange={handleDatesChange}
      />
      <Dropdown option={'guest'} />
      <div className="booking-card__first-sum price-line">
        <p className="booking-card__text">
          `{price} ₽` х <span id="totalDayscount">{totalDays}</span>{' '}
          <span id="daysName">суток</span>
        </p>
        <p className="booking-card__text">
          <span id="preAmount">{price * totalDays}</span>₽
        </p>
      </div>
      <div className="booking-card__service-charge price-line">
        <p className="booking-card__text text-info">
          Сбор за услуги: скидка 2 179₽{' '}
        </p>
        <p className="booking-card__text">0₽</p>
      </div>
      <div className="booking-card__additional-sum price-line">
        <p className="booking-card__text text-info">
          Сбор за дополнительные
          <br /> услуги{' '}
        </p>
        <p className="booking-card__text">300₽</p>
      </div>
      <div className="booking-card__total-sum price-line">
        <p className="booking-card__total-text">Итого</p>
        <div className="booking-card__doted-block" />
        <p className="booking-card__total-text booking-card__total-price">
          <span id="totalAmount">{price * totalDays + 300}</span>₽
        </p>
      </div>
      <span className="button-purpule-large">
        <a className="button-purpule-large__link">забронировать</a>
      </span>
    </div>
  );
};

export default BookingCard;
