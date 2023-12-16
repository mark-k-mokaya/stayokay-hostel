export const fetchImages = (images) => {
	const imageList = [];
	images.keys().forEach((image) => {
		const [name, type] = image.split(/[./]/).filter((el) => el);
		if (type !== 'webp') {
			imageList.push({name, fallbackImageUrl: images(image)});
		} else if (type === 'webp') {
			imageList[imageList.length - 1].imageUrl = images(image);
		}
	});
	return imageList;
};
