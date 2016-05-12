(function() {

	_.mixin({gpParsePOJO: gpParsePOJO});

	/**
	 * Parse Plain Old Javascript Objects
	 *
	 * @param {string} string
	 * @returns {*|Object}
	 */
	function gpParsePOJO(string) {

		if (typeof string != 'string') return string;

		string = string.trim();

		var object;
		var hasOpening = /^\s*[{\[]/.test(string);
		var hasClosing = /[}\]]\s*;?\s*$/.test(string);

		if (hasOpening && hasClosing) {
			object = (new Function('return ' + string))();
		} else {
			object = (new Function("return {" + string + "}"))();
		}

		return object;
	}

})();
