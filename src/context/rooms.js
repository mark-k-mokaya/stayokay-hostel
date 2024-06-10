import {createContext, useCallback} from 'react';
import {fetchImages} from '../utils/fetchImages';
import rooms from '../data/rooms.json';

const RoomsContext = createContext();
const RoomsProvider = ({children}) => {
	const createImagesList = useCallback((roomType) => {
		let images = [];
		switch (roomType) {
			case 'shared':
				images = require.context('../assets/img/rooms/shared', false);
				break;
			case 'deluxe':
				images = require.context('../assets/img/rooms/deluxe', false);
				break;
			case 'family':
				images = require.context('../assets/img/rooms/family', false);
				break;
			case 'student':
				images = require.context('../assets/img/rooms/student', false);
				break;
			default:
				break;
		}

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
