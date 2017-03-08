/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:43 AM
 * To change this template use File | Settings | File Templates.
 */

app.controller('mycntrl2',function($scope,$location)
{  
   
    $scope.checkQuestions=function(q,y)
    {
        $scope.customStyle = {};
        if (q!=y) {

            $scope.customStyle.style = {"color":"red"};

            return true;
        }
        else {
            $scope.customStyle.style = {"color":"green"};
            return false;
        }
    }
    $scope.submit=function(user)
    {        console.log(user.fname);

        if(user.fname==undefined||user.lname==undefined||user.email==undefined|| user.phno==undefined|| user.password1==undefined)
        {

         $location.path('/registartion')
        }
       else{
           // console.log(user);
          // User.save(user);
        $location.path('/home');
        }
    }


});