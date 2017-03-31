
var app=angular.module("git");
app.controller("contactCtrl",["$scope","contactFactory",function($scope,contactFactory){

 
    $scope.contact=function(val){
        
        console.log(val);
		 contactFactory.save(val);	
    }

	// var contactDetail=function(){
	  // var self=this;
	  // self.week=[]
     // }

}]);