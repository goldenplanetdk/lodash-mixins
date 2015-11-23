// Require mixins from subdirectories
var requireContext = require.context('.', true, /^\.\/.*\/.*\.js$/);
requireContext.keys().map((path) => {
	requireContext(path);
});
