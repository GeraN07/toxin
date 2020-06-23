$('.like__btn1').on('click', function(){
    // Check if it's already been clicked
    if (!$(this).hasClass('liked')) {
      // Update the number
      updated_likes = parseInt($('.like__btn1 span').html()) + 1;
      $('.like__btn1 span').html(updated_likes);
      $(this).addClass('liked');
     }
     else if ($(this).hasClass('liked')) {
        // Update the number
        updated_likes = parseInt($('.like__btn1 span').html()) - 1;
        $('.like__btn1 span').html(updated_likes);
        $(this).removeClass('liked');
       }
  });
$('.like__btn2').on('click', function(){
    // Check if it's already been clicked
    if (!$(this).hasClass('liked')) {
      // Update the number
      updated_likes = parseInt($('.like__btn2 span').html()) + 1;
      $('.like__btn2 span').html(updated_likes);
      $(this).addClass('liked');
     }
     else if ($(this).hasClass('liked')) {
        // Update the number
        updated_likes = parseInt($('.like__btn2 span').html()) - 1;
        $('.like__btn2 span').html(updated_likes);
        $(this).removeClass('liked');
       }
  });