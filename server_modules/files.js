/**
 * This file should serve as the hub for the /api/files endpoint.
 *
 * This API should loosely follow REST.
 * eg. /api/{some_collection}/{particular_resource}/etc
 * 	collections and resources can be nested as it makes sense
 *
 * Draft 'file' schema:
 * {
				name: (string) The name of the file,
				size: (string) The filesize, with units preferably,
				thumb_URI: (string) The location of the file's image,
				file_URI: (string) Link to the un-modified file location
				variables (optional): (array[object]) configurable parameters that will
					 be converted into a Form input.
					 Each object should contain the following properties:
					 {
						name: (string) The variable's name / input label,
						description: (string) Description of the variable,
						unit: (string) The unit of the variable's value,
						min (optional): (int) If value is of type 'number', the min
							possible value of that number,
						max (optional): (int) If value is of type 'number', the max
							possible value of that number,
						type: (string) 'number' or 'checkbox',
						value: (type) the default / current value
					 }
* }
* Here are some incomplete examples of the functionality we should handle.
*
* /api/files
* Requests: GET, POST
* 	GET: Return a listing of files
* 		RESPONSE JSON: {
* 			files: [
* 				{
* 					name: "Some File",
* 					size: "123kb",
* 					file_URI: "/api/files/{file:uid}/download"
* 			  		thumb_URI: "/api/files/{file:uid}/thumb"
* 				}
* 			]
* 		}
* 	POST:
* 		Figure out how to handle single file uploads. https://coligo.io/building-ajax-file-uploader-with-node/
* 		looks very useful
*
*
* /api/files/{file:uid}
* Requests: GET
* 	GET: Return a particular file's metadata
* 		RESPONSE JSON: {
* 			file: {
* 				name: "Some File",
* 				size: "123kb",
* 				file_URI: "/api/files/{file:uid}/download',
* 				thumb_URI: "/api/files/{file:uid}/thumb"
* 			}
* 		}
*/
const ENDPOINT_URI = '/files';

/**
 * Register all routes and their supported HTTP request methods
 * @param  {express.Router()} router Initialized express router to attach routes to
 */
module.exports.RegisterRoutes = (router) => {

	/**
	 * /api/files endpoint
	 * @methods: GET, POST
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
	 * /api/files/:file_uid
	 * @methods: GET, PATCH, DELETE
	 */
}