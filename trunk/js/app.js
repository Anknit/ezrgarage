angular.module('ezr', ['ionic', 'ezr.controllers', 'ezr.routes', 'ezr.directives', 'ezr.services', ])

.config(function ($ionicConfigProvider, $sceDelegateProvider) {


    $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

.run(function ($ionicPlatform, $rootScope, $location) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        $rootScope.appVars = window.appVars || {};
    });
    window.firebase = window.firebase || {};
    window.appvars = window.appvars || {};
    window.appvars.auth = window.appvars.auth || {};
    window.appvars.profile = window.appvars.profile || [];
    (function (firebase, authVar, profileVar) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                if (user != null) {
                    authVar.isLogin = true;
                    authVar.displayName = user.displayName;
                    authVar.email = user.email;
                    authVar.photoUrl = user.photoURL;
                    authVar.uid = user.uid;
                    user.providerData.forEach(function (profile) {
                        profileVar.push({
                            provider: profile.providerId,
                            providerUID: profile.uid,
                            name: profile.displayName,
                            email: profile.email,
                            photoUrl: profile.photoURL
                        });
                    });
                    $rootScope.appVars = window.appvars || {};
                }
            } else {
                // No user is signed in.
            }
        });
    })(window.firebase, window.appvars.auth, window.appvars.profile);
    $rootScope.$on('$stateChangeStart', function(event, toState, fromState){
        if(toState.authOnly && !$rootScope.appVars.auth.isLogin) {
            $location.path('/');
        }
    });

})

.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function ($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag() {
                $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag() {
                $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])