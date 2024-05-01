import {useContext} from 'react';
import GalleryContext from '../context/gallery';

export const GalleryModal = () => {
	const {gallery, selectedIndex, setSelectedIndex} = useContext(GalleryContext);
	const currentImage = gallery[selectedIndex];

	return (
		<>
			{/* Images + Description */}
			{currentImage && (
				<div className="flex flex-col self-center flex-1 items-center justify-center space-y-1">
					<div
						id="main-preview"
						className="w-full flex justify-center items-center mt-14 md:mt-6 overflow-clip">
						<picture className="rounded-[3px] w-full md:w-[80%] lg:w-[60%]">
							<source
								srcSet={currentImage.webpSrcSet.split(',')[0]}
								type="image/webp"
							/>
							<img
								className="opacity-0 transition-opacity duration-200 ease-in-out"
								onLoad={(event) => {
									event.target.classList.add('opacity-100');
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
									onClick={() => setSelectedIndex(index)}>
									<picture>
										<source
											src={image.thumbnail ? image.thumbnail.webp : ''}
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
											src={image.thumbnail ? image.thumbnail.jpg : ''}
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
