export const fetchImages = (images) => {
	return images.keys().map((image) => {
		const [name] = image.split(/[./]/).filter((el) => el);
		return {name, imageUrl: images(image)};
	});
};

