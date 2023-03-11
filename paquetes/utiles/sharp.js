const sharp = require('sharp');

sharp('./jacket.jpg')
      .resize(80)
      .toFile('resized.png')