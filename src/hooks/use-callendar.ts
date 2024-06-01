import { useEffect, MutableRefObject, useRef } from 'react';
import AirDatepicker from 'air-datepicker';

const useCallendar = (
  calFirstRef: MutableRefObject<HTMLInputElement | null>,
  calLastRef?: MutableRefObject<HTMLInputElement | null>,
  onDatesChange?: (days: number) => void
) => {
  const isRenderedRef = useRef<boolean>(false);

  const customClearButton = {
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
      } // Сбрасываем количество дней при очистке
    },
  };

  const customSubmitButton = {
    content: 'применить',
    className: 'custom-button-submit',
  };

  useEffect(() => {
    if (calFirstRef.current && !isRenderedRef.current) {
      const dp = new AirDatepicker(calFirstRef.current, {
        range: true,
        buttons: [customClearButton, customSubmitButton],
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
            calLastRef.current.value = date.length === 2 ? dp.formatDate(endDate, formatFirst) : '';
          } else {
            calFirstRef.current.value = date.length === 2 ? `${dp.formatDate(startDate, formatRange)} - ${dp.formatDate(endDate, formatRange)}` : dp.formatDate(startDate, formatRange);
          }

          if (onDatesChange) {
            const diffDays = date.length === 2 ? Math.ceil(Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) : 0;
            onDatesChange(diffDays);
          }
        },
      });

      isRenderedRef.current = true;
    }
  }, [calFirstRef, calLastRef, onDatesChange]);

  return null;
};

export default useCallendar;
