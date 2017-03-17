// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Product = require('../models/mongoPattern');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/data');

console.log('module', module);
// Return router
module.exports = router;