var app = angular.module('git');

app.controller('home', function ($scope, $location, $http, $rootScope, $timeout, mongoHomeAPI) {
    console.time('t');

    if ($rootScope.headerhide) {
        console.log("welcm");

    } else {
        $location.path("/");
    }

   $scope.detail = function (obj) {
        console.log(obj);

        $timeout(function () {
            $rootScope.$broadcast('eventName', {
                obj: obj
            }, console.log('Broadcasting', console.time('t')));
        }, 80);
        $location.path("/detail");
    };

    $http.get("/homeapi/homedata")
        .then(function (response) {
            $scope.obj = response.data;

            console.log($scope.obj);
        });

   

});