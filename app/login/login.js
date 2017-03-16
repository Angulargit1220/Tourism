/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:42 AM
 * To change this template use File | Settings | File Templates.
 */
var a = angular.module('git');

a.controller('myCtrl', ['$scope', '$cookies', '$location', '$rootScope', '$cookieStore', function ($scope, $cookies, $location, $rootScope, $cookieStore) {
    $rootScope.session1 = false;
    $rootScope.session = false;


    $scope.submit = function (x, y) {

        $scope.emailid = x;
        $scope.password = y;
        if (x == undefined || y == undefined) {
            $location.path('/');

            $rootScope.user = false;
        } else {

            $cookies.userName = $scope.emailid;
            $cookies.password = $scope.password
            $cookieStore.put('name', $cookies.userName);
            $cookieStore.put('password', $cookies.password);
            var cookieuser = $cookies.get('name');
            var cookiepassword = $cookies.get('password');



            $rootScope.user = true;
            $rootScope.session = true;
            $rootScope.session1 = true;
            $location.path('/home');
        }


    }
    $scope.reg = function () {
        $location.path('/registartion');

    }
       }]);