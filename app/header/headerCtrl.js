var app = angular.module('git');
app.controller('headerCtrl', function ($scope, $rootScope, $location, $cookies) {
    /*$rootScope.session=true;*/
   

    $scope.logout = function () {
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function (v, k) {
            $cookies.remove(k);
        });
      
         $rootScope.headerhide = false;

        $location.path("/");
    }
});