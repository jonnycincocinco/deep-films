angular.module('Deepfilms.controllers')

.directive('imageonload', function () {
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        element.bind('load', function() {
            scope.$apply(attrs.imageonload);
        });
    }
};
})

.directive('videoload', function () {
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        element.bind('loadeddata', function() {
            scope.$apply(attrs.videoload);
        });
    }
};
})

.controller('deepnessView',['getElement', '$window', '$scope', '$rootScope', '$state', '$location', '$stateParams', 'PostsByTypeAndSlug', '$sce', '$timeout', 'Socialshare', function (getElement, $window, $scope, $rootScope, $state, $location, $stateParams, PostsByTypeAndSlug, $sce, $timeout, Socialshare){
    'use strict';

    $scope.loadedContent = 0;

    $scope.contentLoaded = function(response) {
        //console.log('loaded', response);
        //console.log(this.$parent);

        $scope.loadedContent ++;
    };


    $rootScope.$state = $state;

    $rootScope.bodylayout = 'deepness not-work inner-page';
    $scope.posts = [];


    $scope.PostsByTypeAndSlug = PostsByTypeAndSlug.getPostsByTypeAndSlug('expertise').query($stateParams);

    // PostsByTypeAndSlug.getPostsByTypeAndSlug('expertise').query($stateParams,function(response){
    //     $scope.posts = response;
    // });

    $scope.animateElementIn = function($el) {
      console.log('in');
        $el.removeClass('hidden');
        $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
      };

      $scope.animateElementOut = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
      };

    $scope.PostsByTypeAndSlug.$promise.then(function (response) {
      $scope.posts = response;
      for (var i = 0; i < response.length; i++) {
        var newDate = response[i].acf.date;
        newDate = newDate.split(" ");
        newDate[0] = newDate[0].substring(0, 3);
        if( newDate[1].charAt( 0 ) === '0' )
        newDate[1] = newDate[1].slice( 1 );
        newDate[1] = newDate[1].replace(/,\s*$/, "");
        response[i].acf.date = newDate;
      }
    });


}]);
