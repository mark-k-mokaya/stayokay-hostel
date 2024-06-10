export const fetchImages = (images) => {
	const imageList = [];
	images.keys().forEach((image) => {
		const img = image.split(/[./]/).filter((el) => el);
		if (img.length < 3) {
			const [name, type] = img;
			if (type === 'mp4') {
				imageList.push({name, videoUrl: images(image)});
			} else if (type !== 'webp') {
				imageList.push({name, fallbackImageUrl: images(image)});
			} else if (type === 'webp') {
				imageList[imageList.length - 1].imageUrl = images(image);
			}
		} else {
			const [name, size, type] = img;
			const currentImg = imageList.find((img) => img.name === name);
			if (!currentImg) {
				if (size === 'original') {
					imageList.push({
						name,
						jpgSrcSet: type !== 'webp' ? `${images(image)}, ` : '',
						webpSrcSet: type === 'webp' ? `${images(image)}, ` : '',
						thumbnail: {jpg: '', webp: ''},
					});
				} else if (size === 'thumbnail') {
					imageList.push({
						name,
						jpgSrcSet: '',
						webpSrcSet: '',
						thumbnail: {
							jpg: type !== 'webp' ? `${images(image)}` : '',
							webp: type === 'webp' ? `${images(image)}` : '',
						},
					});
				} else {
					imageList.push({
						name,
						jpgSrcSet: type !== 'webp' ? `${images(image)} ${size}w, ` : '',
						webpSrcSet: type === 'webp' ? `${images(image)} ${size}w, ` : '',
						thumbnail: {jpg: '', webp: ''},
					});
				}
			} else {
				if (size === 'original') {
					currentImg.jpgSrcSet += type !== 'webp' ? `${images(image)}, ` : '';
					currentImg.webpSrcSet += type === 'webp' ? `${images(image)}, ` : '';
				} else if (size === 'thumbnail') {
					currentImg.thumbnail.jpg += type !== 'webp' ? images(image) : '';
					currentImg.thumbnail.webp += type === 'webp' ? images(image) : '';
				} else {
					currentImg.jpgSrcSet +=
						type !== 'webp' ? `${images(image)} ${size}w, ` : '';
					currentImg.webpSrcSet +=
						type === 'webp' ? `${images(image)} ${size}w, ` : '';
				}
			}
		}
	});
	return imageList;
};
