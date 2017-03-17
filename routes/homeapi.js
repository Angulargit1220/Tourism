// Dependencies
var expressHome = require('express');
var routerHome = expressHome.Router();

//Product
var ProductHome = require('../models/homeMongoPattern');
ProductHome.methods(['get', 'put', 'post', 'delete']);
ProductHome.register(routerHome, '/homedata');

console.log('module', module);
// Return router
module.exports = routerHome;