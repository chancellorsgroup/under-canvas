document.getElementById('image').addEventListener('change', (c) => {
  console.log(c);
  const file = document.getElementById('image').files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const url = event.target.result;
    window.UnderCanvas(url).then((b64) => {
      const img = document.createElement('img');
      img.src = b64;
      document.getElementById('root').appendChild(img);
    });
  };
  reader.readAsDataURL(file);
});
