$(document).ready(() => {
  $(".no-config").iqDropdown();

  $(".custom").iqDropdown({
    beforeDecrement: function(id, itemCount) {
      if (id === "adult") {
        return itemCount.adult > itemCount.infant;
      }
      return true;
    },
    beforeIncrement: function(id, itemCount) {
      if (id === "infant") {
        return itemCount.adult > itemCount.infant;
      }
      else if(id ==="child"){
        return itemCount.adult*3 > itemCount.child;
      }
      return true;
    },
    setSelectionText: (itemCount,totalItems,textPlural,selectionText) => {
      if(totalItems == 0){
        return textPlural = 'Сколько гостей';
       }
       if(totalItems == 1){
        return textPlural =totalItems + " " +'гость';
       }
       if(totalItems < 5){
        return selectionText =totalItems + " " +'гостя';
       }
       else{
        return selectionText =totalItems + " " +"гостей";
       }
      },
  });

  $(".custom-message").iqDropdown({
    minItems: 0,
    onChange: function(id, count, totalItems) {
      console.log(id, count, totalItems);
    },
    setSelectionText: (itemCount,totalItems,id,Count,textPlural,selectionText) => {
      console.log(itemCount.bedroom);
      console.log(itemCount.bed);
      console.log(itemCount.bathroom);
      
      // const items = Object.keys(itemCount)
        // .map(key => itemCount[key])
        // .join(",");
        // return items
        
         
         if(itemCount.bedroom <5){
           x = itemCount.bedroom +" "+ "Спальни"
         }
         if(itemCount.bedroom >4|| itemCount.bedroom == 0){
           x = itemCount.bedroom +" "+ "Спален"
        }
        if(itemCount.bedroom == 1){
          x = itemCount.bedroom +" "+ "Спальня"
       }
       
         if(itemCount.bed <5){
         y = itemCount.bed +" "+ "Кровати"
        }
         if(itemCount.bed >4|| itemCount.bed == 0){
         y = itemCount.bed +" "+ "Кроватей"
        }
        if(itemCount.bed == 1){
          y = itemCount.bed +" "+ "Кровать"
       }

         if(itemCount.bathroom <5){
           z = itemCount.bathroom +" "+ "Ванные комнаты"
          }
         if(itemCount.bathroom >4|| itemCount.bathroom == 0){
         z = itemCount.bathroom +" "+ "Ванных комнат"
        }
        if(itemCount.bathroom == 1){
          z = itemCount.bathroom +" "+ "Ванная комната"
       }
        
        return textPlural = x + "," + " " + y + "," + " " + z
  }
  });
});
