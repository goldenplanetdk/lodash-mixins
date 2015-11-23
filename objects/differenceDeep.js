_.mixin({'differenceDeep': differenceDeep});

/**
 * Creates an object with unique properties not included in the other object
 *
 * @param {Object} object The object to inspect
 * @param {Object}object The object with identical properties that must be excluded
 * @param {string} path The starting path of the property to get
 * @returns {Object} Object references with paths as keys
 */
function differenceDeep(object, objectExcludeSame, initialPath) {

	// return an empty object when the operands are same or when the object is null
	if (_.isEqual(object, objectExcludeSame) || !_.isObject(object)) {
		return _.isArray(object) ? [] : {};
	}

	if (!_.isObject(objectExcludeSame)) {
		return object;
	}

	function deleteEqual(parent, parentExclude) {

		_.forOwn(parent, function(child, key) {

			// leave unique property
			if (!_.has(parentExclude, key)) return;

			var childExclude = parentExclude[key];

			// delete same property so that only different properties will remain
			if (_.isEqual(child, childExclude)) {
				delete parent[key];
				return;
			}

			deleteEqual(child, childExclude)
		});
	}

	// object that will have the differences
	var diff = _.cloneDeep(object);
	deleteEqual(diff, objectExcludeSame);

	return diff;
}
