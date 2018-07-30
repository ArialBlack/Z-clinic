'use strict';
(function ($) {
  const videoPlaceholderHandler =  function (e) {
    e.preventDefault();
    console.log('script called');
    $('.dco_video-banner-placeholder').css('display', 'none');
    $('.dco_video-banner-placeholder-btn').css('display', 'none');
    $('#video_placeholder_link').css('display', 'none');
    $("#video_iframe")[0].src += "&autoplay=1";
  }
  $(document).ready(function() {
    $('#video_placeholder_btn').on('click', videoPlaceholderHandler);
    $('#video_placeholder_link').on('click', videoPlaceholderHandler);
  });
  
}(jQuery));


