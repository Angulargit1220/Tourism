app.controller('about',function($scope,$location, $rootScope)
{ if($rootScope.user==true)
    {
        console.log("hiiii");
        
    }
 else{
     $location.path("/")
 }
});