# canvas-screenshot

[![npm version](https://img.shields.io/npm/v/canvas-screenshot)](https://www.npmjs.com/package/canvas-screenshot)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/canvas-screenshot)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/canvas-screenshot)](https://bundlephobia.com/package/canvas-screenshot)
[![dependencies](https://img.shields.io/librariesio/release/npm/canvas-screenshot)](https://github.com/dmnsgn/canvas-screenshot/blob/main/package.json)
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

Encode an `OffscreenCanvas` (always async). Browsers that can't encode WebP fall back to PNG:

```js
const offscreenCanvas = new OffscreenCanvas(256, 256);
// ...draw
const blob = await canvasScreenshot(offscreenCanvas, {
  filename: "image.webp",
  download: false,
});
```

## API

<!-- api-start -->

## Modules

<dl>
<dt><a href="#module_canvasScreenshot">canvasScreenshot</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CanvasScreenshotOptions">CanvasScreenshotOptions</a> : <code>object</code></dt>
<dd><p>Options for canvas screenshot. All
  optional.</p>
</dd>
</dl>

<a name="module_canvasScreenshot"></a>

## canvasScreenshot

<a name="exp_module_canvasScreenshot--canvasScreenshot"></a>

### canvasScreenshot(canvas, [options]) ⇒ <code>string</code> \| <code>Promise.&lt;Blob&gt;</code> ⏏

Take a screenshot. Setting `options.useBlob` to `true` will consequently make
the module async and return the latter. An `OffscreenCanvas` has no data URL:
it always returns a `Promise` resolving with a `Blob`.

**Kind**: Exported function
**Returns**: <code>string</code> \| <code>Promise.&lt;Blob&gt;</code> - A `DOMString` or a `Promise` resolving with
a `Blob`.

Type is inferred from the filename extension:

- "png" for `"image/png"` (default)
- "jpg/jpeg" for `"image/jpeg"`
- "webp for" `"image/webp"`

| Param     | Type                                                             | Default         | Description        |
| --------- | ---------------------------------------------------------------- | --------------- | ------------------ |
| canvas    | <code>HTMLCanvasElement</code> \| <code>OffscreenCanvas</code>   |                 | The canvas element |
| [options] | [<code>CanvasScreenshotOptions</code>](#CanvasScreenshotOptions) | <code>{}</code> |                    |

<a name="CanvasScreenshotOptions"></a>

## CanvasScreenshotOptions : <code>object</code>

Options for canvas screenshot. All
optional.

**Kind**: global typedef
**Properties**

| Name       | Type                 | Default                                                        | Description                                                                                                             |
| ---------- | -------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [filename] | <code>string</code>  | <code>&quot;Screenshot YYYY-MM-DD at HH.MM.SS.png&quot;</code> | File name. The default uses UTC time and an extension matching `type`.                                                  |
| [type]     | <code>string</code>  |                                                                | MIME type. Inferred from the filename extension by default. Unsupported types are encoded as PNG, as per the HTML spec. |
| [quality]  | <code>number</code>  | <code>1</code>                                                 | Quality between 0 and 1.                                                                                                |
| [useBlob]  | <code>boolean</code> |                                                                | Use `canvas.toBlob` or `canvas.convertToBlob`. Always true for an `OffscreenCanvas`.                                    |
| [download] | <code>boolean</code> |                                                                | Automatically download the screenshot. Defaults to `true` when a DOM is available (`false` in workers).                 |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/canvas-screenshot/blob/main/LICENSE.md).
