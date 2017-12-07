'use strict';
(function ($) {
  $(document).ready(function() {
    $('#video_placeholder_btn').on('click', function () {
      console.log('placeholder works')
      $('.dco_video-banner-placeholder').css('display', 'none');
      $('.dco_video-banner-placeholder-btn').css('display', 'none');
    });
  
    $("#video_iframe")[0].src += "&autoplay=1";
    ev.preventDefault();
  });
  
}(jQuery));


