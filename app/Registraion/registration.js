/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:43 AM
 * To change this template use File | Settings | File Templates.
 */

app.controller('mycntrl2', function ($scope, $location, $rootScope, mongoAPI, mongoHomeAPI) {
    $scope.checkQuestions = function (q, y) {
        $scope.customStyle = {};
        if (q != y) {

            $scope.customStyle.style = {
                "color": "red"
            };

            return true;
        } else {
            $scope.customStyle.style = {
                "color": "green"
            };
            return false;
        }
    }

    $scope.registerpage = function (data) {
        mongoAPI.save(data);
        $location.path('/');
    }
    $scope.registerpage2 = function (data) {
        alert(1);
        mongoHomeAPI.save(data);
        $location.path('/');
    }


    $scope.submit = function (user) {
        console.log(user.fname);

        if (user.fname == undefined || user.lname == undefined || user.email == undefined || user.phno == undefined || user.password1 == undefined) {
            $rootScope.user = false;
            $location.path('/registartion')
        } else {
            $rootScope.user = true;
            // console.log(user);
            // User.save(user);
            $location.path('/');
        }
    }
});