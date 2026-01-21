import {createContext, useCallback} from 'react';
import {fetchImages} from '../utils/fetchImages';
import roomsJSON from '../data/rooms.json';
import {useEffect, useState} from 'react';
import Papa from 'papaparse';

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

	let [roomsData, setRoomData] = useState(roomsJSON);

	let [isUpdatedDataFetched, setIsUpdatedDataFetched] = useState(false);

	useEffect(
		() => async () => {
			await fetch('/.netlify/functions/fetch-room-details')
				.then((res) => res.json())
				.then((data) => {
					const csv = Papa.unparse(data);
					Papa.parse(csv, {
						header: true,
						delimiter: ',',
						complete: function (result) {
							let rooms = result.data
								.map((row) => new RoomDetails(row))
								.reduce((acc, room) => {
									acc[room.roomType] = room;
									return acc;
								}, {});
							setRoomData(rooms);
							setIsUpdatedDataFetched(true);
						},
					});
				})
				.catch((e) => {});
		},
		[],
	);

	return (
		<RoomsContext.Provider
			value={{rooms: roomsData, isUpdatedDataFetched, createImagesList}}>
			{children}
		</RoomsContext.Provider>
	);
};

class RoomDetails {
	roomType = '';
	roomLabel = '';
	guestsTagLabel = '';
	priceTagLabel = '';
	amount = {
		short_stay: 0,
		half_month: 0,
		full_month: 0,
	};
	rate_conditions = {
		short_stay: '',
		half_month: '',
		full_month: '',
	};
	features = [];
	description = '';

	constructor(roomDetails) {
		this.roomType = roomDetails.roomType;
		this.roomLabel = roomDetails.roomLabel;
		this.guestsTagLabel = roomDetails.guestsTagLabel;
		this.priceTagLabel = roomDetails.priceTagLabel;
		this.amount = {
			short_stay: Number(roomDetails['amount/short_stay']),
			half_month: Number(roomDetails['amount/half_month']),
			full_month: Number(roomDetails['amount/full_month']),
		};
		this.rate_conditions = {
			short_stay: roomDetails['rate_conditions/full_month'],
			half_month: roomDetails['rate_conditions/half_month'],
			full_month: roomDetails['rate_conditions/full_month'],
		};
		this.features = roomDetails.features.split(', ');
		this.description = roomDetails.description;
	}
}

export {RoomsProvider, RoomDetails};
export default RoomsContext;
