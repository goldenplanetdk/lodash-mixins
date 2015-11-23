_.mixin({'getValues': getValues});

/**
 * Creates an array of values at provided path
 * Arguments are identical to {@link getObjectReferences}
 *
 * {@link getObjectReferences}
 * @returns {Array} Values at `propetyPath`
 */
function getValues(object, propertyPath, options = {}) {

	var refs   = _.getObjectReferences.apply(this, arguments),
		paths  = _.keys(refs),
		values = _.map(paths, (path) => {
			return _.get(object, path);
		});

	return values;
}
