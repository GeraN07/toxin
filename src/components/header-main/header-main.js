$(document).ready(function() {
    $('.burger-button').click(function() {
        $('.burger-button__icon').toggleClass('active');
        $('.page-header__nav').toggleClass('active');
        $('.page-header__button-block').toggleClass('active');
        $('.filter-main').toggleClass('moved-down');
    })
    $('.page-header__services').click(function() {
        $('.page-header__sevices-list').toggleClass('active');
    })
    $('.page-header__agree').click(function() {
        $('.page-header__agree-list').toggleClass('active');
    })
})
