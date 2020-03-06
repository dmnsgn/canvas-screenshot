const canvasScreenshot = require("./");
const createCanvasContext = require("canvas-context");

const width = 100;
const height = 100;
const { context } = createCanvasContext("2d", {
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

button.addEventListener("click", async () => {
  canvasScreenshot(context.canvas);
  await canvasScreenshot(context.canvas, {
    filename: "test-blob",
    useBlob: true
  });
  const dataURL = canvasScreenshot(context.canvas, {
    download: false
  });
  const blob = await canvasScreenshot(context.canvas, {
    filename: "test-blob",
    useBlob: true,
    download: false
  });
  console.log(dataURL, blob);

  // This is fine in Chromium
  // requestAnimationFrame(() => {
  //   canvasScreenshot(context.canvas, { filename: "test-filename" }),
  //     requestAnimationFrame(() => {
  //       canvasScreenshot(context.canvas, {
  //         filename: "test-filename-extension.jpg"
  //       });
  //       requestAnimationFrame(() => {
  //         canvasScreenshot(context.canvas, {
  //           filename: "test-type.png"
  //         });
  //         requestAnimationFrame(() => {
  //           canvasScreenshot(context.canvas, {
  //             filename: "test-quality.jpg",
  //             quality: 0.1
  //           });
  //         });
  //       });
  //     });
  // });

  const delayNeededWhenNotChromium = 1000

  setTimeout(
    () => canvasScreenshot(context.canvas, { filename: "test-filename" }),
    1 * delayNeededWhenNotChromium
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-filename-extension.jpg"
      }),
    2 * delayNeededWhenNotChromium
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-type.png"
      }),
    3 * delayNeededWhenNotChromium
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-quality.jpg",
        quality: 0.1
      }),
    4 * delayNeededWhenNotChromium
  );
});
