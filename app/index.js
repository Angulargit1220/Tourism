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
        });

});


app.run(run);
 run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

         $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });