import {SectionHeading, Feature} from '../components';
import WifiIcon from '../assets/img/features-icon-wifi.png';
import BedIcon from '../assets/img/features-icon-bed.png';
import TVIcon from '../assets/img/features-icon-tv.png';
import WaterIcon from '../assets/img/features-icon-water.png';
import CleaningIcon from '../assets/img/features-icon-cleaning.png';
import SecurityIcon from '../assets/img/features-icon-camera.png';
import ParkingIcon from '../assets/img/features-icon-car.png';
import CoffeeIcon from '../assets/img/features-icon-coffee.png';
import KitchenIcon from '../assets/img/features-icon-kitchen.png';
import StorageIcon from '../assets/img/features-icon-storage.png';

export const Features = () => {
	return (
		<section id="features" className="section-container pt-32">
			{/* Section Heading */}
			<SectionHeading sub="WHY CHOOSE US?" main="WHAT TO EXPECT" />

			{/* Section Content */}
			<div className="section-content">
				<div className="w-full flex flex-row flex-wrap justify-evenly">
					<Feature icon={WifiIcon} label="WI-FI" description="" />

					<Feature
						icon={BedIcon}
						label={'Self-Contained \n Rooms'}
						description=""
					/>

					<Feature
						icon={TVIcon}
						label="Lounge"
						description={'TV, Board games, \n Pool table, etc.'}
					/>

					<Feature
						icon={WaterIcon}
						label="Utilities"
						description={'Water, Electricity, \n Gas, etc.'}
					/>
					<Feature icon={CleaningIcon} label="House-Keeping" description="" />

					<Feature
						icon={SecurityIcon}
						label={'24-Hour \nSecurity'}
						description=""
					/>
					<Feature
						icon={ParkingIcon}
						label={'Spacious Parking \n Area'}
						description=""
					/>
					<Feature icon={CoffeeIcon} label="Tea and Coffee" description="" />
					<Feature
						icon={KitchenIcon}
						label={'Common Kitchen \n And Dining Area'}
						description=""
					/>
					<Feature
						icon={StorageIcon}
						label={'Luggage \n Storage'}
						description=""
					/>
				</div>
			</div>
		</section>
	);
};
