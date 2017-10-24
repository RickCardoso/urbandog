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
      // "parentEl": ".custom-picker-block",
      "singleDatePicker": true,
      "opens": "left",
      "locale": {
        "format": "MM/DD/YYYY",
        "separator": "-"
      }
    }, function(start, end, label) {
      this.parentEl.find('.custom-picker').val(start.format('YYYY-MM-DD'));
    });

  // add/remove family members' forms
    $('.add-family-member').click(function() {
      $('#family-members').append($("#family-member-form-template").html());
    });
    $('body').on('click', '.remove-family-member', function() {
      $(this).parent().parent().remove();
    });

});
