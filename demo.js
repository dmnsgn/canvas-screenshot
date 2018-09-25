const canvasScreenshot = require("./");
const getCanvasContext = require("get-canvas-context");

const width = 100;
const height = 100;
const context = getCanvasContext("2d", {
  width,
  height
});

document.body.appendChild(context.canvas);
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";

context.fillRect(0, 0, width, height);

context.fillStyle = "salmon";
context.fillRect(40, 40, 20, 20);

const button = document.createElement("button");
button.style.marginTop = "10px";
button.innerText = "Takes screenshots";
document.body.appendChild(button);

button.addEventListener("click", () => {
  canvasScreenshot(context.canvas);

  setTimeout(
    () => canvasScreenshot(context.canvas, { filename: "test-filename" }),
    100
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-filename-extension.jpg"
      }),
    200
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-filename-type.png"
      }),
    300
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-filename-quality.jpg",
        quality: 0.1
      }),
    400
  );
});
