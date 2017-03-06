
var application=angular.module('git',['ngRoute']);
application.config(function($routeProvider)
{
    $routeProvider
        .when('/',
        {
            templateUrl:"login/login.html",
            controller:"myCtrl"

        })
      .when("/home",
	  {
		  templateUrl:"home/"
	  })

});