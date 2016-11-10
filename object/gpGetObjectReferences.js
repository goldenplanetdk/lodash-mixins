(function(_) {

	_.mixin({gpGetObjectReferences: gpGetObjectReferences});

	/**
	 * Creates an array of object references
	 * that contain values at `propertyPath` and are not undefined
	 *
	 * @param {Object} object The object to query
	 * @param {string} path The path of the property to get
	 * @param {Object} options
	 * @param {boolean} options.recursive Search for the property inside found objects
	 * @returns {Object} Object references with paths as keys
	 */
	function gpGetObjectReferences(object, propertyPath, options) {

		options = options || {};

		var objects = {};

		function findObjects(descendant, path) {

			if (!_.isObject(descendant)) return;

			if (_.get(descendant, propertyPath) !== undefined) {

				var pathDescendant = path
					? path + '.' + propertyPath
					: propertyPath;

				objects[pathDescendant] = descendant;

				if (!options.recursive) {
					return;
				}
			}

			_.forOwn(descendant, function(child, key) {

				var pathChild = path
					? path + '.' + key
					: key;

				findObjects(child, pathChild);
			});
		}

		findObjects(object, '');

		return objects;
	}

})(_);
