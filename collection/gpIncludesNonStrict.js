(function(_) {

	_.mixin({gpIncludesNonStrict: gpIncludesNonStrict});

	/**
	 * Same as `_.includes` except that
	 * non-strict equality comparison operator is used for comparison
	 *
	 * @see {@link _.includes}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_()}
	 *
	 * @example
	 *
	 * _.includes([1, 2, 3], '1');
	 * // => true
	 *
	 * _.includes({ 'user': 'fred', 'age': '40' }, 40);
	 * // => true
	 *
	 * _.includes([undefined], null);
	 * // => true
	 *
	 * _.includes([1], true);
	 * // => true
	 * 
	 * _.includes('', false);
	 * // => true
	 */
	function gpIncludesNonStrict(collection, value, fromIndex, guard) {

		collection = _.isArrayLike(collection)
			? collection
			: _.values(collection)
		;

		fromIndex = (fromIndex && !guard)
			? _.toInteger(fromIndex)
			: 0
		;

		var length = collection.length;

		if (fromIndex < 0) {
			fromIndex = _.max(length + fromIndex, 0);
		}

		if (_.isString(collection) && collection) {
			return (fromIndex <= length && collection.indexOf(value, fromIndex) > -1);
		}
		else if (_.isArray()) {
			return (!!length && baseIndexOf(collection, value, fromIndex) > -1);
		}
		else {
			return collection == value;
		}
	}

})(_);

