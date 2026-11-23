/** @module canvasScreenshot */

import fileExtension from "file-extension";

/**
 * Get the MIME type
 *
 * @private
 * @param {string} filename
 * @returns {string}
 */
function getType(filename) {
  const ext = filename.includes(".") && fileExtension(filename);
  return `image/${ext === "jpg" ? "jpeg" : ext || "png"}`;
}

/**
 * Download in browser using a DOM link
 *
 * @private
 * @param {string} filename
 * @param {string} url
 */
function downloadURL(filename, url) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  const event = new MouseEvent("click");
  link.dispatchEvent(event);
}

/**
 * Encode a canvas to a Blob.
 *
 * @private
 * @param {HTMLCanvasElement | OffscreenCanvas} canvas
 * @param {string} type
 * @param {number} quality
 * @returns {Promise<Blob>}
 */
function toBlob(canvas, type, quality) {
  if (canvas.convertToBlob) return canvas.convertToBlob({ type, quality });

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) =>
        blob
          ? resolve(blob)
          : reject(
              new Error("canvas-screenshot: canvas could not be encoded."),
            ),
      type,
      quality,
    );
  });
}

/**
 * Take a screenshot as a Blob
 *
 * @private
 * @param {HTMLCanvasElement | OffscreenCanvas} canvas
 * @param {object} options
 * @param {string} options.filename
 * @param {string} options.type
 * @param {number} options.quality
 * @param {boolean} options.download
 * @returns {Promise<Blob>}
 */
async function screenshotBlob(canvas, { filename, type, quality, download }) {
  const blob = await toBlob(canvas, type, quality);

  if (download) {
    const url = URL.createObjectURL(blob);
    downloadURL(filename, url);

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1);
  }

  return blob;
}

/**
 * Take a screenshot. Setting `options.useBlob` to `true` will consequently make
 * the module async and return the latter. An `OffscreenCanvas` has no data URL:
 * it always returns a `Promise` resolving with a `Blob`.
 *
 * @param {HTMLCanvasElement | OffscreenCanvas} canvas The canvas element
 * @param {import("./types.js").CanvasScreenshotOptions} [options={}]
 * @returns {string | Promise<Blob>} A `DOMString` or a `Promise` resolving with
 *   a `Blob`.
 *
 *   Type is inferred from the filename extension:
 *
 *   - "png" for `"image/png"` (default)
 *   - "jpg/jpeg" for `"image/jpeg"`
 *   - "webp for" `"image/webp"`
 *
 * @alias module:canvasScreenshot
 */
function canvasScreenshot(canvas, options = {}) {
  const date = new Date();

  const {
    filename = `Screen Shot ${date.toISOString().slice(0, 10)} at ${date
      .toTimeString()
      .slice(0, 8)
      .replace(/:/g, ".")}.png`,
    type = getType(filename),
    quality = 1,
    useBlob,
    download = typeof document !== "undefined",
  } = {
    ...options,
  };

  if (useBlob || !canvas.toDataURL) {
    return screenshotBlob(canvas, { filename, type, quality, download });
  }

  const dataURL = canvas.toDataURL(type, quality);

  if (download) downloadURL(filename, dataURL);

  return dataURL;
}

export default canvasScreenshot;

export * from "./types.js";
