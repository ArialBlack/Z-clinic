'use strict';
(function ($) {
  $(document).ready(function () {

    function validateNotEmpty (id) {
      var value = $(id).val();
      if( value.length !== 0){
        $(id).css('border', '1px solid #dfdfdf');
        $(id).css('background', '#e9e9e9');
        $(id).css('color', '#dfdfdf');
        return true;
      } else {
        $(id).css('border', '1px solid #db553f');
        $(id).css('background', 'rgba(255, 0, 0, .06)');
        return false
      }
    }

    function validateTel(telId) {
      var field = $(telId);
      var tel = field.val().replace(/[^\d\+]/gi, '');
      var length = tel.slice(-10).length;
      if (length > 0) {
        if (length !== 10 || !/0\d{9}/gi.test(tel)) {
          $(telId).css('border', '1px solid #db553f');
          $(telId).css('background', 'rgba(255, 0, 0, .06)');
          return false;
        } else {
          $(telId).css('border', '1px solid #dfdfdf');
          $(telId).css('background', '#e9e9e9');
          $(telId).css('color', '#dfdfdf');
          return true;

        }
      } else {
        $(telId).css('border', '1px solid #db553f');
        $(telId).css('background', 'rgba(255, 0, 0, .06)');
        return false;
      }
    }

    if (document.querySelector('body').classList.contains('node-13')) {
      var input = document.querySelector("#phone");

      var iti = window.intlTelInput(input, {
        nationalMode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.12/js/utils.js"
        // just for formatting/placeholders etc
      });

      $('.phone_form form')[0].onsubmit = function() {
        var tel = validateTel('.phone_form #phone');
        var name = validateNotEmpty('.phone_form #name');

        if ( tel && name) {
          return true
        } else {
          return false;
        }
      }
    }

    $('.phone_form form input').focus(function() {
      $(this).css('background', '')
        .css('border', '')
        .css('color', '');
    });
  });
}(jQuery));
