$(document).ready(function() {

  /* adjusts nav height on toggle click */
  $('.navbar-toggler').click(function() {
    if ($('.nav-collapseable').hasClass('show')) {
      //$('.navbar').css('height', 'auto');
      //$('.show').slideUp(600, function() {
        $('.nav-collapseable').removeClass('show');
      //});
    } else {
      //$('.navbar').css('height', '64px');
      $('.nav-collapseable').addClass('show');
      //$('.show').slideDown(600);
    }
  });

});
