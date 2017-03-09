/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:42 AM
 * To change this template use File | Settings | File Templates.
 */
var a =angular.module('git');

a.controller('myCtrl', function($scope,$location,$rootScope) {
     $rootScope.session1=false;
      $rootScope.session=false;

    $scope.submit=function(x,y)
    {
       
        if(x==undefined||y==undefined)
            {
            $location.path('/');

        $rootScope.user=false;}

            else{
 $rootScope.user=true;
                $rootScope.session=true;
                 $rootScope.session1=true;
  $location.path('/home');
                      }
        
        
    }
	  $scope.reg=function()
    {
        $location.path('/registartion');

    }
       });
