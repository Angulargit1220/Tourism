//Dependencies

var express=require('express');
var router=express.Router();

var product=require('../models/contact');
product.methods(['get','put','post','delete']);
product.register(router,'/data');
   console.log('hello.......');
/*router.post('/data',function(res,req){
   console.log('hi.......'); 
   console.log(req); 
   console.log(res); 
})*/




//return router
module.exports=router;