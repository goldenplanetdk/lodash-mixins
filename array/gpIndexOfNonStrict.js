(function(_) {

	_.mixin({gpIndexOfNonStrict: gpIndexOfNonStrict});

	/**
	 * Same as `_.indexOf` except that non-strict equality operator is used for comparison
	 *
	 * @see {@link _.indexOf}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_()}
	 *
	 * @example
	 *
	 * _.indexOf([1, 2, 1, 2], '2');
	 * // => 1
	 */
	function gpIndexOfNonStrict(array, value, fromIndex) {

		var length = array ? array.length : 0;

		if (!length) {
			return -1;
		}

		fromIndex = _.toInteger(fromIndex);

		if (fromIndex < 0) {
			fromIndex = _.max(length + fromIndex, 0);
		}

		var index = fromIndex - 1;

		while (++index < length) {

			if (array[index] == value) {
				return index;
			}
		}

		return -1;
	}

})(_);

