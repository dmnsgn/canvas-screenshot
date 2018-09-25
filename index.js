const fileExtension = require("file-extension");

let link = null;

function getType(filename) {
  const ext = fileExtension(filename);
  return ["jpg", "jpeg"].includes(ext) ? "image/jpeg" : "image/png";
}

function takeCanvasScreenshot(canvas, options = {}) {
  const date = new Date();

  const {
    filename = `Screen Shot ${date.toISOString().slice(0, 10)} at ${date
      .toTimeString()
      .slice(0, 8)
      .replace(/:/g, ".")}.png`,
    quality = 1
  } = {
    ...options
  };

  link = link || document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL(`${getType(filename)};base64`, quality);

  const event = new MouseEvent("click");
  link.dispatchEvent(event);
}

module.exports = takeCanvasScreenshot;
