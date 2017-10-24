'use strict';
(function ($) {
  $(document).ready(function(){
    
    var collapseTriggers = $('#accordion a[data-toggle="collapse"]').each(function (index, value) {
      
      $(value).attr('href', '#' + index);
    });
    var collapseContent = $('#accordion  .collapse').each(function (index, value) {
      $(value).attr('id', index);
      if (index !== 0) {
        $(value).removeClass('show');
      }
    });
    
  });
}(jQuery));


