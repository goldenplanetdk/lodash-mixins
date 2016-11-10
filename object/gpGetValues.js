(function(_) {

	_.mixin({gpGetValues: gpGetValues});

	/**
	 * Creates an array of values at provided path
	 * Arguments are identical to {@link _.gpGetObjectReferences}
	 *
	 * {@link _.gpGetObjectReferences}
	 * @returns {Array} Values at `propetyPath`
	 */
	function gpGetValues(object, propertyPath, options) {

		var refs = _.gpGetObjectReferences.apply(this, arguments);
		var paths = _.keys(refs);

		var values = _.map(paths, function(path) {
			return _.get(object, path);
		});

		return values;
	}

})(_);
