var app=angular.module('git',["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
		.when('/',
        {
            templateUrl:"login/login.html",
            controller:"myCtrl"
		})
        .when("/home",{
		  templateUrl:"home/"
	    });
    
});	