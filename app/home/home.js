app.controller('home', function ($scope, $location, $rootScope) {
    if ($rootScope.user) {
        console.log("welcm");
    } else {
        $location.path("/")
    }
});