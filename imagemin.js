const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

const PNGImages = 'unoptimized/*.png';
const JPEGImages = 'unoptimized/*.jpg';
const output = 'build/images';

const optimisePNGImages = () =>
  imagemin([PNGImages], output, {
    plugins: [
      imageminPngquant({ quality: '65-80' })
    ],
  });

const optimiseJPEGImages = () =>
	imagemin([JPEGImages], output, {
	plugins: [
	  imageminMozjpeg({
	    quality: 70,
	  }),
	]
	});

optimiseJPEGImages()
  .then(() => optimisePNGImages())
  .catch(error => console.log(error));
