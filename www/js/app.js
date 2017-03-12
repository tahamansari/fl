// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

   
    .state('app.dashboard', {
        url: '/dashboard',
        views: {
            'menuContent': {
                templateUrl: 'templates/dashboard.html',
                controller: 'DashboardCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    
     .state('app.relaunch', {
        url: '/relaunch',
        views: {
            'menuContent': {
                templateUrl: 'templates/relaunch.html',
                controller: 'RelaunchCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.rssm', {
        url: '/rssm',
        views: {
            'menuContent': {
                templateUrl: 'templates/rssm.html',
                controller: 'RssmCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    

    .state('app.story', {
        url: '/story',
        views: {
            'menuContent': {
                templateUrl: 'templates/story.html',
                controller: 'StoryCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

     .state('app.structure', {
        url: '/structure',
        views: {
            'menuContent': {
                templateUrl: 'templates/structure.html',
                controller: 'StructureCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

      .state('app.trade', {
        url: '/trade',
        views: {
            'menuContent': {
                templateUrl: 'templates/trade.html',
                controller: 'TradeCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })


    .state('app.salesmen', {
        url: '/salesmen',
        views: {
            'menuContent': {
                templateUrl: 'templates/salesmen.html',
                controller: 'SalesmenCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.mission', {
        url: '/mission',
        views: {
            'menuContent': {
                templateUrl: 'templates/mission.html',
                controller: 'MissionCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.feeds', {
        url: '/feeds',
        views: {
            'menuContent': {
                templateUrl: 'templates/feeds.html',
                controller: 'FeedsCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })


    .state('app.update', {
        url: '/update',
        views: {
            'menuContent': {
                templateUrl: 'templates/update.html',
                controller: 'UpdateCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })






    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
