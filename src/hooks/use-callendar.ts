import { useEffect, MutableRefObject, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setDatesRange, setSortedRooms } from '../store/action';
import AirDatepicker from 'air-datepicker';
import { useSelector } from 'react-redux';


const useCallendar = (
  calFirstRef: MutableRefObject<HTMLInputElement | null>,
  calLastRef?: MutableRefObject<HTMLInputElement | null>,
  onDatesChange?: (days: number) => void
) => {
  const isRenderedRef = useRef<boolean>(false);
  const dispatch = useDispatch(); // Переносим useDispatch сюда
  const dates = useSelector(
    (state: { dates: Date[] }) => state.filter.datesRange
  );

  useEffect(() => {
    if (calFirstRef.current && !isRenderedRef.current) {
      const dp = new AirDatepicker(calFirstRef.current, {
        range: true,
        buttons: [
          {
            content: 'очистить',
            className: 'custom-button-clear',
            onClick: (dp) => {
              dp.clear();
              if (calFirstRef.current) {
                calFirstRef.current.value = '';
              }
              if (calLastRef?.current) {
                calLastRef.current.value = '';
              }
              if (onDatesChange) {
                onDatesChange(0);
              }
            },
          },
          {
            content: 'применить',
            className: 'custom-button-submit',
            onClick: (dp) => {
              const dates = dp.selectedDates;
              if (dates.length === 2) {
                dispatch(setDatesRange(dates)); // Используем dispatch здесь
                dispatch(setSortedRooms());
                dp.hide();
              }
            },
          },
        ],
        minDate: new Date(),
        onSelect({ date }) {
          if (!Array.isArray(date) || date.length === 0) {
            return;
          }
          const [startDate, endDate] = date;
          const formatFirst = 'd.MM.yyyy';
          const formatRange = 'd MMMM';

          calFirstRef.current.value = dp.formatDate(startDate, formatFirst);
          if (calLastRef?.current) {
            calLastRef.current.value =
              date.length === 2 ? dp.formatDate(endDate, formatFirst) : '';
          } else {
            calFirstRef.current.value =
              date.length === 2
                ? `${dp.formatDate(startDate, formatRange)} - ${dp.formatDate(
                    endDate,
                    formatRange
                  )}`
                : dp.formatDate(startDate, formatRange);
          }

          if (onDatesChange) {
            const diffDays =
              date.length === 2
                ? Math.ceil(
                    Math.abs(endDate.getTime() - startDate.getTime()) /
                      (1000 * 60 * 60 * 24)
                  )
                : 0;
            onDatesChange(diffDays);
          }
        },
      });
      const lastDefaultDate = new Date('2050-12-17T03:24:00');
      if (dates[1].getTime() !== lastDefaultDate.getTime()) {
        dp.selectDate(dates);
      }

      isRenderedRef.current = true;
    }
  }, [calFirstRef, calLastRef, onDatesChange, dispatch]);

  return null;
};

export default useCallendar;
