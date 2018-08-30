document.getElementById('image').addEventListener('change', (el) => {
  const file = el.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const url = event.target.result;
    window.UnderCanvas(url, {
      width: 190, height: 256, crop: true,
    }).then((b64) => {
      const img = document.createElement('img');
      img.src = b64;
      document.getElementById('root').appendChild(img);
    });
  };
  reader.readAsDataURL(file);
});
