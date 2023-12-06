import {forwardRef} from 'react';
import {SectionHeading, ReviewCard} from '../components';

export const Reviews = forwardRef(function Reviews(props, ref) {
	return (
		<section id="reviews" className="section-container" ref={ref}>
			<SectionHeading
				sub="HEAR WHAT OTHERS HAVE TO SAY"
				main="REVIEWS & TESTIMONIALS"
			/>

			<div className="section-content">
				<div className="review-container grid grid-cols-1 md:grid-cols-2">
					<ReviewCard
						review="It is a home away from home..  Modern facilities.. Excellent customer service"
						author="Cathy Grace"
					/>
					<ReviewCard
						review=<span>
							Very convenient especially for students.
							<br />
							Rooms: 5
							<br />
							Service: 5
							<br />
							Location: 5
						</span>
						author="Ann Wambui"
					/>
					<ReviewCard
						review=<span>
							They are clean and comfortable.
							<br />
							Trip type: Vacation
							<br />
							Travel group: Friends
							<br />
							Safety: Security is well managed
							<br />
							Hotel highlights: Luxury
						</span>
						author="Douglas Mochiemo"
					/>
					<ReviewCard
						review=<span>
							Travel group: Solo
							<br />
							Walkability:
							<br />
							It's a walking distance from Gusii stadium, Sports club and nearby
							hospitals such as Hema hospital, Agha Khan hospital etc and a
							short drive to supermarkets (such as Quickmart, Naivas, Unique,
							Kisii Matt etc)
							<br />
							Hotel highlights: Great value
						</span>
						author="Othwele Dogo"
					/>
					<ReviewCard
						review=<span>
							It's ideal for groups, and also individuals traveling to Kisii.
							Room are ideal with good amenities for overnight stays.
							<br />
							Rooms: 5
							<br />
							Service: 5
							<br />
							Location: 5
						</span>
						author="Sabina Olwaga"
					/>
				</div>

				<a
					href="https://www.google.com/maps/place/Stayokay+Hostel/@-0.6766701,34.7631056,17z/data=!4m24!1m12!3m11!1s0x182b3bfb8c88744b:0xcbc727c38c852323!2sStayokay+Hostel!5m2!4m1!1i2!8m2!3d-0.6766701!4d34.7656805!9m1!1b1!16s%2Fg%2F11c5bz4yyl!3m10!1s0x182b3bfb8c88744b:0xcbc727c38c852323!5m2!4m1!1i2!8m2!3d-0.6766701!4d34.7656805!9m1!1b1!16s%2Fg%2F11c5bz4yyl?entry=ttu"
					target="_blank"
					className="mt-4 mx-auto text-center uppercase w-full py-3 font-black text-2xl bg-light text-maroonPrimary border border-dark-25 rounded-[3px]"
					rel="noreferrer">
					More Reviews
				</a>
			</div>
		</section>
	);
});
