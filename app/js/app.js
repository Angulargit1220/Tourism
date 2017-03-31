var app=angular.module("git");
app.factory("contactFactory",function($resource){
    return $resource("/contactApi/data/:id",{
        id: '@_id'
    }, {
        update: {
            method:'PUT'
        }
    })
});
    


