'use strict';
(function ($) {
  $(".modal.show").on("click", function(e) {
    console.log('e.target', e, $(this));
    // not working.
  });
  
  $('.video_modal').on('click', function () {
    // workaround to stop youtube video.
    var currentIframeSrc = $(this).find('iframe').attr('src');
    $(this).find('iframe').attr('src', currentIframeSrc);
  })
}(jQuery));


