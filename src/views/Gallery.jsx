import {useContext, useState, useEffect, forwardRef} from 'react';
import {SectionHeading, Modal, GalleryModal} from '../components';
import GalleryContext from '../context/gallery';

export const Gallery = forwardRef(function Gallery(props, ref) {
	const {gallery, createImagesList, setSelectedIndex} =
		useContext(GalleryContext);
	useEffect(() => {
		createImagesList();
	}, [createImagesList]);

	const [showModal, setShowModal] = useState(false);
	const handleClick = (currentIndex) => {
		setSelectedIndex(currentIndex);
		setShowModal(!showModal);
	};

	return (
		<section id="gallery" className="relative section-container" ref={ref}>
			{showModal && (
				<Modal
					modal={<GalleryModal />}
					modalType="gallery"
					handleClick={handleClick}
				/>
			)}
			<SectionHeading sub="WE'VE GOT PICTURES TOO" main="GALLERY" />

			{/* Section Content */}
			<div className="section-content">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5">
					{gallery &&
						gallery.map((image, index) => {
							const altText = image.name.split('_')[1].split('-').join(' ');
							return (
								<div
									key={image.name}
									className="bg-gray-100"
									onClick={() => handleClick(index)}>
									<picture className="cursor-pointer">
										<source
											src={image.thumbnail ? image.thumbnail.webp : ''}
											type="image/webp"
										/>
										<img
											className="opacity-0 transition-opacity duration-200 ease-in-out h-full object-cover"
											onLoad={(event) => {
												event.target.classList.add('opacity-100');
											}}
											width={300}
											height={300}
											loading="lazy"
											src={image.thumbnail ? image.thumbnail.jpg : ''}
											alt={altText}
										/>
									</picture>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
});
