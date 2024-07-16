import { useEffect, MutableRefObject, useRef } from 'react';
import { setDatesRange, setSortedRooms } from '../store/action';
import AirDatepicker from 'air-datepicker';
import { useSelector } from 'react-redux';
import { getDates } from '../store/selectors';
import { useAppDispatch } from '.';
import { toast } from 'react-toastify';

const useCallendar = (
  calFirstRef: MutableRefObject<HTMLInputElement | null>,
  calLastRef?: MutableRefObject<HTMLInputElement | null>,
  onDatesChange?: (days: number) => void
) => {
  const isRenderedRef = useRef<boolean>(false);
  const dispatch = useAppDispatch();
  const dates = useSelector(getDates);

  // Сохраняем предыдущие значения дат
  const prevDates = useRef<string[]>([]);

  useEffect(() => {
    if (calFirstRef.current && !isRenderedRef.current) {
      const dp = new AirDatepicker(calFirstRef.current, {
        range: true,
        buttons: [
          {
            content: 'очистить',
            className: 'custom-button-clear',
            onClick: () => {
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
            onClick: () => {
              const oldDates = dp.selectedDates;
              if (oldDates[0] === undefined || oldDates[1] === undefined) {
                toast.error('Выберите даты для применения');
                return;
              }
              const newDates = [
                new Date(oldDates[0]),
                new Date(oldDates[1]),
              ].map((date) => date.toISOString());

              if (
                newDates.length === 2 &&
                (newDates[0] !== prevDates.current[0] ||
                  newDates[1] !== prevDates.current[1])
              ) {
                dispatch(setDatesRange(newDates));
                dispatch(setSortedRooms());
                dp.hide();

                prevDates.current = newDates;
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

          if (calFirstRef.current) {
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

      if (dates[0] && dates[1]) {
        const datesData = [new Date(dates[0]), new Date(dates[1])];
        dp.selectDate(datesData);

        // Инициализируем prevDates текущими значениями
        prevDates.current = datesData.map((date) => date.toISOString());
      }

      isRenderedRef.current = true;
    }
  }, [calFirstRef, calLastRef, onDatesChange, dispatch, dates]);

  return null;
};

export default useCallendar;
