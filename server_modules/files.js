/*
 * This file should serve as the hub for the /api/files endpoint.
 *
 * This API should loosely follow REST.
 * eg. /api/{some_collection}/{particular_resource}/etc
 * 	collections and resources can be nested as it makes sense
 *
 */
// Internal libraries
const dataFetcher = require('./data-fetch');

const ENDPOINT_URI = '/files';

/**
 * Register all routes and their supported HTTP request methods
 * @param  {express.Router()} router Initialized express router to attach routes to
 */
module.exports.RegisterRoutes = (router) => {

	/**
	 * /api/files endpoint
	 *
	 * @methods: GET, POST
	 * @schema dataFetcher::Files
	 */
	router.get(ENDPOINT_URI, (req, res) => {
		const success = ENDPOINT_URI + ': API GET Request received';
		console.log(success);
		res.json({ message: success });
	});

	router.post(ENDPOINT_URI, (req, res) => {
		const success = ENDPOINT_URI + ': API POST Request received';
		console.log(success);
		res.json({ message: success});
	});

	/**
	 * /api/files/:file_uid endpoint
	 *
	 * @methods: GET, PATCH, DELETE
	 * @schema dataFetcher::File
	 */
}