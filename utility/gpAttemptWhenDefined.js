(function(_) {

	_.mixin({gpAttemptWhenDefined: gpAttemptWhenDefined});

	/**
	 * Little helper to invoke a function only if the provided property value is not undefined
	 *
	 * @param {string} path Property path in sbSettings
	 * @param {Function} callback Function that will be invoked with the obtained value
	 * @returns {undefined|*}
	 */
	function gpAttemptWhenDefined(object, path, callback) {

		var value = _.get(object, path);

		return _.isUndefined(value)
			? undefined
			: _.attempt(callback, value);
	}

})(_);
