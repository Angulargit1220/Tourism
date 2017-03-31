
var app=angular.module("git");
app.controller("contactCtrl",["$scope","contactFactory","$http",function($scope,contactFactory, $http){

  alert("hello");
    $scope.contact=function(val){
        alert(420);
        console.log(val);
		 contactFactory.save(val);	
    }
	$http.get('/test/connection').then(function(response) {
        console.log(response);
    });
	// var contactDetail=function(){
	  // var self=this;
	  // self.week=[]
     // }

}]);