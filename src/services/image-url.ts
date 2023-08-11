import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
	if (!url) return noImage;
	const target = 'media/';
	const index = url.indexOf(target) + target.length; // Get the position in the url directly after the /
	return url.slice(0, index) + 'crop/600/400/' + url.slice(index); // Add the url to get a cropped version of the image
};

export default getCroppedImageUrl;
