document.getElementById('image').addEventListener('change', (el) => {
  const file = el.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const url = event.target.result;
    window.UnderCanvas(url, { width: 400, height: 400, target: 'canvas' }).then((b64) => {
      const img = document.createElement('img');
      img.src = b64;
      document.getElementById('root').appendChild(img);
    });
  };
  reader.readAsDataURL(file);
});
