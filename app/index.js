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
		  templateUrl:"home/index.html",
        controller:"home"
	    })
        .when('/blog',{
		   templateUrl:"Blog/blog.html",
        controller:"blog"
        })
		.when('/about',{
		   templateUrl:"about/about.html",
           controller:"about"
<<<<<<< HEAD
		});
  });
=======
		})
        .when("/contactUs",{
		  templateUrl:"contactus/contactus.html"
	    });
	  
});
>>>>>>> 0ff632c7f95e8c949318c39091022246c3e864e8
