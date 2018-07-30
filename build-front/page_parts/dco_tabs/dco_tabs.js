'use strict';
(function ($) {
  $(document).ready(function(){
    console.log('dco tabs works');
    $('#issues_first').on('click', function() {
      $('.dco_issues').removeClass('second');
      $('.dco_issues').addClass('first');
      
      $(this).addClass('active');
      $('#issues_second').removeClass('active');
      
      $('#issues_first_item').addClass('active');
      $('#issues_second_item').removeClass('active');
      
      $('#issues_first_content').addClass('active');
      $('#issues_second_content').removeClass('active');
    })
    
    $('#issues_second').on('click', function() {
      $('.dco_issues').removeClass('first');
      $('.dco_issues').addClass('second');
      
      $(this).addClass('active');
      $('#issues_first').removeClass('active');
      $('#issues_first_item').removeClass('active');
      $('#issues_second_item').addClass('active');
  
      $('#issues_second_content').addClass('active');
      $('#issues_first_content').removeClass('active');
    })
  });
  
}(jQuery));


