/**
 * A platform agnostic data fetcher.
 *
 * Provides a reliable internal API for kijenzi-kipakiaji's server_modules
 * so that a given data platform does not leave a large signature on
 * the codebase.
 *
 * Written out of concern for cloud-platform dependence. For example,
 * the server can initially be configured to operate with Firebase
 * and then easily be swapped out with MongoDB later if pricing
 * becomes a concern.
 */

//-------------------------------------------------------------------
// Define functions and their schema
//-------------------------------------------------------------------

/*
 * Data Items (Collections/Resources) and Schemas
 *
 * Each data item should be defined by its fetch function and its
 * expected return value schema.
 *
 * These schemas can be used to validate that each data item returns
 * expected data.
 */

/**
 * Given a user_ID, return user information
 * @type {Object}
 */
const UserInfo = {
	fetch: (user_ID) => {
		// Plug in platform specific data retrieval logic
	},
	schema: {
		username: 'string',
		admin: 'boolean'
	}
};
module.exports.GetUserInfo = UserInfo.fetch;

/**
 * Given a filter, return uploaded files
 *
 * Notable schema features:
 *  files: this property contains an array of 'FileMeta'.
 * 	 See 'FileMeta' definition
 *  filter: this property contains query filters to be applied
 *   on the retrieval of the files collection
 *
 * @type {Object}
 */
const Files = {
	get: (filter) => {
		// Plug in platform specific data retrieval logic
	},
	schema: {
		files: 'array', // See: FileMeta
		filter: {
			limit: 'int',
			start_index: 'int'
		}
	}
};
module.exports.GetFileCollection = Files.fetch;

/**
 * Simple schema for file meta information
 * @type {Object}
 */
const FileMeta = {
	schema: {
		name: 'string',
		size: 'string',
		thumb_uri: 'string'
	}
};

/**
 * Given a file_ID, return information about an uploaded file
 *
 * Notable schema features:
 *  variables: (optional) this property contains an array of
 *   'FileVariable'. See 'FileVariable' definition.
 *
 * @type {Object}
 */
const File = {
	get: (file_ID) => {
		// Plug in platform specific data retrieval logic
	},
	set: (File) => {
		// Plug in platform specific data saving logic
	},
	schema: {
		name: 'string',
		size: 'string',
		thumb_uri: 'string',
		file_URI: 'string',
		variables: 'array' // See: FileVariable
	}
};
module.exports.GetFileResource = File.fetch;

/**
 * Simple schema for file variables
 *
 * File variables are properties of a file that can be modified
 * before downloading.
 *
 * Notable schema features:
 *  type: (optional) the string 'input' or 'checkbox'.
 *   this choice determines the primitive type of the property
 *   'value'.
 *  value: the default value of a given property. Can be an int value
 *   of physical type 'unit' or a toggleable boolean.
 *  minimum_value (optional): Appears if type === 'input'
 *  maximum_value (optional): Appears if type === 'input'
 *
 * @type {Object}
 */
const FileVariable = {
	schema: {
		name: 'string',
		description: 'string',
		type: 'string',
		value: 'int || boolean',
		minimum_value: 'number',
		maximum_value: 'number'
	}
};
