_.mixin({'parsePOJO': parsePOJO});

/**
 * Parse Plain Old Javascript Objects
 *
 * @param {string} string
 * @returns {*|Object}
 */
function parsePOJO(string) {

	if (typeof string != 'string') return string;

	string = string.trim();

	var object,
		hasOpening = /^\s*[{\[]/.test(string),
		hasClosing = /[}\]]\s*;?\s*$/.test(string);

	if (hasOpening && hasClosing) {
		object = (new Function('return ' + string))();
	} else {
		object = (new Function("return {" + string + "}"))();
	}

	return object;
}
