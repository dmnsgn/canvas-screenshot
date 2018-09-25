# canvas-screenshot [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm version](https://badge.fury.io/js/canvas-screenshot.svg)](https://www.npmjs.com/package/canvas-screenshot)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A one trick pony package to download an image from a canvas.

![](https://raw.githubusercontent.com/dmnsgn/canvas-screenshot/master/screenshot.gif)

## Installation

```bash
npm install canvas-screenshot
```

[![NPM](https://nodei.co/npm/canvas-screenshot.png)](https://nodei.co/npm/canvas-screenshot/)

## Usage

```js
const canvasScreenshot = require("canvas-screenshot");
const getCanvasContext = require("get-canvas-context");

const context = getCanvasContext("2d", {
  width: 100,
  height: 100
});

const button = document.createElement("button");
button.addEventListener("click", () => {
  canvasScreenshot(context.canvas);
});
```

## API

### `canvasScreenshot(canvas, options)`

| Option               | Type              | Default                                 | Description             |
| -------------------- | ----------------- | --------------------------------------- | ----------------------- |
| **canvas**           | HTMLCanvasElement |                                         | The canvas element      |
| **options.filename** | string?           | `Screenshot ${Date().toLocaleString()}` | File name               |
| **options.quality**  | number?           | 1                                       | Quality between 0 and 1 |

Type is inferred from the filename extension (jpg/jpeg) for `"image/jpeg"` and default to `"image/png"`.

## License

MIT. See [license file](https://github.com/dmnsgn/canvas-screenshot/blob/master/LICENSE.md).
