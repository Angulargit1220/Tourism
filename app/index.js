var app=angular.module('git',["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
		.when('/',{
            templateUrl:"login/login.html",
            controller:"myCtrl"
        })
		.when('/registartion',{
            templateUrl:"Registraion/registration.html",
            controller:"mycntrl2"
        })
        .when('/home',{
		  templateUrl:"home/index.html"
	    })
        .when('/blog',{
		   templateUrl:"Blog/blog.html"
        })
  });
