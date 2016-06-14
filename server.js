// Module dependencies.
var application_root = __dirname,
	express = require('express'), // Web Framework
	bodyParser = require('body-parser'), // Parser for reading request body
	path = require('path'), // Utilities dealing with file paths
	mongoose = require('mongoose'); // MongoDB integration

// Create Server
var app = express();

// Where to serve the static content
app.use(express.static(__dirname + '/'));
//app.use(express.static(path.join(application_root,'../','site')));
app.use(bodyParser.json());

// Start Server
var port = 4711;

app.listen(port, function() {
	console.log('Express Server listening on port %d in %s mode', port, app.settings.env);
});