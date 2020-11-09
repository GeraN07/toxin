
$(".js-range-slider").ionRangeSlider({
    type: "double",
    skin: "round",
    min: 0,
    max: 16000,
    from: 5000,
    to: 10000,
    grid: false,
    hide_min_max:true,
    hide_from_to:true,
    onChange: function (data) {
        document.getElementById("val1").innerHTML = (data.from).toLocaleString()
        document.getElementById("val2").innerHTML = (data.to).toLocaleString()
    },
});
