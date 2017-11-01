'use strict';
(function ($) {
  $(document).ready(function(){
    $('.clinics_carousel').addClass('owl-carousel owl-theme');
    var clinicsCarousel = $('.clinics_carousel').owlCarousel({
      // center: true,
      items: 2,
      loop: true,
      margin: 0,
      slideBy: 1,
      dots: false,
      navText: ['<i class="icon icon-left_arrow">', '<i class="icon icon-right_arrow">'],
      nav: true,
      navContainer: '.clinics_carousel-wrapper',
      navElement: 'span',
      navClass: ['clinics_carousel-nav-arrow left', 'clinics_carousel-nav-arrow right'],
      responsive:{
        600:{
          items:1
        },
        320: {
          items: 1
        }
      }
    });
  
    clinicsCarousel.on('changed.owl.carousel', function(event) {
      var CONSTANT_OWL_INDEX = 1;
      console.log(event);
      var index = event.item.index - CONSTANT_OWL_INDEX;
      $('.clinics_carousel-navigation-item').removeClass('active');
      $('.clinics_carousel-navigation-item[data-id=' + index + ']').addClass('active');
      
      if (event.item.index === 5) {
        $('.clinics_carousel-navigation-item[data-id=' + 1 + ']').addClass('active');
      }
      
      if (index === 0) {
        $('.clinics_carousel-navigation-item[data-id=' + 3 + ']').addClass('active');
        
        if ($('body').hasClass('node-18')) {
          $('.clinics_carousel-navigation-item[data-id=' + 2 + ']').addClass('active');
        }
      }
    });
    
    $('.clinics_carousel-navigation-item').on('click', function () {
      clinicsCarousel.trigger('to.owl.carousel', $(this).attr('data-id'));
      $('.clinics_carousel-navigation-item').removeClass('active');
      $(this).addClass('active');
    });
  });
  
}(jQuery));


