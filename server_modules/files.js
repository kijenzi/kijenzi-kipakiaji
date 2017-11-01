/**
 * This file should serve as the hub for the /api/files endpoint.
 *
 * This API should loosely follow REST.
 * eg. /api/{some_collection}/{particular_resource}/etc
 * 	collections and resources can be nested as it makes sense
 *
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