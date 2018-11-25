const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

const PNGImages = 'unoptimized/*.png';
const JPEGImages = 'unoptimized/*.jpg';
const output = 'images';

// change quality for different image types here:
const pngQuality = '65-80';
const jpgQuality = 70;

const optimisePNGImages = () =>
  imagemin([PNGImages], output, {
    plugins: [
      imageminPngquant({ quality: pngQuality })
    ],
  });

const optimiseJPEGImages = () =>
	imagemin([JPEGImages], output, {
	plugins: [
	  imageminMozjpeg({
	    quality: jpgQuality,
	  }),
	]
	});

optimiseJPEGImages()
  .then(() => optimisePNGImages())
  .catch(error => console.log(error));
