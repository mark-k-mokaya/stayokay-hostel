import {useState, useContext, forwardRef} from 'react';
import RoomsContext from '../context/rooms';
import {SectionHeading, RoomCard, Modal} from '../components';
import SharedRoomImg from '../assets/img/rooms/shared/01_rooms-shared-room.webp';
import FallbackSharedRoomImg from '../assets/img/rooms/shared/01_rooms-shared-room.png';
import DeluxeRoomImg from '../assets/img/rooms/deluxe/01_rooms-deluxe-room.webp';
import FallbackDeluxeRoomImg from '../assets/img/rooms/deluxe/01_rooms-deluxe-room.png';
import FamilyRoomImg from '../assets/img/rooms/family/01_rooms-family-room.webp';
import FallbackFamilyRoomImg from '../assets/img/rooms/family/01_rooms-family-room.png';

export const Rooms = forwardRef(function Rooms(props, ref) {
	const {rooms} = useContext(RoomsContext);
	const [showModal, setShowModal] = useState(false);
	const [modal, setModal] = useState(null);
	const handleClick = () => {
		setShowModal((showModal) => !showModal);
	};
	return (
		<section id="rooms" className="relative section-container" ref={ref}>
			{showModal && (
				<Modal modal={modal} modalType="room" handleClick={handleClick} />
			)}
			{/* Section Heading */}
			<SectionHeading
				sub="TAKE YOUR PICK, WE'VE GOT PLENTY"
				main="ROOMS AND RATES"
			/>

			{/* Section Content */}
			<div className="section-content">
				<p>
					We offer a range of rooms to suit your needs and budget - shared
					rooms, deluxe rooms and family rooms. All our rooms are equipped with
					comfortable beds, fresh linens, and en-suite bathrooms. Our rates are
					affordable and include all the amenities you need to make your stay
					comfortable.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<RoomCard
						roomImg={{imageUrl: SharedRoomImg, fallbackImageUrl: FallbackSharedRoomImg}}
						{...rooms.shared}
						handleClick={handleClick}
						setModal={setModal}
					/>
					<RoomCard
						roomImg={{imageUrl: DeluxeRoomImg, fallbackImageUrl: FallbackDeluxeRoomImg}}
						{...rooms.deluxe}
						handleClick={handleClick}
						setModal={setModal}
					/>
					<RoomCard
						roomImg={{imageUrl: FamilyRoomImg, fallbackImageUrl: FallbackFamilyRoomImg}}
						{...rooms.family}
						handleClick={handleClick}
						setModal={setModal}
					/>
				</div>
			</div>
		</section>
	);
});
