angular.module('ezr.controllers', [])
  
.controller('dashboardCtrl', ['$scope', '$stateParams', '$location', 'firebaseApi', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location, firebaseApi) {
    var dbObj = new firebaseApi.data();
    $scope.vehicleType = {};
    dbObj.DB_Read('vehicles/vehicleCategories', function(response) {
        $scope.vehicleType = response.val();
    });
    $scope.showVehicleList = function (vehicletype) {
        $location.path('vehicleType/' + vehicletype);
    };

}])
   
.controller('ezrGarageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', 'authService', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, authService, $http) {
    function signinCallback (result) {
        debugger;
        $http({method:'GET', url:'http://localhost:8080/auth/verifyToken?' + result.credential.idToken}).then(function(response){
            debugger;
        }, function(err){
            debugger;
        });
    }
    $scope.googleSignIn = function () {
        authService.googleSignIn(signinCallback);
    }
    $scope.facebookSignIn = function () {
        authService.facebookSignIn(signinCallback);
    }
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', 'authService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, authService) {
    $scope.signout = authService.signOut;
}])
   
.controller('fAQsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('paymentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('promotionsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('offersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('notificationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('beAVendorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('helpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('rateCardsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('supportCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('serviceHistoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('searchServiceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
console.log($stateParams);

}])

.controller('vehicleTypeCtrl', ['$scope', '$stateParams', '$location',
function ($scope, $stateParams, $location) {
    var databaseRef = window.firebase.database();
    var newEntryKey = databaseRef.ref('ezr_vehicle_list_by_category/category_gamma/').push().key;
    var updates = {}
    updates['ezr_vehicle_list_by_category/category_gamma/' + newEntryKey] =  {"label":"Tractor","urlpath":"tractor"};
    var a = databaseRef.ref().update(updates);
    console.log(a);
    $scope.vehicleType = $stateParams.type;
    switch($scope.vehicleType) {
        case 'twowheelers':
            break;
        case 'cars':
            break;
        case 'others':
            break;
        default:
            break;
    }
    var vehicleList = {
        twowheelers: [
            'Motorcycle',
            'Sportsbike',
            'Activa',
            'Scooty',
            'Bullet',
            'Other'
        ], cars: [
            'WagonR',
            'Swift Dzire',
            'Nano',
            'Van',
            'Audi',
            'BMW',
            'Other'
        ], others: [
            'Truck',
            'Bus',
            'Traveller',
            'Auto',
            'Tractor',
            'Tata Ace',
            'Other'
        ]};
    $scope.choice = {};
    $scope.otherVehicle = '';
    $scope.vehicles = vehicleList[$scope.vehicleType];
    $scope.searchService = function () {
        var searchParam = $scope.vehicleType + '/' + $scope.choice.value;
        if($scope.choice.value == 'Other') {
            searchParam = searchParam + '-' + $scope.otherVehicle;
        }
        $location.path('searchService/' + searchParam);
    };
}])