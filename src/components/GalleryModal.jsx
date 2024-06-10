import {useContext, useRef} from 'react';
import GalleryContext from '../context/gallery';
import {LoadingSpinner} from './LoadingSpinner';

export const GalleryModal = () => {
	const {gallery, selectedIndex, setSelectedIndex, isLoading, setIsLoading} =
		useContext(GalleryContext);
	const currentImage = gallery[selectedIndex];
	const mainImageRef = useRef();

	return (
		<>
			{/* Images + Description */}
			{currentImage && (
				<div className="flex flex-col self-center flex-1 items-center justify-center space-y-1">
					<div
						id="main-preview"
						className="flex items-center justify-center w-fit mt-14 md:mt-6">
						{isLoading ? <LoadingSpinner /> : null}
						<picture className="rounded-[3px]">
							<source
								srcSet={currentImage.webpSrcSet.split(',')[0]}
								type="image/webp"
							/>

							<img
								ref={mainImageRef}
								className="w-full md:w-[80%] lg:w-[60%] mx-auto opacity-0 transition-opacity duration-200 ease-in-out object-cover"
								onLoad={(event) => {
									event.target.classList.add('opacity-100');
									setIsLoading(false);
								}}
								loading="lazy"
								srcSet={currentImage.jpgSrcSet.split(',')[0]}
								alt={currentImage.name.split('_')[1].split('-').join(' ')}
								width={document.body.offsetWidth}
							/>
						</picture>
					</div>

					<div
						id="mini-gallery"
						className="gap-1.5 w-auto hidden md:grid md:grid-cols-6 md:grid-rows-2 lg:grid-cols-10 py-4">
						{gallery.map((image, index) => {
							const altText = image.name.split('_')[1].split('-').join(' ');
							return (
								<span
									key={image.name}
									className={
										image === currentImage
											? 'block w-20 h-[75px] bg-gray-100 m-auto border-4 border-maroonPrimary'
											: 'block w-20 h-[75px] bg-gray-100 m-auto cursor-pointer'
									}
									onClick={
										image !== currentImage
											? () => {
													setIsLoading(true);
													setSelectedIndex(index);
											  }
											: () => false
									}>
									<picture>
										<source
											srcSet={image.thumbnail ? image.thumbnail.webp : ''}
											type="image/webp"
										/>
										<img
											className="opacity-0 transition-opacity duration-200 ease-in-out m-auto h-full object-cover"
											onLoad={(event) => {
												event.target.classList.add('opacity-100');
											}}
											loading="lazy"
											width="80"
											height="75"
											srcSet={image.thumbnail ? image.thumbnail.jpg : ''}
											alt={altText}
										/>
									</picture>
								</span>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};
