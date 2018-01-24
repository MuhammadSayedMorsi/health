$( document ).ready(function() {

    // toggle_nav
$('#toggle-nav').click(function () {
  $(this).toggleClass('open');
  $('.collapse').toggleClass('active');
});



$('#toggle__menu').click(function () {
  $(this).toggleClass('open');
  $('.header__navbar__mobile').toggleClass('visible');
});

});


