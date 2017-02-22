angular.module('Deepfilms.controllers')

.controller('homeView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'home';

    var slider = $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 13000,
    slidesToShow: 1,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    infinite: false,
    speed: 640,
    fade: false,
    pauseOnHover: false,
    slide: 'div'
  //  cssEase: 'linear'
    });

    slider.on('afterChange', function(event, slick, currentSlide){
      if( currentSlide > 0 ) {
       slider.slick("setOption", "autoplaySpeed", 5000);
         }
     if( slick.slideCount === currentSlide + 1 ){
          slick.dots = false;
          slick.paused = true;
          slider.slick('unslick');
          $('.home-list--social,.home-background').addClass('active');
        }
      });

      $('.desktop-nav--logo').click(function(){
        slider.slick('unslick');
      })

    var vid1 = angular.element(document.getElementById('vid-1'));
    var firstVid = vid1[0];

    var waitTime = 150;

    setTimeout(function () {
      // Resume play if the element if is paused.
      if (firstVid.paused) {
        firstVid.play();
      }
    }, waitTime);
  //  firstVid.height($(window).height());



}]);
