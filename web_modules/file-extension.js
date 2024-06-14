import { g as getDefaultExportFromCjs } from './_chunks/_commonjsHelpers-BFTU3MAI.js';

var fileExtension$1 = {exports: {}};

(function(module, exports) {
    (function(m) {
        {
            module.exports = m();
        }
    })(function() {
        return function fileExtension(filename, opts) {
            if (!opts) opts = {};
            if (!filename) return "";
            var ext = (/[^./\\]*$/.exec(filename) || [
                ""
            ])[0];
            return opts.preserveCase ? ext : ext.toLowerCase();
        };
    });
})(fileExtension$1);
var fileExtensionExports = fileExtension$1.exports;
var fileExtension = /*@__PURE__*/ getDefaultExportFromCjs(fileExtensionExports);

export { fileExtension as default };
