var app = angular.module('git', ["ngRoute", "ngCookies", "ngResource", "ab-base64", "pascalprecht.translate"]);
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
            templateUrl: "contactus/contactus.html",
            controller: "contanct"
        })
        .when('/detail', {
            templateUrl: "home/detail.html",
            controller: "detail"
        })


});
app.config(function ($routeProvider, $translateProvider) {
    $translateProvider.translations('en', {
            TITLE: 'sign in to continue'

        })
        .translations('hindi', {
            TITLE: 'जारी रखने के लिए साइन इन करें'

        })
        .translations('kannada', {
            TITLE: 'ಮುಂದುವರಿಸಲು ಸೈನ್ ಇನ್ '

        })
        .translations('chineese', {
            TITLE: '请登录以继续 '

        })
        .translations('french', {
            TITLE: 'Connectez-vous pour continuer'

        })
        .translations('oriya', {
            TITLE: 'ସାଇନ୍ ଇନ୍'

        })
        .translations('russian', {
            TITLE: 'Войдите в аккаунт,чтобы продолжить'
        });

    $translateProvider.preferredLanguage('en');


});