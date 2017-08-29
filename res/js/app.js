$(document).ready(function() {

  /* search-box actions */
  // on search-icon click opens
    $('.searchBtn').click(function(e) {
      if ($('.searchBox').css('opacity') == 0) {
        $('.searchBox').animate({
          width: '100%',
          opacity: '1'
        }, 600);
        $('.searchBox').focus();
      }
    });
  // on focusOut closes if empty
    $('.searchBox').focusout(function() {
      if ($('.searchBox').val() == '') {
        $('.searchBox').animate({
          width: '0',
          opacity: '0'
        }, 600);
      }
    });

});
