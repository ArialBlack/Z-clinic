'use strict';
(function ($) {
  $(".modal.show").on("click", function(e) {
    console.log('e.target', e, $(this));
    // not working.
    
    jQuery(".video_modal iframe").attr("src", jQuery(".video_modal iframe").attr("src"));
  });
}(jQuery));


