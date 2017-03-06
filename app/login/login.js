/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:42 AM
 * To change this template use File | Settings | File Templates.
 */
var a =angular.module('git');
a.controller('myCtrl', function($scope,$location,$http) {

    $scope.submit=function(x,y)
    {
        $scope.customStyle1 = {};
        if(x==undefined||y==undefined)
            $location.path('/');



            else{
  $location.path('/home');
                      
                }
    }
    $scope.reg=function()
    {
        $location.path('/register');

    }
    });
