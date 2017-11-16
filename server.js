// External libraries
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// Internal libraries
const filesEndpoint = require('./server_modules/files');

//-------------------------------------------------------------------
// Tool initialization
//-------------------------------------------------------------------

// JSON parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route capturing
const router = express.Router();

//-------------------------------------------------------------------
// Define directories that a requester is allowed to access
// For the front-end only!
//-------------------------------------------------------------------
app.use(express.static('build'));

//-------------------------------------------------------------------
// Define captured api routes
//-------------------------------------------------------------------

// Register routes associated with the /api endpoint
router.get('/', (req, res) => {
	// Log the requesting IP addr
	console.log('API GET Request received');
	res.send('API GET Request Response');
	});

// Register routes associated with the /api/files endpoint
filesEndpoint.RegisterRoutes(router);

// Attach all routes to 'router' as sub-routes to '/api'
app.use('/api', router);

//-------------------------------------------------------------------
// Serve static react bundle
//-------------------------------------------------------------------
app.get('/', (req, res) => {
	// Send the main front-end bundle
	const options = {
		root: __dirname + '/build/'
	};

	res.sendFile('index.html', options);
});

//-------------------------------------------------------------------
// Start the server with the above configurations
//-------------------------------------------------------------------
app.listen(8080, () => {
	// Print server IP, port, other info
	console.log('Kijenzi-Kipakiaji is running on port 8080');
	console.log('Access in your browser via: ');
	console.log('    http://localhost/:8080');
});