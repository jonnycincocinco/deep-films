window.app.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    'use strict';

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        'https://s3.amazonaws.com/cdn.eleveninc.com/**/*'

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

    .state('work-item',
        {
            url: '/work/:slug',
            controller: 'workView',
            templateUrl: ajaxInfo.template_directory + '/templates/work-item.html',
            activetab: 'work'
        }
    )

    .state('work',
        {
            url: '/work',
            controller: 'workView',
            templateUrl: ajaxInfo.template_directory + '/templates/work.html',
            activetab: 'work'
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
            controller: 'deepnessView',
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
