var app=angular.module('git',["ngRoute"]);
app.config(function($routeProvider){

    $routeProvider
      .when("/",{
		  templateUrl:"home/contactus.html"
	  });
	  
});