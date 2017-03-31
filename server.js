// Dependencies
//console.log("stage1");

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

//console.log("stage1");

mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/tourism');

// mongoose.connection.on('error', function(){});

// Express
var app = express();
//console.log("stage2");

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//console.log("stage3");

//how to give the respond from server//
app.get('/test/connection',function(req,res){
    
console.log('calling.....');  
    res.send('hi.....');
    
});

// Routes
app.use('/contactApi', require('./routes/contactAPI'));

// Start server
var port = process.env.OPENSHIFT_NODEJS_PORT || 9001,
    ip = process.env.OPENSHIFT_NODEJS_IP || "localhost";
//console.log("stage4");


app.listen(port, ip, function () {
    console.log('Express server listening on %d', port);
});