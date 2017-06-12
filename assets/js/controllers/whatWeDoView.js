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

.controller('workView',['getElement', '$window', '$scope', '$rootScope', '$state', '$location', '$stateParams', 'PostsByTypeAndSlug', '$sce', '$timeout', 'Socialshare', function (getElement, $window, $scope, $rootScope, $state, $location, $stateParams, PostsByTypeAndSlug, $sce, $timeout, Socialshare){
    'use strict';

    $scope.loadedContent = 0;

    $scope.contentLoaded = function(response) {
        //console.log('loaded', response);
        //console.log(this.$parent);
        $scope.loadedContent ++;
    };


    $rootScope.$state = $state;


    $scope.posts = [];

    $scope.PostsByTypeAndSlug = PostsByTypeAndSlug.getPostsByTypeAndSlug('pages').query($stateParams);

  //   PostsByTypeAndSlug.getPostsByTypeAndSlug('work').query($stateParams,function(response){
  //     $scope.posts = response;
  //   });

  $rootScope.bodylayout = 'not-work inner-page';

      if ($state.current.activetab == 'demos') {
          $rootScope.bodylayout = 'work inner-page demos';
      }
      if ($state.current.activetab == 'corporate') {
          $rootScope.bodylayout = 'work inner-page corporate';
      }
      if ($state.current.activetab == 'branded-content') {
          $rootScope.bodylayout = 'work inner-page branded-content';
      }

    $('.filter-list').click(function(){
      $('.dropdown-inner').addClass('closed');
    });

    $('.toggle').hover(function(){
      $('.dropdown-inner').removeClass('closed');
    });

    $rootScope.toggleHiddenNav = function(){
      $rootScope.showMenu = !$rootScope.showMenu;
      $rootScope.navOpen = $rootScope.showMenu?"open":"";
    };

    $rootScope.categoryName = "Filter By Category";
    if ($state.current.activetab == 'branded-content') {
      $rootScope.categoryName = "Branded Content";
    } else if ($state.current.activetab == 'demos') {
        $rootScope.categoryName = "Demos";
    } else if ($state.current.activetab == 'corporate') {
        $rootScope.categoryName = "Corporate";
    };


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
