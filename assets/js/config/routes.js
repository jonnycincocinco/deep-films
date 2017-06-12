window.app.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    'use strict';

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        'https://player.vimeo.com/video/*',
        'http://dev.deepfilms.co/**/*'
    ]);


    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home',
        {
            url: '/',
            controller: 'homeView',
            templateUrl: ajaxInfo.template_directory + '/templates/home.html',
            activetab: 'home'
        }
    )

    .state('home-inner',
        {
            url: '/home',
            controller: 'homeInnerView',
            templateUrl: ajaxInfo.template_directory + '/templates/home-inner.html',
            activetab: 'home-inner'
        }
    )

    .state('work-item',
        {
            url: '/the-goods/:slug',
            controller: 'workItemView',
            templateUrl: ajaxInfo.template_directory + '/templates/work-item.html',
            activetab: 'work'
        }
    )

    .state('work',
        {
            url: '/the-goods',
            controller: 'workView',
            templateUrl: ajaxInfo.template_directory + '/templates/work.html',
            activetab: 'work'
        }
    )

    .state('what-we-do',
        {
            url: '/what-we-do',
            controller: 'whatWeDoView',
            templateUrl: ajaxInfo.template_directory + '/templates/what-we-do.html',
            activetab: 'what-we-do'
        }
    )

    .state('branded-content',
        {
            url: '/work/branded-content/',
            controller: 'workView',
            templateUrl: ajaxInfo.template_directory + '/templates/branded-content.html',
            activetab: 'branded-content'
        }
    )

    .state('demos',
        {
            url: '/work/demos/',
            controller: 'workView',
            templateUrl: ajaxInfo.template_directory + '/templates/demos.html',
            activetab: 'demos'
        }
    )

    .state('corporate',
        {
            url: '/work/corporate/',
            controller: 'workView',
            templateUrl: ajaxInfo.template_directory + '/templates/corporate.html',
            activetab: 'corporate'
        }
    )

    .state('deepness',
        {
            url: '/deepness',
            controller: 'deepnessView',
            templateUrl: ajaxInfo.template_directory + '/templates/deepness.html',
            activetab: 'deepness'
        }
    )

    .state('deepness-item',
        {
            url: '/deepness/:slug',
            controller: 'deepnessItemView',
            templateUrl: ajaxInfo.template_directory + '/templates/deepness-item.html',
            activetab: 'deepness'
        }
    )

    .state('about',
        {
            url: '/about',
            controller: 'aboutUsView',
            templateUrl: ajaxInfo.template_directory + '/templates/about-us.html',
            activetab: 'about'
        }
    )

    .state('contact',
        {
            url: '/contact',
            controller: 'contactView',
            templateUrl: ajaxInfo.template_directory + '/templates/contact.html',
            activetab: 'contact'
        }
    );

}]);
