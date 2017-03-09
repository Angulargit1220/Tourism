app.controller('home',function($scope,$location, $rootScope)
{ if($rootScope.user)
    {
       alert("welcome to turism.com");
        
    }
 else{
     $location.path("/")
 }
});