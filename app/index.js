var app = angular.module('git', ["ngRoute", "ngCookies"]);
app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: "login/login.html",
            controller: "myCtrl"
        })
        .when('/registartion', {
            templateUrl: "Registraion/registration.html",
            controller: "mycntrl2"
        })
        .when('/home', {
            templateUrl: "home/index.html",
            controller: "home"
        })


        .when('/blog', {
            templateUrl: "Blog/blog.html",
            controller: "blog"
        })
        .when('/about', {
            templateUrl: "about/about.html",
            controller: "about"
        })
        .when("/contactUs", {
            templateUrl: "contactus/contactus.html"
        })
        .when('/detail',{
		   templateUrl:"home/detail.html",
           controller:"detail"
		})
        
	  
});

