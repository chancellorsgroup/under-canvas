const defaultOptions = {
  background: 'white',
  crop: false,
  format: null,
  height: null,
  quality: 0.9,
  target: null,
  width: null,
};

const getImage = source => new Promise((resolve, reject) => {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onerror = () => reject(new Error('unable to load image'));
  img.onload = () => resolve(img);
  img.src = source;
});

const UnderCanvas = (source = null, options = defaultOptions) => {
  const opts = { ...defaultOptions, ...options };
  const canvas = document.createElement('canvas');
  return getImage(source).then((image) => {
    const ctx = canvas.getContext('2d');
    canvas.width = opts.width || image.width;
    canvas.height = opts.height || image.height;

    let posX = 0;
    let posY = 0;
    let cropW = canvas.width;
    let cropH = canvas.height;

    const heightScale = image.height / canvas.height;
    const widthScale = image.width / canvas.width;

    // ensure the image fits
    if (opts.crop) {
      if (widthScale < heightScale) {
        cropW = canvas.width;
        cropH = image.height / widthScale;
        posY = (canvas.height - cropH) / 2;
      } else if (widthScale > heightScale) {
        cropH = canvas.height;
        cropW = image.width / heightScale;
        posX = (canvas.width - cropW) / 2;
      }
    } else if (widthScale > heightScale) {
      cropW = canvas.width;
      cropH = image.height / widthScale;
      posY = (canvas.height - cropH) / 2;
    } else if (widthScale < heightScale) {
      cropH = canvas.height;
      cropW = image.width / heightScale;
      posX = (canvas.width - cropW) / 2;
    }
    ctx.fillStyle = options.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      posX,
      posY,
      cropW,
      cropH,
    );

    if (opts.target) {
      document.getElementById(opts.target).appendChild(image);
    }
    return canvas.toDataURL(opts.format, opts.quality);
  });
};

export default UnderCanvas;
