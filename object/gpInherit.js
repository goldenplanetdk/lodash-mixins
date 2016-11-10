(function(_) {

	_.mixin({gpInherit: gpInherit});

	/**
	 * Make specified subclass object to inherit properties
	 * from a prototype of the specified superclass object
	 *
	 * @see {@link https://github.com/lodash/lodash/issues/663}
	 *
	 * @param {Object} child
	 * @param {Object} base
	 * @param {Object} childProps
	 * @returns {Object} child
	 */
	function gpInherit(child, base, childProps) {

		var childPropsExtended = _.assign(
			{
				_super: base.prototype,
				constructor: child
			},
			childProps
		);

		child.prototype = _.create(base.prototype, childPropsExtended);

		return child;
	}

})(_);
