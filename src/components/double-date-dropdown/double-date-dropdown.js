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
