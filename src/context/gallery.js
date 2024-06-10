import {createContext, useState, useCallback} from 'react';
import {fetchImages} from '../utils/fetchImages';

const GalleryContext = createContext();

const GalleryProvider = ({children}) => {
	const [gallery, setGallery] = useState('');
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const createImagesList = useCallback(() => {
		const images = require.context('../assets/img/gallery', false);
		return setGallery(fetchImages(images));
	}, []);

	const selectNext = () => {
		setIsLoading(true);
		setSelectedIndex(
			selectedIndex < gallery.length - 1 ? selectedIndex + 1 : 0
		);
	};
	const selectPrev = () => {
		setIsLoading(true);
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
				isLoading,
				setIsLoading,
			}}>
			{children}
		</GalleryContext.Provider>
	);
};

export {GalleryProvider};
export default GalleryContext;
