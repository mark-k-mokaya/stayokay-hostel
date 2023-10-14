import SharedRoomImg from '../assets/img/rooms-shared-room.png';
import Bed1 from '../assets/img/mini-gallery-bed-1.png';
import Bed2 from '../assets/img/mini-gallery-bed-2.png';
import Sink from '../assets/img/mini-gallery-sink.png';
import Toilet from '../assets/img/mini-gallery-toilet.png';
import Bathroom from '../assets/img/mini-gallery-bathroom.png';
import PriceTagIcon from '../assets/img/rooms-price-tag-icon.png';
import GuestsTagIcon from '../assets/img/rooms-guests-icon.png';
import CloseIcon from '../assets/close-icon.png';

export const RoomModal = () => {
	return (
		<div className="relative flex flex-col items-start justify-start xl:flex-row xl:gap-12 w-[85%] xl:w-[80%] min-h-screen p-12 bg-light z-[60]">
			<div className="absolute top-4 right-4 p-2 bg-light text-maroonPrimary border border-dark-25">
				<img src={CloseIcon} className="w-8" />
			</div>
			{/* Images + Description */}
			<div className="flex-1 w-full space-y-1">
				<div id="main-preview">
					<img src={SharedRoomImg} className="rounded-[3px]" />
				</div>
				<div
					id="mini-gallery"
					className="flex w-full overflow-hidden space-x-1">
					<img src={Bed1} className="w-26 rounded-[3px]" />
					<img src={Bed2} className="w-26 rounded-[3px]" />
					<img src={Sink} className="w-26 rounded-[3px]" />
					<img src={Toilet} className="w-26 rounded-[3px]" />
					<img src={Bathroom} className="w-26 rounded-[3px]" />
				</div>
				<div
					id="description"
					className="flex flex-col gap-1.5 divide-y divide-dark-10">
					<h6 className="text-maroonSecondary uppercase font-black">
						DESCRIPTION
					</h6>
					<p className="py-2">
						Make new friends in our cozy shared room, with comfortable single
						beds and storage lockers for your belongings.
					</p>
				</div>
			</div>

			{/* Modal Content */}
			<div className="flex flex-col gap-2 flex-1">
				<h4 className="text-maroonPrimary uppercase">Shared Room</h4>

				<div className="flex gap-1.5 w-full h-10">
					<div className="bg-light border border-dark-10 p-2 flex gap-1.5 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-base">
						<img src={PriceTagIcon} alt="" className="h-full" />
						from Ksh. 1,000 each
					</div>
					<div className="bg-light border border-dark-10 p-2 flex gap-1.5 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-base">
						<img src={GuestsTagIcon} alt="" className="h-full" />2 guests
					</div>
				</div>

				<h6 className="text-maroonSecondary uppercase">Key Features</h6>

				<div className="border-t border-dark-10 p-6">
					<ul className="flex flex-wrap gap-y-2 columns-2">
						<li className="w-1/2 list-disc">2 x Single beds</li>
						<li className="w-1/2 list-disc">2 x Reading desks</li>
						<li className="w-1/2 list-disc">Wardrobe</li>
						<li className="w-1/2 list-disc">Tea & coffee for short stay</li>
						<li className="w-1/2 list-disc">Hot showers</li>
						<li className="w-1/2 list-disc">Toiletries</li>
						<li className="w-1/2 list-disc">Room cleaning</li>
					</ul>
				</div>

				<h6 className="text-maroonSecondary uppercase">Amount</h6>

				<div className="border-t border-dark-10  divide-y divide-dark-10 uppercase">
					<div className="py-2">
						<p className="text-xl text-maroonSecondary font-bold">
							Most Popular
						</p>
						<h5 className="text-maroonPrimary grid grid-cols-2">
							<span className="break-words">Shortstay</span>
							<span className="text-right">KSH. 1,000</span>
						</h5>
						<p className="grid grid-cols-2">
							<span>Stay for 1 night</span>
							<span className="text-right">PRICE PER PERSON</span>
						</p>
					</div>
					<div className="py-2">
						<h6 className="text-maroonSecondary grid grid-cols-2">
							<span className="break-words">Half Month</span>
							<span className="text-right">KSH. 5,500</span>
						</h6>

						<p className="grid grid-cols-2">
							<span>Stay for 2 weeks</span>
						</p>
					</div>
					<div className="py-2">
					<h6 className="text-maroonSecondary grid grid-cols-2">
							<span className="break-words">Full Month</span>
							<span className="text-right">KSH. 8,500</span>
						</h6>
						<p className="grid grid-cols-2">
							<span>Stay for 1 month</span>
						</p>
					</div>
				</div>
				<button className="room-modal-btn">Book Now</button>
			</div>
		</div>
	);
};
