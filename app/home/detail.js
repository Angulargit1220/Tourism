var app = angular.module('git');
app.controller('detail', function ($scope, $http, $rootScope) {
    if ($rootScope.user) {
        console.log("welcm");

    } else {
        $location.path("/");
    }

    /*  $rootScope.$on('eventName', function (event, args){
          var id = args.id;
          $http.get("http://localhost:3000/home")
              .then(function (response) {
                  $scope.obj = response.data;
                  angular.forEach($scope.obj, function (value, key) {
                      if (value.id == id) {
                          $rootScope.place = value;
                          
                      };
                  });
              });
      }); */
        $scope.$on('eventName', function (event, data) {
        $scope.place = data.obj;
      });  
        /* $rootScope.$broadcast('starter1',null,alert(1));
        $scope.$on('starter2',function(event,data){
            alert(4);
                $scope.value='hello';
            });*/
      });