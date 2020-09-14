$('#date_range').datepicker({ 
    minDate: new Date(),
    dateFormat: 'dd M'
    
    // onSelect: function (fd, d, picker) { 
    //   $("#start_one").val(fd.split("-")[0]);
    //   $("#end_one").val(fd.split("-")[1]);
    // },
  });
//   $.fn.datepicker.language['ru'] =  {
//     days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
//     daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
//     daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
//     months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
//     monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
//     dateFormat: 'dd M',
//     timeFormat: 'hh:ii',
//     firstDay: 1
// };
$(".filte-date-dropdown").click(function() {
  $(this).parent().toggleClass("datepicker-activated")
});
$(document).mouseup(function (e){
  var block = $(".filter-date-dropdown-block");
  var block1 = $(".datepickers-container");
  if (!block.is(e.target) 
      && block.has(e.target).length === 0 && !block1.is(e.target) && block1.has(e.target).length === 0 ) {
      block.removeClass('datepicker-activated');;
  }
});
// $(".filte-date-dropdown").click().parent().addClass("datepicker-activated")