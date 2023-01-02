const sharp = require('sharp');

const src = './img/website-preview.png';
sharp(src)
  .png({ quality: 100 })
  .toFile(src + 's');
