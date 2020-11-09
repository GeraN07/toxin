require("../assets/Revealator-plugin/fm.revealator.jquery.js");

// var speed = 4;
// function incEltNbr(id) {
//   elt = document.getElementById(id);
//   endNbr = Number(document.getElementById(id).innerHTML);
//   incNbrRec(0, endNbr, elt);
// }

// function incNbrRec(i, endNbr, elt) {
//   if (i <= endNbr) {
//     elt.innerHTML = i;
//     setTimeout(function() {
//       incNbrRec(i + 1, endNbr, elt);
//     }, speed);
//   }
// }


// $(document).ready(incEltNbr("nbr"));

jQuery(function(f){
    var element = f('#anchor-button');
    if (window.innerWidth > 1000) { 
      $('#anchor-button').hide() 
  }
    if (window.innerWidth < 1000)  {
      f(window).scroll(function(){
          ((window.innerWidth < 1000)? element['fade'+ ((f(this).scrollTop() > 1150) ? 'Out': 'In')](500): $('#anchor-button').hide())         
      });
  }
});