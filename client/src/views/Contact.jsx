import {SectionHeading} from '../components';

export const Contact = () => {
	return (
		<section id="contact">
			<div className="section-container">
				<SectionHeading sub="KEEP IN TOUCH" main="CONTACT US" />
			</div>
			<div className="section-content">
				<p>
					StayOkay Hostels Kisii is more than just a place to sleep - it's a
					community. Our hostel was founded with the belief that quality
					accommodation should be accessible to everyone, and we strive to
					provide a welcoming and inclusive environment for all our guests.
					<br />
					<br />
					Contact us today to reserve your room or ask any questions you may
					have.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12">
					<div className="border">Map</div>
					<div className="flex flex-col gap-6">
						<div className="gap-2.5">
							<h6 className=" uppercase">WHERE TO FIND US</h6>
							<p>Mwanyegitinge Village, Nyanchwa, Kisii, 40200, Kenya</p>
							<p>
								Situated 1.4 km from Quickmart Supermarket Kisii. The nearest
								airport is Kisumu International Airport, (111 km).
							</p>
						</div>
						<div>
							<h6 className=" uppercase">OFFICE HOURS</h6>
							<p>The hostel operates around the clock. We are open 24/7.</p>
						</div>
						<div>
							<h6 className=" uppercase">CONTACT INFO</h6>
							<p>
								<strong>Phone:</strong> +254 722 394 133
							</p>
							<p>
								<strong>Email:</strong> stayokayhostelkisii@gmail.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
