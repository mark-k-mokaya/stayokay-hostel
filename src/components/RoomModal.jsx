import {useContext, useState} from 'react';
import ScrollContext from '../context/scroll';
import {Link, useNavigate} from 'react-router-dom';
import PriceTagIcon from '../assets/img/icons/rooms-price-tag-icon.png';
import GuestsTagIcon from '../assets/img/icons/rooms-guests-icon.png';
import {LoadingSpinner} from './LoadingSpinner';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

export const RoomModal = ({roomType, imagesList, handleClick, ...rest}) => {
	const navigate = useNavigate();
	const {setCurrentPath, scrollTo} = useContext(ScrollContext);
	const [currentImage, setCurrentImage] = useState(imagesList[0]);
	const [isLoading, setIsLoading] = useState(true);

	const handleScroll = async () => {
		await setCurrentPath(() => '/book');
		window.location.pathname !== '/book' && navigate('/book');
		scrollTo('/book');
		handleClick();
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12 w-full">
			{/* Images + Description */}
			<div className="col-span-1 flex flex-col space-y-1 mt-10 xl:mt-0">
				<div
					id="main-preview"
					className="flex justify-center items-center bg-gray-100">
					{isLoading ? <LoadingSpinner /> : null}
					{currentImage.videoUrl ? (
						<video
							muted
							controls
							className="object-contain opacity-0 transition-opacity duration-200 ease-in-out aspect-square"
							onLoadedData={(event) => {
								event.target.classList.add('opacity-100');
								setIsLoading(false);
							}}
							src={currentImage.videoUrl}></video>
					) : (
						<picture>
							<source
								srcSet={currentImage.webpSrcSet ?? currentImage.imageUrl}
								type="image/webp"
							/>
							<img
								loading="lazy"
								className="w-full h-full object-contain opacity-0 transition-opacity duration-200 ease-in-out"
								onLoad={(event) => {
									event.target.classList.add('opacity-100');
									setIsLoading(false);
								}}
								srcSet={currentImage.jpgSrcSet ?? currentImage.fallbackImageUrl}
								alt={currentImage.name.split('_')[1].split('-').join(' ')}
								width={512}
								height={512}
							/>
						</picture>
					)}
				</div>

				<div
					id="mini-gallery"
					className={`border-box grid grid-cols-6 lg:grid-cols-8 w-full gap-1`}>
					{imagesList.map((image) => {
						const altText = image.name.split('_')[1].split('-').join(' ');
						return (
							<span
								key={image.name}
								className={
									!image.thumbnail
										? 'bg-dark-100 rounded-sm border-4 border-gray-100 cursor-pointer'
										: image === currentImage
										? 'bg-gray-100 border-4 border-maroonPrimary'
										: 'bg-gray-100 border-4 border-transparent cursor-pointer'
								}>
								{image.thumbnail && (
									<picture>
										<source
											srcSet={image.thumbnail ? image.thumbnail.webp : ''}
											type="image/webp"
										/>

										<img
											loading="lazy"
											className="w-full h-full flex-1 opacity-0 transition-opacity duration-200 ease-in-out aspect-square object-cover"
											onLoad={(event) => {
												event.target.classList.add('opacity-100');
											}}
											srcSet={image.thumbnail ? image.thumbnail.jpg : ''}
											alt={altText}
											onClick={
												image !== currentImage
													? () => {
															setIsLoading(true);
															setCurrentImage(image);
													  }
													: () => false
											}
											width="100"
											height="100"
										/>
									</picture>
								)}
								{image.videoUrl && (
									<div
										className="flex flex-col justify-center items-center aspect-square"
										onClick={
											image !== currentImage
												? () => {
														setIsLoading(true);
														setCurrentImage(image);
												  }
												: () => false
										}>
										<FontAwesomeIcon
											icon={faPlay}
											className="text-light rounded text-base xl:text-xl"
										/>
									</div>
								)}
							</span>
						);
					})}
				</div>

				<h4 className="md:hidden text-maroonPrimary uppercase pt-3">
					{rest.roomLabel}
				</h4>

				<div className="md:hidden gap-1.5 w-full flex flex-wrap pb-5">
					<div className="bg-light border border-dark-10 p-2 flex gap-1 sm:gap-2 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-[12px] sm:text-base whitespace-nowrap h-10">
						<img src={PriceTagIcon} alt="" className="h-full" />
						{rest.priceTagLabel}
					</div>
					<div className="bg-light border border-dark-10 p-2 flex gap-1 sm:gap-2 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-[12px] sm:text-base whitespace-nowrap h-10">
						<img src={GuestsTagIcon} alt="" className="h-full" />
						{rest.guestsTagLabel}
					</div>
				</div>
				<div
					id="description"
					className="flex flex-col gap-1.5 divide-y divide-dark-10">
					<h6 className="text-maroonSecondary uppercase font-black">
						DESCRIPTION
					</h6>
					<p className="py-2 text-base">{rest.description}</p>
				</div>
			</div>

			{/* Modal Content */}
			<div className="col-span-1 flex flex-col gap-1 md:mt-10 xl:mt-0 justify-between">
				<div className="">
					<h4 className="hidden md:block text-maroonPrimary uppercase">
						{rest.roomLabel}
					</h4>

					<div className="hidden md:flex gap-1.5 w-full flex-wrap">
						<div className="bg-light border border-dark-10 p-2 flex gap-1 sm:gap-2 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-[12px] sm:text-base whitespace-nowrap h-10">
							<img src={PriceTagIcon} alt="" className="h-full" />
							{rest.priceTagLabel}
						</div>
						<div className="bg-light border border-dark-10 p-2 flex gap-1 sm:gap-2 items-center justify-center rounded-[3px] font-semibold text-maroonPrimary text-[12px] sm:text-base whitespace-nowrap h-10">
							<img src={GuestsTagIcon} alt="" className="h-full" />
							{rest.guestsTagLabel}
						</div>
					</div>

					<h6 className="text-maroonSecondary uppercase">Key Features</h6>
					<div className="border-t border-dark-10 p-6">
						<ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-8">
							{rest.features.map((item) => (
								<li className="list-disc" key={item + new Date().getTime()}>
									{item}
								</li>
							))}
						</ul>
					</div>

					<h6 className="text-maroonSecondary uppercase">Amount</h6>

					<div className="border-t border-dark-10  divide-y divide-dark-10 uppercase">
						<div className="py-2">
							<p className="text-xl text-maroonSecondary font-bold">
								Most Popular
							</p>
							<h5 className="text-maroonPrimary grid grid-cols-2">
								<span className="break-words">Short Stay</span>
								<span className="text-right">
									{rest.amount?.short_stay
										? 'KSH. ' + rest.amount.short_stay.toLocaleString()
										: null}
								</span>
							</h5>
							<p className="grid grid-cols-2">
								<span>Stay for one night</span>
								<span className="text-right">
									{rest.rate_conditions.short_stay}
								</span>
							</p>
						</div>
						<div className="py-2">
							<h6 className="text-maroonSecondary grid grid-cols-2">
								<span className="break-words">Half Month</span>
								<span className="text-right">
									{rest.amount?.half_month
										? 'KSH. ' + rest.amount.half_month.toLocaleString()
										: null}
								</span>
							</h6>

							<p className="grid grid-cols-2">
								<span>Stay for two weeks</span>
								<span className="text-right">
									{rest.rate_conditions.half_month}
								</span>
							</p>
						</div>
						<div className="py-2">
							<h6 className="text-maroonSecondary grid grid-cols-2">
								<span className="break-words">Full Month</span>
								<span className="text-right">
									{rest.amount?.full_month
										? 'KSH. ' + rest.amount.full_month.toLocaleString()
										: null}
								</span>
							</h6>
							<p className="grid grid-cols-2">
								<span>Stay for one month</span>
								<span className="text-right">
									{rest.rate_conditions.full_month}
								</span>
							</p>
						</div>
					</div>
				</div>
				<div>
					<button className="room-modal-btn" as={Link} onClick={handleScroll}>
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
};
