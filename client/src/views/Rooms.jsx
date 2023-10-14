import {useState} from 'react';
import {SectionHeading, RoomCard, Modal} from '../components';
import SharedRoomImg from '../assets/img/rooms-shared-room.png';
import DeluxeRoomImg from '../assets/img/rooms-deluxe-room.png';
import FamilyRoomImg from '../assets/img/rooms-family-room.png';

export const Rooms = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};
	return (
		<section id="rooms" className="relative">
			{showModal && <Modal handleClick={handleClick} />}
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
						roomType="SHARED ROOM"
						roomImg={SharedRoomImg}
						priceTagLabel={'from Ksh. 1,000 each'}
						guestsTagLabel={'2'}
						description="Make new friends in our cozy shared room, with comfortable single
							beds and storage lockers for your belongings."
						handleClick={handleClick}
					/>
					<RoomCard
						roomType="DELUXE ROOM"
						roomImg={DeluxeRoomImg}
						priceTagLabel={'from Ksh. 2,500'}
						guestsTagLabel={'1-2'}
						description="Treat yourself to a luxurious stay in our deluxe room, featuring
							premium amenities, queen-size beds and so much more."
						handleClick={handleClick}
					/>
					<RoomCard
						roomType="FAMILY ROOM"
						roomImg={FamilyRoomImg}
						priceTagLabel={'from Ksh. 3,500'}
						guestsTagLabel={'4'}
						description="Enjoy quality time with your loved ones in our spacious family
							room, featuring comfortable beds, ample storage, and plenty of
							space for everyone to relax and unwind."
						handleClick={handleClick}
					/>
				</div>
			</div>
		</section>
	);
};
