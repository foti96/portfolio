var imagemin = require("imagemin"), // The imagemin module.
	webp = require("imagemin-webp"), // imagemin's WebP plugin.
	standardFolder = "/storage/app/media/", // root folder
	outputFolder = standardFolder + "webp/", // Output folder
	PNGImages = standardFolder + "/**/*.png", // PNG images
	JPEGImages = standardFolder + "/**/*.jpg"; // JPEG images

imagemin([PNGImages], outputFolder, {
	plugins: [
		webp({
			lossless: true, // Losslessly encode images
		}),
	],
});

imagemin([JPEGImages], outputFolder, {
	plugins: [
		webp({
			quality: 65, // Quality setting from 0 to 100
		}),
	],
});
