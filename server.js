
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://10.10.10.204/tourism');
// mongoose.connection.on('error', function(){});

// Express
var app = express();

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/api'));

// Start server
var port = process.env.OPENSHIFT_NODEJS_PORT || 8088
, ip = process.env.OPENSHIFT_NODEJS_IP || "10.10.10.204";
app.listen(port, ip, function() {
  console.log('Express server listening on %d', port);
});
