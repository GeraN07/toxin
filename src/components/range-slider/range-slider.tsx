import { useRef } from 'react';
import './range-slider.css';
import IonRangeSlider from 'react-ion-slider';

type RangeSliderProps = {
  h3: string;
};

const RangeSlider = ({ h3 }: RangeSliderProps) => {
  const minValRef = useRef<HTMLSpanElement>(null);
  const lastValRef = useRef<HTMLSpanElement>(null);
  const sliderRef = useRef(null);

  const formatNumber = (num: number) => num.toLocaleString('ru-RU');

  const handleValueChange = (data) => {
    if (minValRef.current) {
      minValRef.current.textContent = formatNumber(data.from);
    }
    if (lastValRef.current) {
      lastValRef.current.textContent = formatNumber(data.to);
    }
  };

  return (
    <div className="range-slider">
      <div className="range-slider__header">
        <h3 className="range-slider__title">{h3}</h3>
        <p className="range-slider-value">
          <span className="sliderValue1" ref={minValRef}>
            {formatNumber(5000)}
          </span>
          ₽ -{' '}
          <span className="sliderValue2" ref={lastValRef}>
            {formatNumber(10000)}
          </span>
          ₽
        </p>
      </div>
      <IonRangeSlider
        type={'double'}
        skin={'round'}
        min={0}
        max={16000}
        from={5000}
        to={10000}
        step={1}
        ref={sliderRef}
        grid={false}
        hide_min_max
        hide_from_to
        onChange={handleValueChange}
      />
      <p className="range-slider__text">
        Стоимость за сутки пребывания в номере
      </p>
    </div>
  );
};

export default RangeSlider;
