'use strict';
(function ($) {
   $(document).ready(function(){
    $('.about-us_carousel').addClass('owl-carousel owl-theme');
    $('.about-us_carousel').owlCarousel({
      center: true,
      items: 5,
      loop: true,
      margin: 65,
      slideBy: 1,
      dots: false,
      navText: ['<i class="icon icon-left_arrow">', '<i class="icon icon-left_arrow">'],
      nav: true,
      navContainer: '#about-us_carousel-nav',
      navElement: 'span',
      navClass: ['about-us_carousel-nav-arrow left', 'about-us_carousel-nav-arrow right'],
      responsive:{
        600:{
          items:5
        },
        320: {
          items: 2
        }
      }
    });
  });
  
}(jQuery));


