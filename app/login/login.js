/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:42 AM
 * To change this template use File | Settings | File Templates.
 */
var a = angular.module('git');

a.controller('myCtrl', ['$scope', '$cookies', '$location', '$rootScope', '$cookieStore', 'Database', '$timeout', 'base64', '$translate',function ($scope, $cookies, $location, $rootScope, $cookieStore, Database, $timeout, base64,$translate) {
    
     $rootScope.session1 = false;
    $rootScope.session = false;
    $scope.myVar = false;
    var obj;
    
    
       $scope.language='en';
    $scope.languages = ['en','hindi','russian','kannada','oriya','chineese','french'];

       $scope.updateLanguage = function() {
            $translate.use($scope.language);
        };

   

    Database.getNames().then(function (response) {


        obj = response.data;
        
    })
    $timeout(function () {

        if (Boolean($cookies.get('id_'))) {
            var cookieid = $cookies.get('id_');

            $scope.decoded = base64.decode(cookieid);
           




            for (a in obj) {
                if ($scope.decoded == obj[a]._id) {

                    $rootScope.headerhide = true;
                    $rootScope.session = true;
                    $rootScope.session1 = true;
                    $location.path('/home')




                }
            }
        }
    }, 100);
    //when the user click submit it goes here and validation part 
    $scope.submit = function (x, y) {

        $scope.emailid = x;
        $scope.password = y;
        if (x == undefined || y == undefined) {
            $location.path('/');

            $rootScope.headerhide = false;
        }
        //checking the username and password from the database
        else {

            for (z in obj) {
               

                if (obj[z].email == $scope.emailid && obj[z].password1 == $scope.password) {
                    var expireDate = new Date();

                    expireDate.setDate(expireDate.getDate() + 1);
                  

                    $scope.encoded = base64.encode(obj[z]._id);

                    $cookies.id = $scope.encoded;
                  
                    $cookies.put('id_', $cookies.id, {
                        'expires': expireDate
                    });



                    /*   $cookies.userName = $scope.emailid;
                       $cookies.password = $scope.password;
                       $cookies.put('name', $cookies.userName, {
                           'expires': expireDate
                       });
                       $cookies.put('password', $cookies.password, {
                           'expires': expireDate
                       });*/
                    $rootScope.headerhide = true;
                    $rootScope.session = true;
                    $rootScope.session1 = true;
                    $location.path('/home');
                    break;
                } else {

                    //for invalid user it ll show invalid user and password
                    $scope.myVar = true;
                    $scope.style = {
                        "color": "red"
                    };

                }

            }





        }


    }
    $scope.reg = function () {
        $location.path('/registartion');

    }
       }]);