angular.module('ezr.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



        .state('ezrGarage.dashboard', {
        url: '/dashboard',
        views: {
            'side-menu21': {
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboardCtrl'
            }
        }
    })

    .state('ezrGarage', {
        url: '/menuitems',
        templateUrl: 'templates/ezrGarage.html',
        controller: 'ezrGarageCtrl'
    })

    .state('ezrGarage.login', {
        url: '/login',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    })

    .state('signup', {
        url: '/signup',
        authOnly: false,
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
    })

    .state('ezrGarage.settings', {
        url: '/settings',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/settings.html',
                controller: 'settingsCtrl'
            }
        }
    })

    .state('ezrGarage.fAQs', {
        url: '/faqs',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/fAQs.html',
                controller: 'fAQsCtrl'
            }
        }
    })

    .state('ezrGarage.profile', {
        url: '/profile',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/profile.html',
                controller: 'profileCtrl'
            }
        }
    })

    .state('ezrGarage.payment', {
        url: '/payment',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/payment.html',
                controller: 'paymentCtrl'
            }
        }
    })

    .state('ezrGarage.promotions', {
        url: '/promotions',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/promotions.html',
                controller: 'promotionsCtrl'
            }
        }
    })

    .state('ezrGarage.offers', {
        url: '/offers',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/offers.html',
                controller: 'offersCtrl'
            }
        }
    })

    .state('ezrGarage.notifications', {
        url: '/notifications',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/notifications.html',
                controller: 'notificationsCtrl'
            }
        }
    })

    .state('ezrGarage.beAVendor', {
        url: '/vendor',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/beAVendor.html',
                controller: 'beAVendorCtrl'
            }
        }
    })

    .state('ezrGarage.help', {
        url: '/help',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/help.html',
                controller: 'helpCtrl'
            }
        }
    })

    .state('ezrGarage.about', {
        url: '/about',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/about.html',
                controller: 'aboutCtrl'
            }
        }
    })

    .state('ezrGarage.rateCards', {
        url: '/ratecards',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/rateCards.html',
                controller: 'rateCardsCtrl'
            }
        }
    })

    .state('ezrGarage.support', {
        url: '/support',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/support.html',
                controller: 'supportCtrl'
            }
        }
    })

    .state('ezrGarage.serviceHistory', {
        url: '/servicehistory',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/serviceHistory.html',
                controller: 'serviceHistoryCtrl'
            }
        }
    })
    $urlRouterProvider.otherwise('/menuitems/dashboard')
});