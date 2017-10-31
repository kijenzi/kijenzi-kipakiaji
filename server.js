const express = require('express');
const app = express();

// Define directories that a requester is allowed to access
app.use(express.static('build'));

// Define captured routes
app.get('/', (req, res) => {
	// Send the main front-end bundle
	const options = {
		root: __dirname + '/build/'
	};

	res.sendFile('index.html', options);
})

app.get('/api', (req, res) => {
	// Log the requesting IP addr
	console.log('API GET Request received');
	res.send('API GET Request Response');
});

app.post('/api', (req, res) => {
	// Log the requesting IP addr
	console.log('API POST Request received');
	res.send('API POST Request Response');
});

// Start the server with the above configurations
app.listen(8080, () => {
	// Print server IP, port, other info
	console.log('Filehub is running on port 8080');
});