var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod, mod.exports), cb = null), mod.exports);

/*! file-extension v4.0.5 | (c) silverwind | BSD license */
var require_file_extension = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(m) {
		if (typeof exports === "object") module.exports = m();
		else if (typeof define === "function" && define.amd) define([], m);
		else this.fileExtension = m();
	})(function() {
		return function fileExtension(filename, opts) {
			if (!opts) opts = {};
			if (!filename) return "";
			var ext = (/[^./\\]*$/.exec(filename) || [""])[0];
			return opts.preserveCase ? ext : ext.toLowerCase();
		};
	});
}));

export default require_file_extension();
