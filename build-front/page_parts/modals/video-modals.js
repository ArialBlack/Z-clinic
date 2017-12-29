'use strict';
(function ($) {
  $(".modal.show").on("click", function(e) {
    console.log('e.target', e, $(this));
    jQuery(".video_modal iframe").attr("src", jQuery(".video_modal iframe").attr("src"));
  });
}(jQuery));


