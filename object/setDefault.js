(function() {

	_.mixin({gpSetDefault: gpSetDefault});

	/**
	 * Set default value only if current value is undefined
	 * and return the current or new value (or object reference)
	 *
	 * @param {Object} object The object to query
	 * @param {string} path The path of the property to get
	 * @param {*} defaultValue Value that will be set if current is undefined
	 * @returns {*} Value or Object reference at path
	 */
	function gpSetDefault(object, path, defaultValue) {

		var descendant = _.get(object, path);

		if (descendant === undefined) {
			_.set(object, path, defaultValue);
		}

		return _.get(object, path);
	}

})();
