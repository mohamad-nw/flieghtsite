$(function () {
    'use strict';


// Hide Place Holder In Input


$("[placeholder]").focus(function () {

    $(this).attr("data-text", $(this).attr("placeholder"));
    $(this).attr("placeholder", "");

}).blur(function () {

    $(this).attr("placeholder", $(this).attr("data-text"));
});

// Calc Slider Hight

var winH   = $(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH   = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH - ( upperH + navH ));


// Scroll To Top

var scrollTop = $("#scroll-top");

$(window).scroll(function() {

    $(this).scrollTop() >= 700 ? scrollTop.fadeIn(1000) : scrollTop.fadeOut(1000);


});

scrollTop.on('click', function () {

    $('html,body').animate({scrollTop: 0}, 800);
});

});

$('.nav li a').on('click', function () {

  $(this).addClass('active').parent().children().removeClass('active');

  if($(this).data('class') == '.home') {


    $('tab-content .child-one').hide();


    console.log('Hello');
  }


});
