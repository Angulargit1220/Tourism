var app = angular.module('git');
app.controller('footer', function ($scope,$timeout,ViewDatabase) {
    $scope.views;
    
 ViewDatabase.getvalues().then(function (response) {


        $scope.views = response.data;


    })
 

  $timeout(function () {
    $scope.view=$scope.views[0].view;
  

    }, 1000)
  /*$scope.view=$scope.views[0].view;
    console.log($scope.view);*/


});