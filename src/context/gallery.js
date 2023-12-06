import {createContext, useState, useCallback} from 'react';
import {fetchImages} from '../utils/fetchImages';

const GalleryContext = createContext();

const GalleryProvider = ({children}) => {
	const [gallery, setGallery] = useState('');
	const [selectedIndex, setSelectedIndex] = useState(null);
	// fetch Images
	const createImagesList = useCallback((galleryType) => {
		const images =
			galleryType === 'shared'
				? require.context('../assets/img/rooms/shared', false)
				: galleryType === 'family'
				? require.context('../assets/img/rooms/family', false)
				: galleryType === 'deluxe'
				? require.context('../assets/img/rooms/deluxe', false)
				: require.context('../assets/img/gallery', false);

		return setGallery(fetchImages(images));
	}, []);

	const selectNext = () => {
		setSelectedIndex(
			selectedIndex < gallery.length - 1 ? selectedIndex + 1 : 0
		);
	};
	const selectPrev = () => {
		setSelectedIndex(
			selectedIndex !== 0 ? selectedIndex - 1 : gallery.length - 1
		);
	};

	return (
		<GalleryContext.Provider
			value={{
				gallery,
				createImagesList,
				selectedIndex,
				setSelectedIndex,
				selectNext,
				selectPrev,
			}}>
			{children}
		</GalleryContext.Provider>
	);
};

export {GalleryProvider};
export default GalleryContext;
