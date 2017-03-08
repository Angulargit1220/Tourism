var app=angular.module('git',["ngRoute"]);
app.config(function($routeProvider){

    $routeProvider
      .when("/contactUs",{
		  templateUrl:"contactus/contactus.html"
	  });
	  
});