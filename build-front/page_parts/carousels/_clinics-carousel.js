'use strict';
(function ($) {
  $(document).ready(function(){
    $('.clinics_carousel').addClass('owl-carousel owl-theme');
    $('.clinics_carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin:25,
      slideBy: 1,
      dots: false,
      navText: ['&#60;', '&#62;'],
      nav: true,
      navContainer: '#clinics_carousel-nav',
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
  });
  
}(jQuery));


