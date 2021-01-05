//code for refactoring....

// var currentSlide = 0;
// $(document).ready(function(){
//     $('.item-card').hover(
//       function() {
//         $( this ).attr('id', 'slides-active');
//         $( this).find('.slides').attr('id', 'slides');
//         $( this).find('.controls-pre').attr('id', 'previous');
//         $( this).find('.controls-next').attr('id', 'next');
//         $( this).find('.first-slide').attr('id', 'first');
//         $( this).find('.second-slide').attr('id', 'second');
//         $( this).find('.third-slide').attr('id', 'third');
//         $( this).find('.fourth-slide').attr('id', 'fourth');
//      var containers = document.querySelector('#slides-active');
//      var slides = document.querySelectorAll('#slides .slide');
//     //     var controls = document.querySelectorAll('.controls');
//     // for(var i=0; i<controls.length; i++){
//     // controls[i].style.display = 'inline-block';
//     // }

//     function currentSlidePosition(){
//         // var slides = document.querySelectorAll('#slides .slide');
//         var slidesArr = Array.from(slides)
//         // currentSlide=slides[0]
//         // let nodes = document.getElementsByTagName('*');
//         // Array.prototype.indexOf.call(nodes, document.body);
//          function className(i){
//              return i.className =="slide showing"
//          }
//          currentSlide=slidesArr.findIndex(className)
//     }
//     function nextSlide(){
//         currentSlidePosition()
//         goToSlide(currentSlide+1);
//     }

//     function previousSlide(){
//         currentSlidePosition()
//         goToSlide(currentSlide-1);
//     }

//     function goToSlide(n){
//         slides[currentSlide].className = 'slide';
//         currentSlide = (n+slides.length)%slides.length;
//         slides[currentSlide].className = 'slide showing';
//         if(currentSlide==0){
//             $(containers).find('#first').addClass('current-slide');
//             $(containers).find('#second').removeClass('current-slide');
//             $(containers).find('#third').removeClass('current-slide');
//             $(containers).find('#fourth').removeClass('current-slide');
//         }
//         else if(currentSlide==1){
//             $(containers).find('#second').addClass('current-slide');
//             $(containers).find('#first').removeClass('current-slide');
//             $(containers).find('#third').removeClass('current-slide');
//             $(containers).find('#fourth').removeClass('current-slide');
//         }
//         else if(currentSlide==2){
//             $(containers).find('#third').addClass('current-slide');
//             $(containers).find('#first').removeClass('current-slide');
//             $(containers).find('#second').removeClass('current-slide');
//             $(containers).find('#fourth').removeClass('current-slide');
//         }
//         else if(currentSlide==3){
//             $(containers).find('#fourth').addClass('current-slide');
//             $(containers).find('#first').removeClass('current-slide');
//             $(containers).find('#second').removeClass('current-slide');
//             $(containers).find('#third').removeClass('current-slide');
//         }
//     }


//     var playing = true;

//     var next = document.getElementById('next');
//     var previous = document.getElementById('previous');
//     var first = document.getElementById('first');
//     var second = document.getElementById('second');
//     var third = document.getElementById('third');
//     var fourth = document.getElementById('fourth');

// next.onclick = function() {
//  nextSlide();
// };
// previous.onclick = function() {
//  previousSlide();
// };
// first.onclick = function(){
//     currentSlidePosition()
//     goToSlide(0)
// }
// second.onclick = function(){
//     currentSlidePosition()
//     goToSlide(1)
// }
// third.onclick = function(){
//     currentSlidePosition()
//     goToSlide(2)
// }
// fourth.onclick = function(){
//     currentSlidePosition()
//     goToSlide(3)
// }
//       }, function() {
//         //  currentSlide = 0;
//         $( this ).removeAttr('id', 'slides-active');
//         $( this).find('.slides').removeAttr('id', 'slides');
//         $( this).find('.controls-pre').removeAttr('id', 'previous');
//         $( this).find('.controls-next').removeAttr('id', 'next');
//         $( this).find('.first-slide').removeAttr('id', 'first');
//         $( this).find('.second-slide').removeAttr('id', 'second');
//         $( this).find('.third-slide').removeAttr('id', 'third');
//         $( this).find('.fourth-slide').removeAttr('id', 'fourth');
//       }
// );
//     });

$(document).ready(function(){
    $('.slides').slick({
      dots: true,
    });
  });