app.controller('admin', function ($scope, $location, $rootScope) {
    if ($rootScope.headerhide == true) {
       

    } else {
        $location.path("/")
    }
});