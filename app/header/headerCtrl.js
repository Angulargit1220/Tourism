var app=angular.module('git');
app.controller('headerCtrl',function($scope,$rootScope,$location){
	/*$rootScope.session=true;*/ 
    $scope.logout=function()
    {
        $rootScope.user=false;
        $location.path("/");
    }
});
