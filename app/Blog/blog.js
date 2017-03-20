app.controller('blog', function ($scope, $location, $rootScope) {
    if ($rootScope.headerhide == true) {
       

    } else {
        $location.path("/")
    }
});