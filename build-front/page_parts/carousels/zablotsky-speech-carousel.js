'use strict';
(function ($) {
  function initNumbers (event) {
    console.log(event);
    $('#zablotsky-speech_slides-nav-current').text(1);
    $('#zablotsky-speech_slides-nav-all').text(event.item.count);
  }

  function renderCount (event) {
    console.log('render count', event);
  }
    $(document).ready(function(){
      $('.zablotsky-speech_slides-carousel-container ul').addClass('zablotsky-speech_slides-carousel');
      
      var zablotskySpeechCarousel = $('.zablotsky-speech_slides-carousel');
      zablotskySpeechCarousel.addClass('owl-carousel owl-theme');
      zablotskySpeechCarousel.owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:20,
        dots: false,
        navText: ['&#60;', '&#62;'],
        navContainer: '#zablotsky-speech_slides-nav',
        navClass: ['zablotsky-speech_slides-nav-arrow left', 'zablotsky-speech_slides-nav-arrow right'],
        navElement: 'span',
        nav:true,
        callbacks: true,
        onInitialized: initNumbers
      });
  
      zablotskySpeechCarousel.on('changed.owl.carousel', function(event) {
        var CONSTANT_OWL_INDEX = 2;
        console.log(event);
        var checkLast = event.item.count + event.isTrigger;
        if (checkLast === event.item.index) {
          $('#zablotsky-speech_slides-nav-current').text('1');
          return;
        }
        
        var checkBackward = event.item.index - CONSTANT_OWL_INDEX;
        if (checkBackward === 0) {
          $('#zablotsky-speech_slides-nav-current').text(event.item.count);
          return;
        }
        $('#zablotsky-speech_slides-nav-current').text(event.item.index - CONSTANT_OWL_INDEX);
      });
  });
  
  
  
}(jQuery));


