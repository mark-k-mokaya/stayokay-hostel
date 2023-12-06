import { forwardRef } from 'react';
import {SectionHeading, Feature} from '../components';
import WifiIcon from '../assets/img/icons/features-icon-wifi.png';
import BedIcon from '../assets/img/icons/features-icon-bed.png';
import TVIcon from '../assets/img/icons/features-icon-tv.png';
import WaterIcon from '../assets/img/icons/features-icon-water.png';
import CleaningIcon from '../assets/img/icons/features-icon-cleaning.png';
import SecurityIcon from '../assets/img/icons/features-icon-camera.png';
import ParkingIcon from '../assets/img/icons/features-icon-car.png';
import CoffeeIcon from '../assets/img/icons/features-icon-coffee.png';
import KitchenIcon from '../assets/img/icons/features-icon-kitchen.png';
import StorageIcon from '../assets/img/icons/features-icon-storage.png';

export const Features = forwardRef(function Features(props, ref)  {
	return (
		<section id="features" className="section-container pt-32" ref={ref}>
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
});
