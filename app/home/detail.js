
var app = angular.module('git');
app.controller('detail', function ($scope, $http, $rootScope,$location) { 
    if ($rootScope.user) {
        console.log("welcm");

    } else 
    {
       
        $location.path("/");
    } 


        $scope.$on('eventName', function (event, data) {
        $scope.place = data.obj;
      });  
       
      });