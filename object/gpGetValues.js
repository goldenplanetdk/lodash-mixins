(function() {

	_.mixin({gpGetValues: gpGetValues});

	/**
	 * Creates an array of values at provided path
	 * Arguments are identical to {@link getObjectReferences}
	 *
	 * {@link getObjectReferences}
	 * @returns {Array} Values at `propetyPath`
	 */
	function gpGetValues(object, propertyPath, options) {

		options = options || {};

		var refs = _.getObjectReferences.apply(this, arguments);
		var paths = _.keys(refs);
		var values = _.map(paths, function(path) {
			return _.get(object, path);
		});

		return values;
	}

})();
