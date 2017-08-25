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

  /* search-box actions */
  // on search-icon click opens
    $('.search-icon').click(function(e) {
      if ($('.search-box').css('opacity') == 0) {
        $('.search-box').animate({
          width: '180px',
          opacity: '1'
        }, 600);
        $('.search-box').focus();
      }
    });
  // on focusOut closes if empty
    $('.search-box').focusout(function() {
      if ($('.search-box').val() == '') {
        $('.search-box').animate({
          width: '0',
          opacity: '0'
        }, 600);
      }
    });

});
