# canvas-screenshot

[![npm version](https://img.shields.io/npm/v/canvas-screenshot)](https://www.npmjs.com/package/canvas-screenshot)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/canvas-screenshot)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/canvas-screenshot)](https://www.npmjs.com/package/canvas-screenshot)
[![dependencies](https://img.shields.io/david/dmnsgn/canvas-screenshot)](https://github.com/dmnsgn/canvas-screenshot/blob/main/package.json)
[![types](https://img.shields.io/npm/types/canvas-screenshot)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/canvas-screenshot)](https://github.com/dmnsgn/canvas-screenshot/blob/main/LICENSE.md)

A one trick pony package to download an image from a canvas.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/canvas-screenshot/main/screenshot.gif)

## Installation

```bash
npm install canvas-screenshot
```

## Usage

```js
import canvasScreenshot from "canvas-screenshot";
import canvasContext from "canvas-context";

// Create
const { context, canvas } = canvasContext("2d", {
  width: 100,
  height: 100,
});

// Draw
context.fillStyle = "salmon";
context.fillRect(40, 40, 20, 20);

// Export
const button = document.createElement("button");
button.addEventListener("click", () => {
  canvasScreenshot(canvas);
});
```

## API

<!-- api-start -->

Auto-generated API content.

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/canvas-screenshot/blob/main/LICENSE.md).
