/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:43 AM
 * To change this template use File | Settings | File Templates.
 */

app.controller('mycntrl2', function ($scope, $location, $rootScope, User,mongoHomeAPI) {
    //User is a factory 
    $scope.User = new User();
    var refresh = function () {

        $scope.User = User.query();
        $scope.User = "";
    }
    refresh();
    //this function check that both the password are matching or not
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
  
        //when the user register it goes here
    $scope.submit = function (user) {


        if (user.fname == undefined || user.lname == undefined || user.email == undefined || user.phno == undefined || user.password1 == undefined) {
            $rootScope.headerhide = false;
            alert("registraion failed");
            $location.path('/registartion');
        } else {

            $rootScope.headerhide = false;
            User.save(user);
           
            
                //this save the data to the mangodb using  a factory.

                $location.path('/');
           
        }

    }

});