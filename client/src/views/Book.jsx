import {SectionHeading, FormInput} from '../components';
export const Book = () => {
	return (
		<section id="book">
			<div className="section-container">
				<SectionHeading sub="BOOK YOUR ROOM WITH CONFIDENCE" main="BOOK NOW" />
				<div className="section-content w-full px-16">
					<form className="flex flex-col gap-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormInput name="first-name" label="First Name" type="text" />
							<FormInput name="last-name" label="Last Name" type="text" />

							<FormInput
								name="id-passport"
								label="ID/Passport No."
								type="text"
							/>
							<FormInput name="gender" label="Gender" type="select" />

							<FormInput
								name="check-in-date"
								label="Check In Date"
								type="date"
							/>
							<FormInput
								name="check-in-date"
								label="Check In Date"
								type="date"
							/>

							<FormInput name="room" label="Select Room" type="select" />
							<FormInput
								name="duration"
								label="Select Duration"
								type="select"
							/>
						</div>
						<FormInput name="mobile-no" label="Moble Number" type="text" />
						<FormInput name="email" label="Email Address" type="email" />
						<button className="book-submit-btn">Send Booking Request</button>
						<div className="text-base text-maroonSecondary font-medium text-center">
							<p>Payments are made during check-in.</p>
							<p>
								Kindly take a moment to review the{' '}
								<a href="#" className="underline">
									Stayokay Hostel Policies
								</a>
								.
							</p>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
