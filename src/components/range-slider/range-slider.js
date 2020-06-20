
$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 20000,
    from: 5000,
    to: 10000,
    grid: true,
    onChange: function (data) {
        // Called every time handle position is changed

        console.log(data.from);
        console.log(data.to);
        document.getElementById("val1").innerHTML = data.from
        document.getElementById("val2").innerHTML = data.to
    },
});
