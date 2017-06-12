angular.module('Deepfilms.controllers')

.controller('homeView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'home';

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
