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

  /* navigation bar animation */
  // on click rotate icon
    $('.dropdown-toggle').click(function() {
      $(this).find('svg').toggleClass('up');
    });
  // on focusout rotate if is shown
    $('.navLink').focusout(function() {
      if ($(this).parent().hasClass('show')) {
        $(this).find('svg').toggleClass('up');
      }
    });

  /* date picker */
    $('.date-picker').daterangepicker({
      "singleDatePicker": true,
      "startDate": "10/12/2017",
      "endDate": "10/18/2017",
      "opens": "left"
    }, function(start, end, label) {
      console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    });

});
