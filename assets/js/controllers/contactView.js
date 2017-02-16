angular.module('Deepfilms.controllers')

.controller('contactView', ['getElement', '$scope', '$rootScope', '$state', 'PostsByType', '$window', function (getElement, $scope, $rootScope, $state, PostsByType, $window) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'contact not-work';


    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    startAnimations();

    $scope.clickedEmail = function(type){
      //getElement.setValue('email');
      //console.log('email clicked: ' + type);
      $window.ga('send', 'pageview', {page: type });
    }



}]);
