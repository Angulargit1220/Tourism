var app=angular.module('git');
app.controller("popup",function($scope,$modal){
    $scope.open = function () {
		var modalInstance = $modal.open({
         templateUrl: 'home/ticketform.html',
            controller:'popupclose',
});
}
});
app.controller('popupclose',function ($scope, $modalInstance) {
$scope.close = function () {
$modalInstance.dismiss('cancel');
};
});
app.controller('aCtrl',function($scope){
    $scope.click=function(){
        console.log(" details saved");
        console.log('user phonenumber:' +$scope.phonenumber) ;
        console.log('user email:' +$scope.email) ;
        console.log('user pwd:' +$scope.pwd) ;
        }
});