const defaultOptions = {
  format: 'image/png',
  quality: 0.9,
  width: null,
  height: null,
};

const getImage = source => new Promise((resolve, reject) => {
  console.log(source);
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onerror = () => reject(new Error('unable to load image'));
  img.onload = () => resolve(img);
  img.src = source;
});

const imagePreview = (source = null, options = {}) => {
  const opts = { ...options, ...defaultOptions };
  console.log('here');
  const canvas = document.createElement('canvas');
  console.log(canvas);
  return getImage(source).then((image) => {
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, image.x || 0, image.y || 0);
    console.log(canvas);
    return canvas.toDataURL(opts.format, opts.quality);
  });
};

export default imagePreview;
