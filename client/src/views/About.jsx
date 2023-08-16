import {SectionHeading} from '../components';

export const About = () => {
	return (
		<section
			id="about"
			className="h-full flex flex-col items-center justify-center">
			<SectionHeading main="WE'RE JUST LIKE HOME" sub="WELCOME TO STAYOKAY" />

			{/* Section Content */}
			<div className="text-xl leading-8 mt-16 max-w-[1096px]">
				Welcome to StayOkay Hostels Kisii! Our hostel is located in the heart of
				Kisii town, surrounded by lush greenery and a vibrant local community.
				Whether you're traveling solo or with a group, StayOkay Hostels Kisii
				offers comfortable and affordable accommodation, making it the perfect
				base for exploring the stunning natural beauty and cultural richness of
				western Kenya. Book your stay today and experience the warmth and
				hospitality of Kisii!
			</div>
		</section>
	);
};
