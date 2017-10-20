'use strict';
(function ($) {
  $(document).ready(function(){
    var collapseTriggers = $('#accordion a[data-toggle="collapse"]');
    var collapseContent = $('#accordion .collapse');
    console.log('collapseTriggers', collapseTriggers);
    console.log('collapseContent', collapseContent);
    for (var i = 0; collapseTriggers.length - 1; i++) {
      console.log(collapseTriggers[i], collapseContent[i]);
      // .attr('href', '#' + i);
      // collapseContent[i].attr('id', i);
    }
  });
}(jQuery));


