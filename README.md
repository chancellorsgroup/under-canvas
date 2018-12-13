# under-canvas.js

> Plain sailing image previews, powered by canvas.

[![npm](https://img.shields.io/npm/v/under-canvas.svg)](https://www.npmjs.com/package/under-canvas)
[![CircleCI](https://img.shields.io/circleci/project/github/njbmartin/under-canvas.svg)](https://circleci.com/gh/njbmartin/under-canvas)
[![GitHub issues](https://img.shields.io/github/issues/njbmartin/under-canvas.svg)](https://github.com/njbmartin/under-canvas/issues)
[![GitHub license](https://img.shields.io/github/license/njbmartin/under-canvas.svg)](https://github.com/njbmartin/under-canvas/blob/master/LICENSE)

---

`Canvas` can be extremely powerful when it comes to manipulating images, but there's a lot of complexity just to perform seemingly easy tasks.

**Under Canvas** makes it incredibly effortless to generate image previews from a number of different sources.

The function returns a `Promise`, which resolves to `base64` data URI.

---

## Installation

```sh
npm install --save under-canvas
```

### ES6 import

```js
import underCanvas from 'under-canvas';
```

Alternatively, you can use it directly in the browser:

```html
<script type='http://unpkg.com/under-canvas'></script>
```

`underCanvas` is directly attached to the window:

```js
window.underCanvas()
```

---

## Usage

### External URL

> Note that manipulating images from a remote source requires `Access-Control-Allow-Origin` to be set.

```js
underCanvas('http://localhost:8080/image.jpg').then((b64) => {
  const img = document.createElement('img');
  img.src = b64;
  document.getElementById('root').appendChild(img);
})
```

### Base-64 encoded image

```js
underCanvas('data:image/png;base64,...').then((b64) => {
  const img = document.createElement('img');
  img.src = b64;
  document.getElementById('root').appendChild(img);
})
```

## API Usage

### underCanvas(*image*, *[options]*)

Returns a `Promise` which resolves a `base64` string of the preview.

#### format

Type: `string`
Default: `image/png`

Format of the image to export.

> Supports a number of different image formats (dependant on browser). eg. `image/jpeg` and `image/png` are supported by all browsers, but **Chrome** also supports `image/webp`.

#### quality

Type: `number`
Default: `0.9`

#### width

Type: `number`

Width of the exported image.

> Defaults to original size.

#### height

Type: `number`

Height of the exported image.

> Defaults to original size.

#### crop

Type: `boolean`
Default: `false`

Resizes the image to fill the size and crops excess edges.

> By default, the original image will be resized to fit within the specified size, ensuring the image is fully visible and no cropping occurs. If crop is set to `true`, the image will be resized to ensure that the width and height are greater than or equal to the expected size.

## Planned features

- Generating previews from `input[type=file]`
- Detect browser support for `Canvas`
- `nodeJS` support using `node-canvas`

## Contributing

Contributions are certainly welcome. Please take a look at any [existing issues](https://github.com/njbmartin/preview-image/issues).
