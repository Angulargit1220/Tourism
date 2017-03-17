// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phNo: String,
    pass: String
});
console.log('module', module);
// Return model
module.exports = restful.model('tourism_register', productSchema);