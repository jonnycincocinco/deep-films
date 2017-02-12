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
    $scope.posts = [];


    $scope.PostsByTypeAndSlug = PostsByTypeAndSlug.getPostsByTypeAndSlug('work').query($stateParams);

    // PostsByTypeAndSlug.getPostsByTypeAndSlug('expertise').query($stateParams,function(response){
    //     $scope.posts = response;
    // });

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


    $scope.loadMore = function() {
    var items = $scope.PostsByTypeAndSlug;
    for (var i = 0; i < items.length; i++) {
      console.log(items[i].acf.thumbnail);
  //    $scope.PostsByTypeAndSlug.push(last + i);
    }

  };

    $scope.clickedNext = function(){
      getElement.setValue('next');
      //console.log('previous clicked', $location.$$path);
    }

    $scope.clickedPrevious = function(){
      getElement.setValue('previous');
      //console.log('previous clicked', $location.$$path);
    }

    $scope.clickedClose = function(){
      getElement.setValue('close');
      //console.log('close clicked', $rootScope.$state.$current.path[0].url.prefix);
    };


}]);
