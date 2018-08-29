const defaultOptions = {
  format: null,
  quality: 0.9,
  width: null,
  height: null,
  target: null,
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
    let clipX = 0;
    let clipY = 0;
    let cropW = canvas.width;
    let cropH = canvas.height;
    if (image.width > image.height) {
      const scale = (image.width / image.height);
      cropW = canvas.width * scale;
      clipX = (image.width - image.height) / 2;
    } else if (image.width < image.height) {
      const scale = (image.height / image.width);
      cropH = canvas.height * scale;
      clipY = (image.height - image.width) / 2;
    }

    ctx.drawImage(
      image,
      clipX,
      clipY,
      image.width,
      image.height,
      image.x || 0,
      image.y || 0,
      cropW,
      cropH,
    );

    if (opts.target) {
      document.getElementById(opts.target).appendChild(canvas);
    }
    return canvas.toDataURL(opts.format, opts.quality);
  });
};

export default UnderCanvas;
