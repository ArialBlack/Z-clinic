'use strict';
(function ($) {
  $(document).ready(function() {
    $('#video_placeholder_btn').on('click', function () {
      $('.dco_video-banner-placeholder').css('display', 'none');
      $('.dco_video-banner-placeholder-btn').css('display', 'none');
  
      $("#video_iframe")[0].src += "&autoplay=1";
      console.log('dco_placeholder');
    });
  });
  
}(jQuery));


