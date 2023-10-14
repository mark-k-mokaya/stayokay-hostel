import {SectionHeading, Modal} from '../components';
// Row 1
import GalleryBed1 from '../assets/img/gallery-bed-1.png';
import GalleryBed2 from '../assets/img/gallery-bed-2.png';
import GalleryBed3 from '../assets/img/gallery-bed-3.png';
import GalleryBed4 from '../assets/img/gallery-bed-4.png';
// Row 2
import GallerySink from '../assets/img/gallery-sink.png';
import GalleryToilet from '../assets/img/gallery-toilet.png';
import GalleryBathroom1 from '../assets/img/gallery-bathroom-1.png';
import GalleryBathroom2 from '../assets/img/gallery-bathroom-2.png';
// Row 3
import GalleryDesk from '../assets/img/gallery-desk.png';
import GalleryLockers from '../assets/img/gallery-lockers.png';
import GalleryKitchen1 from '../assets/img/gallery-kitchen-1.png';
import GalleryKitchen2 from '../assets/img/gallery-kitchen-2.png';
// Row 4
import GalleryLounge1 from '../assets/img/gallery-lounge-1.png';
import GalleryLounge2 from '../assets/img/gallery-lounge-2.png';
import GalleryCompLab from '../assets/img/gallery-computer-lab.png';
import GalleryCommonArea from '../assets/img/gallery-common-area.png';
// Row 5
import GalleryBuilding from '../assets/img/gallery-building.png';
import GalleryBalcony from '../assets/img/gallery-balcony.png';
import GalleryParking from '../assets/img/gallery-parking.png';
import GalleryOutdoorSitting from '../assets/img/gallery-outdoor-sitting.png';

export const Gallery = () => {
	return (
		<section id="gallery">
			<div className="section-container">
				<SectionHeading sub="WE’VE GOT PICTURES TOO" main="GALLERY" />

				{/* Section Content */}
				<div className="section-content">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5">
						{/*Row 1*/}
						<img src={GalleryBed1} />
						<img src={GalleryBed2} />
						<img src={GalleryBed3} />
						<img src={GalleryBed4} />
						{/*Row 2*/}
						<img src={GallerySink} />
						<img src={GalleryToilet} />
						<img src={GalleryBathroom1} />
						<img src={GalleryBathroom2} />
						{/*Row 3*/}
						<img src={GalleryDesk} />
						<img src={GalleryLockers} />
						<img src={GalleryKitchen1} />
						<img src={GalleryKitchen2} />

						{/*Row 4*/}
						<img src={GalleryLounge1} />
						<img src={GalleryLounge2} />
						<img src={GalleryCompLab} />
						<img src={GalleryCommonArea} />

						{/*Row 5*/}
						<img src={GalleryBuilding} />
						<img src={GalleryBalcony} />
						<img src={GalleryParking} />
						<img src={GalleryOutdoorSitting} />
					</div>
				</div>
			</div>
		</section>
	);
};
