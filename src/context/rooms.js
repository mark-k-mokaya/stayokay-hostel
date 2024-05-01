import {createContext, useCallback} from 'react';
import {fetchImages} from '../utils/fetchImages';
import rooms from '../data/rooms.json';

const RoomsContext = createContext();
const RoomsProvider = ({children}) => {

	const createImagesList = useCallback((roomType) => {
		const images =
			roomType === 'shared'
				? require.context('../assets/img/rooms/shared', false)
				: roomType === 'family'
				? require.context('../assets/img/rooms/family', false)
				: require.context('../assets/img/rooms/deluxe', false);

		return fetchImages(images);
	}, []);

	return (
		<RoomsContext.Provider value={{rooms, createImagesList}}>
			{children}
		</RoomsContext.Provider>
	);
};

export {RoomsProvider};
export default RoomsContext;
