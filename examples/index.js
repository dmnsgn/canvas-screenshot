import canvasScreenshot from "../index.js";

import canvasContext from "canvas-context";

let width = 512;
let height = 512;
const { context } = canvasContext("2d", {
  width,
  height,
});

const mainElement = document.querySelector("main");
mainElement.appendChild(context.canvas);

context.fillRect(0, 0, width, height);

context.lineWidth = width * 0.004;
context.strokeStyle = `${window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--color-accent")}`;

const margin = width * 0.2;
width -= margin;
height -= margin;
const divisions = 12;
const size = width / divisions;

context.translate(margin / 2, margin / 2);

for (let i = 0; i < divisions; i++) {
  const ny = i / divisions;
  for (let j = 0; j < divisions; j++) {
    const nx = j / divisions;
    const noise = 1.4 * (Math.random() - 0.5) * ny;
    context.save();
    context.translate(nx * width + size / 2, ny * height + size / 2);
    context.rotate((Math.PI / 4) * noise);
    context.translate(-size / 2, -size / 2);
    context.strokeRect(0, 0, size, size);
    context.restore();
  }
}

const button = document.createElement("button");
button.innerText = "Takes screenshots";
mainElement.appendChild(button);

button.addEventListener("click", async () => {
  canvasScreenshot(context.canvas);
  await canvasScreenshot(context.canvas, {
    filename: "test-blob",
    useBlob: true,
  });
  const dataURL = canvasScreenshot(context.canvas, {
    download: false,
  });
  const blob = await canvasScreenshot(context.canvas, {
    filename: "test-blob",
    useBlob: true,
    download: false,
  });
  console.log(dataURL, blob);

  const dataURLJpg = canvasScreenshot(context.canvas, {
    download: false,
    type: "image/jpeg",
  });
  const blobJpg = await canvasScreenshot(context.canvas, {
    filename: "test-blob",
    useBlob: true,
    download: false,
    type: "image/jpeg",
  });
  console.log(dataURLJpg, blobJpg);

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

  const delayNeededWhenNotChromium = 1000;

  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-filename-default",
      }),
    1 * delayNeededWhenNotChromium,
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-filename-extension.jpg",
      }),
    2 * delayNeededWhenNotChromium,
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-filename-extension.webp",
      }),
    3 * delayNeededWhenNotChromium,
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-filename-extension.png",
      }),
    4 * delayNeededWhenNotChromium,
  );
  setTimeout(
    () =>
      canvasScreenshot(context.canvas, {
        filename: "test-quality.jpeg",
        quality: 0.1,
      }),
    5 * delayNeededWhenNotChromium,
  );
});
