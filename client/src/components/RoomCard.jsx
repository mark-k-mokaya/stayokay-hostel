import PriceTagIcon from '../assets/img/rooms-price-tag-icon.png';
import GuestsTagIcon from '../assets/img/rooms-guests-icon.png';

export const RoomCard = ({
	roomType,
	roomImg,
	description,
	priceTagLabel,
	guestsTagLabel,
	handleClick
}) => {
	return (
		<div className="flex flex-col gap-3.5">
			<div className="relative">
				<div className="absolute flex justify-end gap-1.5 bottom-0 mb-2 px-2 z-10 w-full h-10">
					<div className="bg-light border border-dark-10 p-2 flex gap-1.5 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-base">
						<img src={PriceTagIcon} alt="" className="h-full" />
						{priceTagLabel}
					</div>
					<div className="bg-light border border-dark-10 p-2 flex gap-1.5 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-base">
						<img src={GuestsTagIcon} alt="" className="h-full" />
						{guestsTagLabel}
					</div>
				</div>
				<img src={roomImg} className="rounded-[3px]" alt={roomType} />
			</div>

			<h5 className="uppercase text-maroonPrimary font-extrabold">
				{roomType}
			</h5>
			<p className="text-base">{description}</p>
			<button className="room-card-btn" onClick={handleClick}>SHOW DETAILS</button>
		</div>
	);
};
