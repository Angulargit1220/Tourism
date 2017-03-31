
// Dependencies
var expressview = require('express');
var routerview = expressview.Router();

//Product
var Productview = require('../models/viewuser');
Productview.methods(['get', 'put', 'post', 'delete']);
Productview.register(routerview, '/viewusers1');

// Return router
module.exports = routerview;