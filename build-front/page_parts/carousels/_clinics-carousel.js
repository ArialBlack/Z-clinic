'use strict';
(function ($) {
  $(document).ready(function(){
    $('.clinics_carousel').addClass('owl-carousel owl-theme');
    var clinicsCarousel = $('.clinics_carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      slideBy: 1,
      dots: false,
      navText: ['<i class="icon icon-floating_arrow">', '<i class="icon icon-floating_arrow">'],
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
  
    clinicsCarousel.on('changed.owl.carousel', function(event) {
      var CONSTANT_OWL_INDEX = 2;
      console.log(event);
      var checkLast = event.item.count + event.isTrigger;
    });
    
    $('.clinics_carousel-navigation-item').on('click', function () {
      clinicsCarousel.trigger('to.owl.carousel', $(this).attr('data-id'));
      $('.clinics_carousel-navigation-item').removeClass('active');
      $(this).addClass('active');
    })
  });
  
}(jQuery));


