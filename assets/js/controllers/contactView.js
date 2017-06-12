angular.module('Deepfilms.controllers')

.controller('contactView', ['getElement', '$scope', '$rootScope', '$state', 'PostsByType', '$window', function (getElement, $scope, $rootScope, $state, PostsByType, $window) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'contact not-work inner-page';

    $scope.emailAddress = "info@deepfilms.co";

  



}]);
