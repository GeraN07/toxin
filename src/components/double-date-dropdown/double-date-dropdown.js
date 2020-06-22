$('#start_one').datepicker({ 
    minDate: new Date(),
    onSelect: function (fd, d, picker) { 
      $("#start_one").val(fd.split("-")[0]);
      $("#end_one").val(fd.split("-")[1]);
    },
  });
$( '#end_one' ).click(function() {
    $('#start_one').focus()
  })