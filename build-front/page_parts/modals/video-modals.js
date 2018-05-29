'use strict';
(function ($) {
  $('.video_modal').on('click', function () {
    // workaround to stop youtube video.
    var currentIframeSrc = $(this).find('iframe').attr('src');
    $(this).find('iframe').attr('src', currentIframeSrc);
  })
}(jQuery));


