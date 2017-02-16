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

    $rootScope.bodylayout = 'work';
    if ($state.current.activetab == 'demos') {
  //    $rootScope.bodylayout = 'work not-work';
    }
    $scope.posts = [];

    $scope.PostsByTypeAndSlug = PostsByTypeAndSlug.getPostsByTypeAndSlug('work').query($stateParams);

  //   PostsByTypeAndSlug.getPostsByTypeAndSlug('work').query($stateParams,function(response){
  //     $scope.posts = response;
  //   });

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
      //console.log('ok promise loaded');
    });


  $scope.getIframeSrc = function (videoId) {
    return 'https://player.vimeo.com/video/' + videoId;
  };

    // $scope.clickedNext = function(){
    //   getElement.setValue('next');
    //   //console.log('previous clicked', $location.$$path);
    // }
    //
    // $scope.clickedPrevious = function(){
    //   getElement.setValue('previous');
    //   //console.log('previous clicked', $location.$$path);
    // }
    //
    // $scope.clickedClose = function(){
    //   getElement.setValue('close');
    //   //console.log('close clicked', $rootScope.$state.$current.path[0].url.prefix);
    // };

    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".categorybar,.desktop-nav").addClass("shorter");
    } else {
        $(".categorybar,.desktop-nav").removeClass("shorter");
    }
    });

    var config = {
  //      easing: 'hustle',
  //      reset:  false,
  //      delay:  'onload',
        vFactor: 0.40
      }

    //$rootScope.$watch('viewContentLoaded', function(event) {
    $scope.$watch('viewContentLoaded', function(event) {
      $timeout(function() {
        window.sr = ScrollReveal(config).reveal('.news--featured--article');
      //  sr.sync();
      }, 800);
    });

}]);
