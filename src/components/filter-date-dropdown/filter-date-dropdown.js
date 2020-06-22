$('#date_range').datepicker({ 
    minDate: new Date()
    // onSelect: function (fd, d, picker) { 
    //   $("#start_one").val(fd.split("-")[0]);
    //   $("#end_one").val(fd.split("-")[1]);
    // },
  });
  $.fn.datepicker.language['ru'] =  {
    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dateFormat: 'dd M',
    timeFormat: 'hh:ii',
    firstDay: 1
};