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
      let arr = []
      if(totalItems == 0){
        return textPlural = "Сколько гостей"
      }
      if(itemCount.adult + itemCount.child == 1){
       let x = itemCount.adult +itemCount.child+ " " +'гость';
        if(itemCount.adult > 0){
          arr.push(x)
          }
      }
       else if(itemCount.adult + itemCount.child < 5 ){
        let x =itemCount.adult + itemCount.child + " " +'гостя';
         if(itemCount.adult > 0){
         arr.push(x)
         }
       }
       else if(itemCount.adult + itemCount.child > 4){
        let x =itemCount.adult + itemCount.child + " " +"гостей";
         if(itemCount.adult > 0){
          arr.push(x)
          }
       }
      //  if(itemCount.child == 1){
      // let  y =itemCount.child + " " +'ребенок';
      //   if(itemCount.child > 0){
      //     arr.push(y)
      //     }
      // }
      //  else if(itemCount.child < 5){
      //   let y =itemCount.child + " " +'ребенка';
      //    if(itemCount.child > 0){
      //     arr.push(y)
      //     }
      //  }
      //  else if(itemCount.child > 4){
      //   let y =itemCount.child + " " +'детей';
      //    if(itemCount.child > 0){
      //     arr.push(y)
      //     }
      //  }
       if( itemCount.infant == 1){
       let z =itemCount.infant + " " +'младенец';
        if(itemCount.infant > 0){
         arr.push(z)
         }
        }
       else if(itemCount.infant < 5){
       let z =itemCount.infant + " " +'младенца';
        if(itemCount.infant > 0){
          arr.push(z)
          }
      }
      else if(itemCount.infant > 4){
        let z =itemCount.infant + " " +'младенцев';
         if(itemCount.infant > 0){
          arr.push(z)
          }
      }
      arr = arr.join(', ')
      return textPlural = arr
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
        if(totalItems == 0){
          return textPlural = "Сколько комнат"
        }
         
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
  $(".empty").iqDropdown({
    setSelectionText: (textPlural,selectionText)=>{
    return textPlural = "Сколько гостей"
  }
})
});
