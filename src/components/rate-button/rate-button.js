$(document).ready(function($) {
	$(".like-button").likebtn();
    $("#like-button-x").likebtn({
    	identifier: "my_button",
        theme: "github",
        dislike_enabled:false
    });
    $("#like-button-y").likebtn({
        theme: "disk"
    });
});