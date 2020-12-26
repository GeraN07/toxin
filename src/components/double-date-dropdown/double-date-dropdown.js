$(".first-date").datepicker({ 
  clearButton:true,
  submitButton:true,
  minDate: new Date(),
  onSelect: function (fd, d, picker) { 
    $(".first-date").val(fd.split("-")[0]);
    $(".second-date").val(fd.split("-")[1]);
    let date1 = new Date(d[0]);
    let date2 = new Date(d[1]);
    let daysTotal = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    if(daysTotal >= 0 && document.getElementById("totalDayscount")){
    document.getElementById("totalDayscount").innerHTML = daysTotal
    document.getElementById("preAmount").innerHTML = (daysTotal * 9990).toLocaleString()
    document.getElementById("totalAmount").innerHTML = (daysTotal * 9990 - 2179 + 300).toLocaleString()
    if (daysTotal == 1 || daysTotal == 21 || daysTotal == 31 || daysTotal == 41 || daysTotal == 51 || daysTotal == 61){
      document.getElementById("daysName").innerHTML = "сутки"
    }
    if (daysTotal != 1 && daysTotal != 21 && daysTotal != 31 && daysTotal != 41 && daysTotal != 51 && daysTotal != 61){
      document.getElementById("daysName").innerHTML = "суток"
    }
  }
  },
  
});
$(".datepicker--button:first-child").click(function() {
  document.getElementById("totalDayscount").innerHTML = 0
  document.getElementById("preAmount").innerHTML = 0
  document.getElementById("totalAmount").innerHTML = 0
})
$(".dates").click(function() {
  $(".first-date").focus()
})
// $(".first-date").focus(function(){
//   $(this).parent().toggleClass("datepicker-activated")
// })
$(".first-date").click(function() {
  $(this).parent().toggleClass("datepicker-activated")
});
$(".second-date").click(function() {
  $(this).parent().toggleClass("datepicker-activated")
});

$(document).mouseup(function (e){
  var block = $(".double-date-dropdown-block__date-1");
  var block1 = $(".datepickers-container");
  if (!block.is(e.target) 
      && block.has(e.target).length === 0 && !block1.is(e.target) && block1.has(e.target).length === 0 ) {
      block.removeClass('datepicker-activated');;
  }
});
$(document).mouseup(function (e){
  var block = $(".double-date-dropdown-block__date-2");
  var block1 = $(".datepickers-container");
  if (!block.is(e.target) 
      && block.has(e.target).length === 0 && !block1.is(e.target) && block1.has(e.target).length === 0 ) {
      block.removeClass('datepicker-activated');;
  }
});
