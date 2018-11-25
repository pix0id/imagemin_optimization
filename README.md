# imagemin_optimization
repo for the imagemin optimization script.

1. in your terminal, from the root directory, run npm install.
2. Add all unoptimized PNG/JPG images to the unoptimized folder.
3. in your terminal, run 'node imagemin.js'
4. check the images folder. Your images should be a lot smaller and look the same.

if you would like to adjust the quality for the images, you can do so by adjusting the variables on lines 10 and 11.

If you would like to learn more about the quality values, here's some quick snippets from the documentation for each image plugin.

## JPG
https://www.npmjs.com/package/imagemin-mozjpeg  
> Type: number  
>Compression quality, in range 0 (worst) to 100 (perfect).

## PNG
https://www.npmjs.com/package/imagemin-pngquant
Type: string

>Instructs pngquant to use the least amount of colors required to meet or exceed the max quality.  
>If conversion results in quality below the min quality the image won't be saved.
>
>Min and max are numbers in range 0 (worst) to 100 (perfect), similar to JPEG.
