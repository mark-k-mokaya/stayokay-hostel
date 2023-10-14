import {RoomModal} from '.';



export const Modal = ({handleClick}) => {
	const modal = <RoomModal/>;
	return (
		<div className="fixed flex items-start justify-center z-40 inset-0 w-screen h-screen overflow-y-auto bg-dark-50">
			{/* Background */}
			<div
				id="menu-bg"
				className="absolute inset-0 -z-10"
				onClick={handleClick}></div>
			{modal}
		</div>
	);
};
