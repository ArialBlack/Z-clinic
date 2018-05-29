'use strict';
(function ($) {
  $(document).ready(function(){
    $('#paragraphID-73 .nav-item .nav-link').removeClass('active');
    $('#paragraphID-73 .tab-content .tab-pane').removeClass('active');
    $('#paragraphID-73 .nav-item .nav-link[href="#tab-1"]').addClass('active');
    $('#paragraphID-73 .tab-content .tab-pane#tab-1').addClass('active');
    
    // to remove functionality of tabs.
    $('#paragraphID-73 .nav-item .nav-link[href="#tab-0"]').removeAttr('data-toggle').removeAttr('href');
    $('#paragraphID-73 .nav-item .nav-link[href="#tab-2"]').removeAttr('data-toggle').removeAttr('href');
  });
  
}(jQuery));


