import fs from 'fs';

const getImage = file => new Promise((resolve) => {
  fs.readFile(file, { encoding: 'base64' }, (err, data) => {
    if (err) throw err;
    return resolve(data);
  });
});

export default getImage;
