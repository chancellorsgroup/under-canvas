# under-canvas.js

> Plain sailing image previews, powered by canvas.

![npm](https://img.shields.io/npm/v/under-canvas.svg)
[![CircleCI](https://img.shields.io/circleci/project/github/njbmartin/preview-image.svg)](https://circleci.com/gh/njbmartin/preview-image)
[![GitHub issues](https://img.shields.io/github/issues/njbmartin/preview-image.svg)](https://github.com/njbmartin/preview-image/issues)
[![GitHub license](https://img.shields.io/github/license/njbmartin/preview-image.svg)](https://github.com/njbmartin/preview-image/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/njbmartin/preview-image.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fnjbmartin%2Fpreview-image)

`Canvas` can be extremely powerful when it comes to manipulating images, but there's a lot of complexity just to perform seemingly easy tasks.

**Under Canvas** makes it incredibly effortless to generate image previews from a number of different sources.

The function returns a `Promise`, which resolves to `base64` data URI.

## Installation

```sh
$ npm install --save under-canvas
```

### ES6 import:
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

## Planned features

- Custom thumbnail sizes
- Generating previews from `input[type=file]`
- Detect browser support for `Canvas`
- `nodeJS` support using `node-canvas`

## Contributing

Contributions are certainly welcome. Please take a look at any [existing issues](https://github.com/njbmartin/preview-image/issues).
