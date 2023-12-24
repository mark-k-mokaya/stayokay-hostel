import {useContext} from 'react';
import GalleryContext from '../context/gallery';

export const GalleryModal = () => {
	const {gallery, selectedIndex, setSelectedIndex} = useContext(GalleryContext);
	const currentImage = gallery[selectedIndex];

	return (
		<>
			{/* Images + Description */}
			{currentImage && (
				<div className="flex flex-col flex-1 items-center justify-center space-y-1">
					<div
						id="main-preview"
						className="w-full flex justify-center items-center mt-14 md:mt-6">
						<picture className="rounded-[3px] w-full md:w-[80%] lg:w-[60%]">
							<source srcSet={currentImage.imageUrl} type="image/webp" />
							<img
								className="opacity-0 transition-opacity duration-200 ease-in-out"
								onLoad={(event) => {
									event.target.classList.add('opacity-100');
								}}
								loading="lazy"
								src={currentImage.fallbackImageUrl}
								alt={currentImage.name.split('_')[1].split('-').join(' ')}
							/>
						</picture>
					</div>

					<div
						id="mini-gallery"
						className="flex-wrap gap-1.5 w-full hidden md:flex justify-center pt-4">
						{gallery.map((image, index) => {
							const altText = image.name.split('_')[1].split('-').join(' ');
							return (
								<span
									key={image.name}
									className={
										image === currentImage
											? 'bg-gray-100 border-4 border-maroonPrimary h-fit w-fit flex'
											: 'bg-gray-100 cursor-pointer h-fit'
									}>
									<picture>
										<source srcSet={image.imageUrl} type="image/webp" />
										<img
											className="opacity-0 transition-opacity duration-200 ease-in-out"
											onLoad={(event) => {
												event.target.classList.add('opacity-100');
											}}
											loading="lazy"
											width={100}
											src={image.fallbackImageUrl}
											alt={altText}
											onClick={() => setSelectedIndex(index)}
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
