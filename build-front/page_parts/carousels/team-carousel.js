'use strict';
(function ($) {
   $(document).ready(function(){
    $('.team_carousel ul').addClass('owl-carousel owl-theme');
    $('.team_carousel .owl-carousel').owlCarousel({
      center: false,
      items: 4,
      loop: true,
      margin: 25,
      slideBy: 1,
      dots: false,
      navText: ['<i class="icon icon-left_arrow">', '<i class="icon icon-right_arrow">'],
      nav: true,
      navContainer: '#team_carousel-nav',
      navElement: 'span',
      navClass: ['team_carousel-nav-arrow left', 'team_carousel-nav-arrow right'],
      responsive:{
        1280:{
          items:4
        },
        1024:{
          items:3
        },
        768:{
          items:2
        },
        320: {
          items: 1
        }
      }
    });
  });
  
}(jQuery));


