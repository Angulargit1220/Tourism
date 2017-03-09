app.controller('home',function($scope,$location, $rootScope)
{ if($rootScope.user)
    {
        console.log("hiiii");
        
    }
 else{
     $location.path("/")
 }
});