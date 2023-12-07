import {useContext} from 'react';
import GalleryContext from '../context/gallery';
import CloseIcon from '../assets/img/close-icon.png';
import RightChevronIcon from '../assets/img/right-chevron-icon.png';
import LeftChevronIcon from '../assets/img/left-chevron-icon.png';

export const Modal = ({modal, modalType, handleClick}) => {
	const {selectNext, selectPrev} = useContext(GalleryContext);
	return (
		<div className="fixed flex items-start justify-center z-40 inset-0 w-screen h-screen overflow-y-auto bg-dark-50 self-center">
			<div
				id="menu-bg"
				className="fixed inset-0 -z-10"
				onClick={handleClick}></div>

			<div className="relative my-auto flex flex-col items-start justify-start md:flex-row gap-6 xl:gap-12 w-[95%] xl:w-[80%] p-2 sm:p-12 bg-light z-[60]">
				<div
					className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-light text-maroonPrimary border border-dark-25 cursor-pointer"
					onClick={handleClick}>
					<img src={CloseIcon} width={32} alt="Close" />
				</div>
				{modal}
				{modalType === 'gallery' && (
					<div className="flex md:self-center w-full md:hidden justify-between z-[80]">
						<div
							className="p-2 bg-light text-maroonPrimary border border-dark-25 cursor-pointer"
							onClick={selectPrev}>
							<img src={LeftChevronIcon} width={50} alt="Previous" />
						</div>
						<div
							className="p-2 bg-light text-maroonPrimary border border-dark-25 cursor-pointer"
							onClick={selectNext}>
							<img src={RightChevronIcon} width={50} alt="Next" />
						</div>
					</div>
				)}
			</div>

			{modalType === 'gallery' && (
				<div className="hidden md:self-center w-full md:fixed md:flex justify-between z-[80]">
					<div
						className="p-2 bg-light text-maroonPrimary border border-dark-25 cursor-pointer"
						onClick={selectPrev}>
						<img src={LeftChevronIcon} width={50} alt="Previous" />
					</div>
					<div
						className="p-2 bg-light text-maroonPrimary border border-dark-25 cursor-pointer"
						onClick={selectNext}>
						<img src={RightChevronIcon} width={50} alt="Next" />
					</div>
				</div>
			)}
		</div>
	);
};
