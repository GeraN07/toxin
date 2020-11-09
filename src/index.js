//Jquery
var jquery = require("../node_modules/jquery/dist/jquery.js");
window.$ = window.jQuery = jquery;
import * as $ from 'jquery'
// require("../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js")
// require("../node_modules/item-quantity-dropdown/src/index.js")
require("../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js")
require("../node_modules/jquery-mask-plugin/dist/jquery.mask.min.js")
require("../src/assets/Minimal-Rating-Plugin-With-jQuery-And-Material-Icons-star-rating-js/src/jquery.star.rating.min.js")
require("../src/cards/datepicker-card/datepicker-card.js")
require("../src/components/dropdown/dropdown.js")
require("../src/components/header-main/header-main.js")
//Pages
require("./pages/ui-kit.pug");
require("./pages/ui-kit.js");
require("./pages/room-details.js");
require("./pages/rooms-catalog.js");

