// Dependencies
var restful1 = require('node-restful');
var mongoose1 = restful1.mongoose;

// Schema
var homeSchema = new mongoose1.Schema({

    id: Number,
    name: String,
    img_path: String,
    info: String

});
console.log('module', module);
// Return model
module.exports = restful1.model('home', homeSchema);