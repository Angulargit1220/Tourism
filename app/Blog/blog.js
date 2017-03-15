app.controller('blog', function ($scope, $location, $rootScope) {
    if ($rootScope.user == true) {
        console.log("hiiii");

    } else {
        $location.path("/")
    }
});