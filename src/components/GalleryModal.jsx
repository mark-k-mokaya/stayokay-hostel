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
						<img
							key={currentImage.name}
							src={currentImage.imageUrl}
							className="rounded-[3px] w-full md:w-[80%] lg:w-[60%]"
							alt={currentImage.name.split('_')[1].split('-').join(' ')}
						/>
					</div>
				
					<div
						id="mini-gallery"
						className="flex-wrap gap-1.5 w-full hidden md:flex justify-center pt-4">
						{gallery.map((image, index) => {
							const altText = image.name.split('_')[1].split('-').join(' ');
							return (
								<img
									key={image.name}
									src={image.imageUrl}
									className={
										image === currentImage
											? 'border-4 border-maroonPrimary'
											: 'cursor-pointer'
									}
									alt={altText}
									width={100}
									onClick={() => setSelectedIndex(index)}
								/>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};
