var app=angular.module('git',["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
		.when('/',{
            templateUrl:"login/login.html",
            controller:"myCtrl"
        })
        .when('/home',{
		  templateUrl:"home/index.html"
	    })
        .when('/blog',{
		   templateUrl:"Blog/blog.html"
        })
		.when('/about',{
		   templateUrl:"about/about.html"
		})
		.when('/taj', {
			templateUrl: 'about/place/taj.html',
			controller: 'aCtrl'
		})
		.when('/fort', {
			templateUrl: 'about/place/red.html',
			controller: 'bCtrl'
		});
  });
