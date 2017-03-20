app.controller('contanct', function ($scope, $location, $rootScope) {
    if ($rootScope.headerhide == true) {
       

    } else {
        $location.path("/")
    }
});