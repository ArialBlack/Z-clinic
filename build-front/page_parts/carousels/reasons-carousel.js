'use strict';
(function ($) {
  $(document).ready(function(){
    $('.reasons_carousel').addClass('owl-carousel owl-theme');
    var reasonsCarousel = $('.reasons_carousel').owlCarousel({
      // center: true,
      items: 1,
      loop: true,
      margin: 0,
      slideBy: 1,
      dots: false,
      navText: ['<i class="icon icon-left_arrow">', '<i class="icon icon-right_arrow">'],
      nav: true,
      navContainer: '.reasons_carousel-wrapper',
      navElement: 'span',
      navClass: ['reasons_carousel-nav-arrow left', 'reasons_carousel-nav-arrow right'],
      responsive:{
        600:{
          items:1
        },
        320: {
          items: 1
        }
      }
    });
  
    reasonsCarousel.on('changed.owl.carousel', function(event) {
      console.log('reasons carousel', event.item.index);
      var index = event.item.index - 1;
      $('.reasons_carousel-navigation-item').removeClass('active');
      $('.reasons_carousel-navigation-item[data-id=' + index + ']').addClass('active');
      
      if (index === 0) {
        $('.reasons_carousel-navigation-item[data-id=' + 2 + ']').addClass('active');
      }
  
      if (event.item.index === 5) {
        $('.reasons_carousel-navigation-item[data-id=' + 1 + ']').addClass('active');
      }
  
    });
    
    $('.reasons_carousel-navigation-item').on('click', function () {
      reasonsCarousel.trigger('to.owl.carousel', parseInt($(this).attr('data-id')) - 1);
      $('.reasons_carousel-navigation-item').removeClass('active');
      $(this).addClass('active');
    });
    
    $('.reasons_carousel-content-more-btn').on('click', function (e) {
      e.preventDefault();
      $(this).hide();
      var dataId = $(this).attr('data-id');
      console.log('dataId', dataId);
      var reasonEl =  $('.reasons_carousel-content-hidden[id=' + dataId + ']').addClass('show');
      console.log('reasonEl', reasonEl);
    })
  });
  
}(jQuery));


