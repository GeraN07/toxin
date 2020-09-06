(function ($) {
  const defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'item',
    textPlural: 'items',
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-content',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
    },
    items: {},
    onChange: () => {},
    beforeDecrement: () => true,
    beforeIncrement: () => true,
    setSelectionText (itemCount, totalItems) {
      const usePlural = totalItems !== 1 && this.textPlural.length > 0;
      const text = usePlural ? this.textPlural : this.selectionText;
      return `${totalItems} ${text}`;
    },
  };

  $.fn.iqDropdown = function (options) {
    this.each(function () {
      const $this = $(this);
      const $selection = $this.find('p.iqdropdown-selection').last();
      const $menu = $this.find('div.iqdropdown-menu');
      const $items = $menu.find('div.iqdropdown-menu-option');
      const dataAttrOptions = {
        selectionText: $selection.data('selection-text'),
        textPlural: $selection.data('text-plural'),
      };
      const settings = $.extend(true, {}, defaults, dataAttrOptions, options);
      let itemCount = {};
      let totalItems = 0;

      function updateDisplay () {
        $selection.html(settings.setSelectionText(itemCount, totalItems));
      }
      function setItemSettings (id, $item) {
        const minCount = Number($item.data('mincount'));
        const maxCount = Number($item.data('maxcount'));

        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
        };
      }
      
      function addControls (id, $item) {
        const $controls = $('<div />').addClass(settings.controls.controlsCls);
        const $decrementButton = $(`
          <button class="button-decrement">
            <i class="icon-decrement"></i>
          </button>
        `);
        const $incrementButton = $(`
          <button class="button-increment">
            <i class="icon-decrement icon-increment"></i>
          </button>
        `);
        const $clearButton = $this.find('span.iqdropdown__erase-button')
        // const $clearButton = $(`
        //   <span class="iqdropdown__erase-button">Очистить</span>
        // `);
        var $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);

        $item.children('div').addClass(settings.controls.displayCls);
        $controls.append($decrementButton, $counter, $incrementButton);
        if (settings.controls.position === 'right') {
          $item.append($controls);
        } else {
          $item.prepend($controls);
        }

        $decrementButton.click((event) => {
          const { items, minItems, beforeDecrement, onChange } = settings;
          const allowClick = beforeDecrement(id, itemCount);

          if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
            itemCount[id] -= 1;
            totalItems -= 1;
            if(totalItems==0){
              $this.find( ".iqdropdown__erase-button").addClass("button-hidden")
            }
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
          }

          event.preventDefault();
        });
        $clearButton.click(function(){
          // const { items, minItems, beforeDecrement, onChange } = settings;
          // const allowClick = beforeDecrement(id, itemCount);

          // if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {

              itemCount.adult = 0;
              itemCount.child = 0;
              itemCount.infant = 0;
              totalItems = 0;
            if(totalItems==0){
              $this.find( ".iqdropdown__erase-button").addClass("button-hidden")
            }
            $counter.html(itemCount.child);
            updateDisplay();
          }
          
        );
        // $( ".iqdropdown__erase-button").click(function() {
        //       itemCount.adult = 0;
        //       itemCount.child = 0;
        //       itemCount.infant = 0;
        //       totalItems = 0;
        //       if(totalItems==0){
        //         $( ".iqdropdown__erase-button").addClass("button-hidden")
        //       }
        //       $counter.html(itemCount[id]);
        //       updateDisplay();
        // });
        $incrementButton.click((event) => {
          const { items, maxItems, beforeIncrement, onChange } = settings;
          const allowClick = beforeIncrement(id, itemCount);
          
          if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
            itemCount[id] += 1;
            totalItems += 1;
            if(totalItems>0){
              $this.find( ".iqdropdown__erase-button").removeClass("button-hidden")
            }
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
            // if(totalItems>0){
            //   $( ".iqdropdown__erase-button").removeClass("button-hidden")
            // }
          }

          event.preventDefault();
        });

        $item.click(event => event.stopPropagation());

        return $item;
      }
      // $(".iqdropdown-selection").on("click", function() {
      //   $(this).parent().toggleClass('menu-open');
      //   });
      // $(".iqdropdown__apply-button").on("click", function() {
      //   $(this).parent().parent().parent().removeClass('menu-open');
      //   });
      //   $(document).mouseup(function (e){
      //     var block = $(".iqdropdown");
      //     if (!block.is(e.target) 
      //         && block.has(e.target).length === 0) {
      //         block.removeClass('menu-open');;
      //     }
      // });
      $items.each(function () {
        const $item = $(this);
        const id = $item.data('id');
        const defaultCount = Number($item.data('defaultcount') || '0');

        itemCount[id] = defaultCount;
        totalItems += defaultCount;
        setItemSettings(id, $item);
        addControls(id, $item);
      });

      updateDisplay();
    });

    return this;
  };
}(jQuery));

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
      let fastarr= []
        if(totalItems == 0){
          return textPlural = "Сколько комнат"
        }
         
         if(itemCount.bedroom <5 && itemCount.bedroom > 0){
           x = itemCount.bedroom +" "+ "cпальни"
         }
         if(itemCount.bedroom >4){
           x = itemCount.bedroom +" "+ "cпален"
        }
        if(itemCount.bedroom == 1){
          x = itemCount.bedroom +" "+ "cпальня"
       }


         if(itemCount.bed <5 && itemCount.bed > 0){
         y = itemCount.bed +" "+ "кровати"
        }
         if(itemCount.bed >4){
         y = itemCount.bed +" "+ "кроватей"
        }
        if(itemCount.bed == 1){
          y = itemCount.bed +" "+ "кровать"
       }

         if(itemCount.bathroom <5 && itemCount.bathroom > 0){
           z = itemCount.bathroom +" "+ "ванные комнаты"
          }
         if(itemCount.bathroom >4){
         z = itemCount.bathroom +" "+ "ванных комнат"
        }
        if(itemCount.bathroom == 1){
          z = itemCount.bathroom +" "+ "ванная комната"
       }

        if (typeof x == "string"){
        let bedroomtext = x
        fastarr[0]=bedroomtext
        }
        if(itemCount.bedroom == 0){
            delete fastarr[0];
          }
        if (typeof y == "string"){
        let bedtext = y
        fastarr[2]=bedtext
        }
        if(itemCount.bed == 0){
            delete fastarr[2];
          }
        if (typeof z == "string"){
        let bathroomtext = z
        fastarr[4]=bathroomtext
        }
        if(itemCount.bathroom == 0){
          delete fastarr[4];
        }
        if(typeof fastarr[0]=="string" && typeof fastarr[2]=="string"){
          fastarr[1] ="," + " "
          }
        if(typeof fastarr[2]=="string" && typeof fastarr[4]=="string"){
          fastarr[3] ="," + " "
          }
          if(typeof fastarr[0]=="string" && typeof fastarr[4]=="string"){
            fastarr[3] ="," + " "
            }
        return textPlural = fastarr
  }
  });
  $(".empty").iqDropdown({
    setSelectionText: (textPlural,selectionText)=>{
    return textPlural = "Сколько гостей"
  }
})
// $( ".iqdropdown__erase-button").click(function() {
//     return cleared = 1
// })
$(".iqdropdown-selection").on("click", function() {
  $(this).parent().toggleClass('menu-open');
  });
$(".iqdropdown__apply-button").on("click", function() {
  $(this).parent().parent().parent().removeClass('menu-open');
  });
  $(document).mouseup(function (e){
    var block = $(".iqdropdown");
    if (!block.is(e.target) 
        && block.has(e.target).length === 0) {
        block.removeClass('menu-open');;
    }
});
});
