'use strict';
(function ($) {
  $(document).ready(function(){
    $('.page-node-type-social-project #paragraphID-151>div:nth-child(2)').addClass('owl-carousel owl-theme');
    $('.page-node-type-social-project .owl-carousel').owlCarousel({
      center: false,
      items: 4,
      loop: true,
      margin: 35,
      slideBy: 1,
      dots: false,
      navText: ['<i class="icon icon-left_arrow">', '<i class="icon icon-right_arrow">'],
      nav: true,
      navContainer: '.owl-carousel',
      navElement: 'span',
      navClass: ['social-nav-arrow left', 'social-nav-arrow right'],
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
  
    $('.page-node-type-social-project #paragraphID-152>div:nth-child(3)').addClass('owl-carousel owl-theme');
    $('.page-node-type-social-project .owl-carousel').owlCarousel({
      center: false,
      items: 4,
      loop: true,
      margin: 35,
      slideBy: 1,
      dots: false,
      navText: ['<i class="icon icon-left_arrow">', '<i class="icon icon-right_arrow">'],
      nav: false,
      navContainer: '.owl-carousel',
      navElement: 'span',
      navClass: ['social-nav-arrow left', 'social-nav-arrow right'],
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


