(function(_) {

	_.mixin({gpDifferenceDeep: gpDifferenceDeep});

	/**
	 * Creates an object with unique properties not included in the other object
	 *
	 * @param {Object} object The object to inspect
	 * @param {Object} object The object with identical properties that must be excluded
	 * @returns {Object} Object references with paths as keys
	 */
	function gpDifferenceDeep(object, objectExcludeSame) {

		// return an empty object when the operands are same or when the object is null
		if (!_.isObject(object) || _.isEqual(object, objectExcludeSame)) {
			return _.isArray(object) ? [] : {};
		}

		// object that will contain the differences
		var diff = _.cloneDeep(object);

		if (!_.isObject(objectExcludeSame)) {
			return diff;
		}

		function deleteEqual(parent, parentCompared) {

			if (typeof parent != 'object') {
				return;
			}

			_.forOwn(parent, function (child, key) {

				// leave unique property that is not exist in the compared object
				if (false === _.has(parentCompared, key)) {
					return;
				}

				var childCompared = parentCompared[key];

				// delete same property so that only different properties will remain
				if (_.isEqual(child, childCompared)) {
					delete parent[key];
					return;
				}

				deleteEqual(child, childCompared)
			});
		}

		deleteEqual(diff, objectExcludeSame);

		return diff;
	}
	
})(_);
