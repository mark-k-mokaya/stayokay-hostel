import PriceTagIcon from '../assets/img/icons/rooms-price-tag-icon.png';
import GuestsTagIcon from '../assets/img/icons/rooms-guests-icon.png';
import {RoomModal} from './RoomModal';
import {useContext, useState, useEffect} from 'react';
import RoomsContext from '../context/rooms';

export const RoomCard = ({
	roomImg,
	roomType,
	handleClick,
	setModal,
	...rest
}) => {
	const {createImagesList} = useContext(RoomsContext);
	const [imagesList, setImagesList] = useState([]);

	useEffect(() => {
		const images = createImagesList(roomType);
		setImagesList(images);
	}, [createImagesList, roomType]);

	const handleModal = () => {
		setModal(
			<RoomModal
				roomType={roomType}
				handleClick={handleClick}
				imagesList={imagesList}
				{...rest}
			/>
		);
		handleClick();
	};
	return (
		<div className="flex flex-col gap-3.5 justify-between">
			<div className="flex flex-col gap-3.5">
				<div className="relative">
					<div className="absolute flex flex-wrap justify-end gap-1.5 bottom-0 mb-1 md:mb-2 px-1 md:px-2 z-10 w-full">
						<div className="h-8 md:h-10 bg-light border border-dark-10 p-1 md:p-2 flex gap-1 sm:gap-2 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-[12px] sm:text-base whitespace-nowrap">
							<img src={PriceTagIcon} alt="" className="h-4 md:h-full" />
							{rest.priceTagLabel}
						</div>
						<div className="h-8 md:h-10 bg-light border border-dark-10 p-1 md:p-2 flex gap-1 sm:gap-2 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-[12px] sm:text-base whitespace-nowrap">
							<img src={GuestsTagIcon} alt="" className="h-4 md:h-full" />
							{rest.guestsTagLabel}
						</div>
					</div>
					<picture>
						<source srcSet={roomImg.imageUrl} type="image/webp" />
						<img
							loading="lazy"
							src={roomImg.fallbackImageUrl}
							className="rounded-[3px]"
							alt={rest.roomLabel}
						/>
					</picture>
				</div>

				<h5 className="uppercase text-maroonPrimary font-extrabold">
					{rest.roomLabel}
				</h5>
				<p className="text-base">{rest.description}</p>
			</div>
			<button className="room-card-btn" onClick={handleModal}>
				SHOW DETAILS
			</button>
		</div>
	);
};
