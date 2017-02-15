angular.module('Deepfilms.controllers')

.controller('homeInnerView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'home';

    $rootScope.socialActive = 'active';


}]);
