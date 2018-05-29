'use strict';
(function ($) {
   $(document).ready(function(){
    $('.about-us_carousel').addClass('owl-carousel owl-theme');
    $('.about-us_carousel').owlCarousel({
      center: false,
      items: 5,
      loop: true,
      margin: 25,
      slideBy: 1,
      dots: false,
      navText: ['<i class="icon icon-left_arrow">', '<i class="icon icon-right_arrow">'],
      nav: true,
      navContainer: '#about-us_carousel-nav',
      navElement: 'span',
      navClass: ['about-us_carousel-nav-arrow left', 'about-us_carousel-nav-arrow right'],
      responsive:{
        1920:{
          items:6
        },
        1366:{
          items:5
        },
        1024:{
          items:4
        },
        600:{
          items:3
        },
        320: {
          items: 1
        }
      }
    });
    $('#media_about_us_viva').on('click', function () {
      window.open('https://www.youtube.com/watch?v=amK1_4X_-l8');
    });
  });
  
}(jQuery));


