$(".first-date").datepicker({ 
  clearButton:true,
  submitButton:true,
  onSelect: function (fd, d, picker) { 
    $(".first-date").val(fd.split("-")[0]);
    $(".second-date").val(fd.split("-")[1]);
  },
});

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
  var block = $(".date-1");
  var block1 = $(".datepickers-container");
  if (!block.is(e.target) 
      && block.has(e.target).length === 0 && !block1.is(e.target) && block1.has(e.target).length === 0 ) {
      block.removeClass('datepicker-activated');;
  }
});
$(document).mouseup(function (e){
  var block = $(".date-2");
  var block1 = $(".datepickers-container");
  if (!block.is(e.target) 
      && block.has(e.target).length === 0 && !block1.is(e.target) && block1.has(e.target).length === 0 ) {
      block.removeClass('datepicker-activated');;
  }
});