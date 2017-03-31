var restful1 = require('node-restful');
var mongoose1 = restful1.mongoose;

// Schema
var viewSchema = new mongoose1.Schema({
    view: Number
  
});

// Return model

module.exports = restful1.model('tourism_views', viewSchema);