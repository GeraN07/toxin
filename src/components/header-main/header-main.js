$(document).ready(function() {
    $('.burger-button').click(function() {
        $('.burger-button__icon').toggleClass('active');
        $('.page-header--nav').toggleClass('active');
        $('.page-header__button-block').toggleClass('active');
        $('.filter-main').toggleClass('moved-down');
    })
    $('.page-header--services').click(function() {
        $('.page-header-sevices-list').toggleClass('active');
    })
    $('.page-header--agree').click(function() {
        $('.page-header-agree-list').toggleClass('active');
    })
})
