angular.module('Deepfilms.controllers')

.controller('homeView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'home';

    $scope.slickConfig = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 300,
      fade: true,
      autoplaySpeed: 35000,
      dots: true,
        prevArrow: '.carousel-left',
        nextArrow: '.carousel-right',
        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) {
                // before...
            },
            afterChange: function (event, slick, currentSlide, nextSlide) {
                // after...
            }
        },
        /*responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true
                }
            }
        ]*/
    };

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
