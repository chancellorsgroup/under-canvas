# under-canvas.js

> Plain sailing image previews, powered by canvas.

`Canvas` can be extremely powerful when it comes to manipulating images, but there's a lot of complexity just to perform seemingly easy tasks.

**Under Canvas** makes it incredibly simple to generate image previews (thumbnails) from a number of different sources.

The function returns a `Promise` which resolves to `base64` data URI.

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

`underCanvas` is attached to the window:

```js
window.underCanvas()
```

## Usage



### External URL

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
