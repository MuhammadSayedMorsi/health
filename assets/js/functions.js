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


//------------smoth-scroll---------//
$(function() {
  smoothScrool(1000);
});

function smoothScrool (duration) {


	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if(target.length) {
			event.preventDefault();
			$('html, body').animate ({

				scrollTop: target.offset().top
			}, duration);
		}
	});
}

});
