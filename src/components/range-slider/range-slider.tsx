import { useRef, useEffect, useState, useCallback } from 'react';
import { memo } from 'react';
import './range-slider.css';
import IonRangeSlider from 'react-ion-slider';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPrice, setMinPrice, setSortedRooms } from '../../store/action';

type RangeSliderProps = {
  h3: string;
};

const RangeSlider = ({ h3 }: RangeSliderProps) => {
  const minValRef = useRef<HTMLSpanElement>(null);
  const lastValRef = useRef<HTMLSpanElement>(null);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  // Получаем значения из селекторов один раз при первой загрузке компонента
  const minPrice = useSelector(
    (state: { rooms: Rooms }) => state.filter.minPrice
  );
  const maxPrice = useSelector(
    (state: { rooms: Rooms }) => state.filter.maxPrice
  );

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.update({
        from: minPrice,
        to: maxPrice,
      });
    }
  }, []);

  const formatNumber = useCallback(
    (num: number) => num.toLocaleString('ru-RU'),
    []
  );

  const handleValueChange = useCallback(
    (data) => {
      if (minValRef.current) {
        minValRef.current.textContent = formatNumber(data.from);
      }
      if (lastValRef.current) {
        lastValRef.current.textContent = formatNumber(data.to);
      }
    },
    [dispatch, formatNumber]
  );

  const handleValueSet = useCallback(
    (data) => {
      dispatch(setMinPrice(data.from));
      dispatch(setMaxPrice(data.to));
      dispatch(setSortedRooms());
    },
    [dispatch, formatNumber]
  );

  return (
    <div className="range-slider">
      <div className="range-slider__header">
        <h3 className="range-slider__title">{h3}</h3>
        <p className="range-slider-value">
          <span className="sliderValue1" ref={minValRef}>
            {formatNumber(minPrice)}
          </span>
          ₽ -{' '}
          <span className="sliderValue2" ref={lastValRef}>
            {formatNumber(maxPrice)}
          </span>
          ₽
        </p>
      </div>
      <IonRangeSlider
        type={'double'}
        skin={'round'}
        min={0}
        max={16000}
        from={minPrice}
        to={maxPrice}
        step={500}
        ref={sliderRef}
        grid={false}
        hide_min_max
        hide_from_to
        onChange={handleValueChange}
        onFinish={handleValueSet}
      />
      <p className="range-slider__text">
        Стоимость за сутки пребывания в номере
      </p>
    </div>
  );
};

export default memo(RangeSlider);
