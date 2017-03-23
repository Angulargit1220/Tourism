var app=angular.module('git');
app.controller('aCtrl',function($scope){
    $scope.click=function(){
        console.log(" details saved");
        console.log('user phonenumber:' +$scope.phonenumber) ;
        console.log('user email:' +$scope.email) ;
        console.log('user pwd:' +$scope.pwd) ;
        }
});