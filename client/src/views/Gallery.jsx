import {useContext, useState, useEffect, forwardRef} from 'react';
import {SectionHeading, Modal, GalleryModal} from '../components';
import GalleryContext from '../context/gallery';

export const Gallery = forwardRef(function Gallery(props, ref) {
	const {gallery, createImagesList, setSelectedIndex} =
		useContext(GalleryContext);

	useEffect(() => {
		createImagesList();
	}, []);

	const [showModal, setShowModal] = useState(false);
	const handleClick = (currentIndex) => {
		setSelectedIndex(currentIndex);
		setShowModal(!showModal);
	};

	return (
		<section id="gallery" className="relative section-container" ref={ref}>
			{showModal && (
				<Modal modal={<GalleryModal />} handleClick={handleClick} />
			)}
			<SectionHeading sub="WE'VE GOT PICTURES TOO" main="GALLERY" />

			{/* Section Content */}
			<div className="section-content">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5">
					{gallery &&
						gallery.map((image, index) => {
							const altText = image.name.split('_')[1].split('-').join(' ');
							return (
								<img
									key={image.name}
									src={image.imageUrl}
									alt={altText}
									onClick={() => handleClick(index)}
									className="cursor-pointer"
								/>
							);
						})}
				</div>
			</div>
		</section>
	);
});
