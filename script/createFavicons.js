const sharp = require('sharp');

const src = './img/logo.svg';
const targets = [16, 32, 152, 192, 310];

const convert = (size) => sharp(src)
  .resize(size)
  .png()
  .toFile(`./img/logo@${size}.png`);

targets.forEach(convert);
