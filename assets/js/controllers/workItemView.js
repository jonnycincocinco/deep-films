angular.module('Deepfilms.controllers')

.directive('imageonload', function () {
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        element.bind('load', function() {
            scope.$apply(attrs.imageonload);
            $('.news--featured--article').addClass('is-ready');
        //    sr.sync();
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

.controller('workItemView',['getElement', '$window', '$scope', '$rootScope', '$state', '$location', '$stateParams', 'PostsByTypeAndSlug', '$sce', '$timeout', 'Socialshare', function (getElement, $window, $scope, $rootScope, $state, $location, $stateParams, PostsByTypeAndSlug, $sce, $timeout, Socialshare){
    'use strict';

    $scope.loadedContent = 0;

    $scope.contentLoaded = function(response) {
        //console.log('loaded', response);
        //console.log(this.$parent);
        $scope.loadedContent ++;
    };


    $rootScope.$state = $state;

    $rootScope.bodylayout = 'work-item inner-page';

    $scope.posts = [];

    $scope.PostsByTypeAndSlug = PostsByTypeAndSlug.getPostsByTypeAndSlug('work').query($stateParams);


    $scope.PostsByTypeAndSlug.$promise.then(function (response) {
      $scope.posts = response;
    });

    $scope.animateElementIn = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
      };

      $scope.animateElementOut = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
      };

    $scope.getIframeSrc = function (videoId) {
      return 'https://player.vimeo.com/video/' + videoId;
    };

    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("shorter");
    } else {
        $("header").removeClass("shorter");
    }
    });

}]);
