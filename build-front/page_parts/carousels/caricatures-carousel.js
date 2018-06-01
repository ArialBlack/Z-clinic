'use strict';
(function ($) {
  $(document).ready(function(){
    $('.caricatures_carousel').addClass('owl-carousel owl-theme');
    var caricaturesCarousel = $('.caricatures_carousel').owlCarousel({
      // center: true,
      items: 2,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 900,
      margin: 0,
      slideBy: 1,
      dots: false,
      navText: ['<i class="icon icon-left_arrow">', '<i class="icon icon-right_arrow">'],
      nav: true,
      navContainer: '.caricatures_carousel-wrapper',
      navElement: 'span',
      navClass: ['caricatures_carousel-nav-arrow left', 'caricatures_carousel-nav-arrow right'],
      responsive:{
        600:{
          items:1
        },
        320: {
          items: 1
        }
      }
    });
  
    caricaturesCarousel.on('changed.owl.carousel', function(event) {
      var index = event.item.index - 3;
      $('.caricatures_carousel-navigation-item').removeClass('active');
      $('.caricatures_carousel-navigation-item[data-id=' + index + ']').addClass('active');
    });
    
    $('.caricatures_carousel-navigation-item').on('click', function () {
      caricaturesCarousel.trigger('to.owl.carousel', parseInt($(this).attr('data-id')) - 1);
      $('.caricatures_carousel-navigation-item').removeClass('active');
      $(this).addClass('active');
    });
  });
  
}(jQuery));


