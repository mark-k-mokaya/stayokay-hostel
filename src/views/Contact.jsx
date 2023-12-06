import {forwardRef} from 'react';
import {SectionHeading} from '../components';

export const Contact = forwardRef(function Contact(props, ref) {
	return (
		<section id="contact" className="section-container" ref={ref}>
			<SectionHeading sub="KEEP IN TOUCH" main="CONTACT US" />

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
					<div className="border border-dark-25 overflow-hidden">
						<iframe title='StayOkay Hostels Kisii on Google Maps'
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.7700822279267!2d34.76460148732384!3d-0.6765621870954823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3bfb8c88744b%3A0xcbc727c38c852323!2sStayokay%20Hostel!5e0!3m2!1sen!2ske!4v1697962080580!5m2!1sen!2ske"
							className="border-0 w-full h-[400px] md:h-full"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
					<div className="flex flex-col gap-6">
						<div className="gap-2.5 w-full break-words">
							<h6 className=" uppercase">WHERE TO FIND US</h6>
							<p>Mwanyegitinge Village, Nyanchwa, Kisii, 40200, Kenya</p>
							<p>
								Situated 1.4 km from Quickmart Supermarket Kisii. The nearest
								airport is Kisumu International Airport, (111 km).
							</p>
						</div>
						<div className="gap-2.5 w-full break-words">
							<h6 className=" uppercase">OFFICE HOURS</h6>
							<p>The hostel operates around the clock. We are open 24/7.</p>
						</div>
						<div className="gap-2.5 w-full break-words">
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
});
