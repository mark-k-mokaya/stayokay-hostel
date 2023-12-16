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
						<picture key={currentImage.name}>
							<source srcSet={currentImage.imageUrl} type="image/webp" />
							<img
								loading="lazy"
								key={currentImage.name}
								src={currentImage.fallbackImageUrl}
								className="rounded-[3px] w-full md:w-[80%] lg:w-[60%]"
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
								<picture key={image.name}>
									<source srcSet={image.imageUrl} type="image/webp" />
									<img
										loading="lazy"
										key={image.name}
										src={image.fallbackImageUrl}
										className={
											image === currentImage
												? 'border-4 border-maroonPrimary'
												: 'cursor-pointer'
										}
										alt={altText}
										width={100}
										onClick={() => setSelectedIndex(index)}
									/>
								</picture>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};
