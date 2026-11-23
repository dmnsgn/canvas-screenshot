/**
 * @typedef {object} CanvasScreenshotOptions Options for canvas screenshot. All optional.
 * @property {string} [filename=Screen Shot YYYY-MM-DD at HH.MM.SS.png] File name.
 * @property {string} [type] MIME type. Inferred from the filename extension by default. Unsupported types are encoded as PNG, as per the HTML spec.
 * @property {number} [quality=1] Quality between 0 and 1.
 * @property {boolean} [useBlob=undefined] Use `canvas.toBlob` or `canvas.convertToBlob`. Always true for an `OffscreenCanvas`.
 * @property {boolean} [download] Automatically download the screenshot. Defaults to `true` when a DOM is available (`false` in workers).
 */

export {};
