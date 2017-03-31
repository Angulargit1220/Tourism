
/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/21/16
 * Time: 1:59 PM
 * To change this template use File | Settings | File Templates.
 */
var app = angular.module("git");
app.factory('User', function ($resource) {
    return $resource('/api/users1/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    })
});
app.factory('View', function ($resource) {
    return $resource('/viewapi/viewusers1/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    })
});
angular.module("git").factory('Database', ['$http', function ($http) {


    var dataFactory = {};
    dataFactory.getNames = function () {
        return $http.get('/api/users1');
    }
    return dataFactory;
}]);
angular.module("git").factory('ViewDatabase', ['$http', function ($http) {


    var viewdataFactory1 = {};
    viewdataFactory1.getvalues = function () {
        return $http.get('/viewapi/viewusers1');
    }
    return viewdataFactory1;
}]);

app.factory("contactFactory",function($resource){
    return $resource("/contactApi/data/:id",{
        id: '@_id'
    }, {
        update: {
            method:'PUT'
        }
    })
});

app.factory('mongoHomeAPI', function ($resource) {
    return $resource('/homeapi/homedata:id', {
        id: '@_id'
    }, {
        update: { // We need to define this method manually as it is not provided with ng-resource
            method: 'PUT'
        }
    });
});
    



