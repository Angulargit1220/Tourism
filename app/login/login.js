/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:42 AM
 * To change this template use File | Settings | File Templates.
 */
var a = angular.module('git');

a.controller('myCtrl', ['$scope', '$cookies', '$location', '$rootScope', '$cookieStore', 'Database', '$timeout', 'base64','View', 'ViewDatabase', function ($scope, $cookies, $location, $rootScope, $cookieStore, Database, $timeout, base64, View, ViewDatabase) {

    $rootScope.session1 = false;
    $rootScope.session = false;
    $scope.myVar = false;
    var obj;
    var noofviews;





    Database.getNames().then(function (response) {


        obj = response.data;


    })

    ViewDatabase.getvalues().then(function (response) {


        noofviews = response.data;


    })
    $timeout(function () {
        console.log(obj);
        console.log(noofviews);
         $rootScope.views=noofviews;

    }, 1000)
   

    $timeout(function () {

        if (Boolean($cookies.get('id_'))) {
            var cookieid = $cookies.get('id_');

            $scope.decoded = base64.decode(cookieid);





            for (a in obj) {
                if ($scope.decoded == obj[a]._id) {

                    $rootScope.headerhide = true;
                    $rootScope.session = true;
                    $rootScope.session1 = true;
                    var t= noofviews[0]._id
                        var no = noofviews[0].view

                        noofviews[0].view = no + 1;
                        console.log(noofviews[0].view);
                        View.update({ id:t }, {view:noofviews[0].view});
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
                   console.log(obj);


                if (obj[z].email == $scope.emailid && obj[z].password1 == $scope.password) {
                 
                    var expireDate = new Date();

                    expireDate.setDate(expireDate.getDate() + 1);


                    $scope.encoded = base64.encode(obj[z]._id);

                    $cookies.id = $scope.encoded;

                    $cookies.put('id_', $cookies.id, {
                        'expires': expireDate
                    });
                    $rootScope.headerhide = true;
                    $rootScope.session = true;
                    $rootScope.session1 = true;
                    if (noofviews == 0) {

                        $scope.View = new View();
                        var refresh = function () {

                            $scope.View = User.View();
                            $scope.View = "";
                        }
                        var Views = {
                            view: 1
                        };

                        View.save(Views);
                        $location.path('/home');
                    } else {
                      var t= noofviews[0]._id
                        var no = noofviews[0].view

                        noofviews[0].view = no + 1;
                        console.log(noofviews[0].view);
                        View.update({ id:t }, {view:noofviews[0].view});
                        $location.path('/home');
                        break;
                    }
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