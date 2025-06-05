import { useEffect, MutableRefObject, useRef, useMemo } from 'react';
import { setDatesRange, setSortedRooms } from '../store/action';
import AirDatepicker from 'air-datepicker';
import { useSelector } from 'react-redux';
import { getDates } from '../store/selectors';
import { useAppDispatch } from '.';
import { toast } from 'react-toastify';

const useCallendar = (
  calFirstRef: MutableRefObject<HTMLInputElement | null>,
  calLastRef?: MutableRefObject<HTMLInputElement | null>,
  onDatesChange?: (days: number) => void,
  availableDates: string[] = []
) => {
  const isRenderedRef = useRef(false);
  const dispatch = useAppDispatch();
  const dates = useSelector(getDates);
  const prevDates = useRef<string[]>([]);

  const [startAvailableDate, endAvailableDate] = useMemo(() => {
    const dateObjs = availableDates.map((date) => {
      const d = new Date(date);
      d.setHours(12, 0, 0, 0);
      return d;
    });

    return [
      dateObjs[0] || new Date(),
      dateObjs[dateObjs.length - 1] || new Date(),
    ];
  }, [availableDates]);

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
              onDatesChange?.(0);
            },
          },
          {
            content: 'применить',
            className: 'custom-button-submit',
            onClick: () => {
              const selected = dp.selectedDates;
              if (selected.length < 2) {
                toast.error('Выберите даты для применения');
                return;
              }

              const newDates = selected.map((d) => new Date(d).toISOString());

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
            if (calLastRef?.current) {
              calFirstRef.current.value = dp.formatDate(startDate, formatFirst);
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

          if (onDatesChange && date.length === 2) {
            const diffDays = Math.ceil(
              Math.abs(endDate.getTime() - startDate.getTime()) /
                (1000 * 60 * 60 * 24)
            );
            onDatesChange(diffDays);
          }
        },
        onRenderCell({ date, cellType }) {
          if (cellType === 'day' && availableDates.length > 0) {
            date.setHours(12, 0, 0, 0);
            const normalized = new Date(date.toISOString().split('T')[0]);
            normalized.setHours(12, 0, 0, 0);
            if (
              normalized < startAvailableDate ||
              normalized > endAvailableDate
            ) {
              return { disabled: true };
            }
          }
          return {};
        },
      });

      if (dates[0] && dates[1] && availableDates.length === 0) {
        const preselect = [new Date(dates[0]), new Date(dates[1])];
        dp.selectDate(preselect);
        prevDates.current = preselect.map((d) => d.toISOString());
      }

      isRenderedRef.current = true;
    }
  }, [
    calFirstRef,
    calLastRef,
    onDatesChange,
    dispatch,
    dates,
    startAvailableDate,
    endAvailableDate,
    availableDates,
  ]);

  return null;
};

export default useCallendar;
