var application=angular.module('git',['ngRoute']);
application.config(function($routeProvider)
{
    $routeProvider
        .when('/blog',
        {
            // templateUrl:"login/login.html",
            // controller:"myCtrl"
			templateUrl:"Blog/blog.html"
            

        })
   
});