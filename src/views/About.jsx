import {forwardRef} from 'react';
import {SectionHeading} from '../components';

export const About = forwardRef(function About(props, ref) {
	return (
		<section id="about" className={`relative section-container ${props.className}`} ref={ref}>
			{/* Section Heading */}
			<SectionHeading sub="WELCOME TO STAYOKAY" main="JUST LIKE HOME" />

			{/* Section Content */}
			<div className="section-content">
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
});
