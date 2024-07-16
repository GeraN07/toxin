import { useRef, useEffect, useCallback, forwardRef } from 'react';
import { memo } from 'react';
import './range-slider.css';
import IonRangeSlider, { IonRangeSliderProps } from 'react-ion-slider';
import { useSelector } from 'react-redux';
import { setMaxPrice, setMinPrice, setSortedRooms } from '../../store/action';
import { getMaxPrice, getMinPrice } from '../../store/selectors';
import { useAppDispatch } from '../../hooks';

type RangeSliderProps = {
  h3: string;
};

interface IonRangeSliderInstance extends IonRangeSlider {
  update: (options: IonRangeSliderProps) => void;
}

const RangeSlider = forwardRef<IonRangeSliderInstance, RangeSliderProps>(
  ({ h3 }) => {
    const minValRef = useRef<HTMLSpanElement>(null);
    const lastValRef = useRef<HTMLSpanElement>(null);
    const sliderRef = useRef<IonRangeSliderInstance>(null);
    const dispatch = useAppDispatch();
    const minPrice = useSelector(getMinPrice);
    const maxPrice = useSelector(getMaxPrice);

    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.update({
          from: minPrice,
          to: maxPrice,
        });
      }
    }, [minPrice, maxPrice]);

    const formatNumber = useCallback(
      (num: number) => num.toLocaleString('ru-RU'),
      []
    );

    const handleValueChange = useCallback(
      (data: { from: number; to: number }) => {
        if (minValRef.current) {
          minValRef.current.textContent = formatNumber(data.from);
        }
        if (lastValRef.current) {
          lastValRef.current.textContent = formatNumber(data.to);
        }
      },
      [formatNumber]
    );

    const handleValueSet = useCallback(
      (data: { from: number; to: number }) => {
        if (data.from !== minPrice || data.to !== maxPrice) {
          dispatch(setMinPrice(data.from));
          dispatch(setMaxPrice(data.to));
          dispatch(setSortedRooms());
        }
      },
      [dispatch, minPrice, maxPrice]
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
  }
);

RangeSlider.displayName = 'RangeSlider';

const MemoizedRangeSlider = memo(RangeSlider);

export default MemoizedRangeSlider;
