import {useEffect, useState, forwardRef} from 'react';
import {SectionHeading, FormInput} from '../components';
import WhatsAppIcon from '../assets/img/icons/whatsapp-icon.png';
import {buildBookingRequest} from '../utils/buildBookingRequest';
import {validateBookingRequest} from '../utils/validateBookingRequest';

const initialValues = {
	first_name: '',
	last_name: '',
	id_passport: '',
	gender: '',
	check_in_date: '',
	check_out_date: '',
	room: '',
	period_of_stay: '',
	mobile_no: '',
	email: '',
};

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${year}-${month}-${day}`;

export const Book = forwardRef(function Book(props, ref) {
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState(initialValues);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormErrors(validateBookingRequest(formValues));
		setIsSubmitting(true);
	};

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmitting) {
			window.open(buildBookingRequest(formValues), '_blank').focus();
			setFormValues(initialValues);
			setFormErrors(initialValues);
			setIsSubmitting(false);
		}
	}, [formErrors, formValues, isSubmitting]);

	return (
		<section id="book" className="section-container" ref={ref}>
			<SectionHeading sub="BOOK YOUR ROOM WITH CONFIDENCE" main="BOOK NOW" />
			<div className="section-content w-full xl:px-16">
				<form
					className="flex flex-col gap-6"
					method="post"
					onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<FormInput
							name="first_name"
							label="First Name"
							type="text"
							value={formValues.first_name}
							error={formErrors.first_name}
							onChange={handleChange}
						/>
						<FormInput
							name="last_name"
							label="Last Name"
							type="text"
							value={formValues.last_name}
							error={formErrors.last_name}
							onChange={handleChange}
						/>

						<FormInput
							name="id_passport"
							label="ID/Passport No."
							type="text"
							value={formValues.id_passport}
							error={formErrors.id_passport}
							onChange={handleChange}
						/>
						<FormInput
							name="gender"
							label="Gender"
							type="select"
							options={[
								{label: 'Male', value: 'Male'},
								{label: 'Female', value: 'Female'},
							]}
							value={formValues.gender}
							error={formErrors.gender}
							onChange={handleChange}
						/>

						<FormInput
							name="check_in_date"
							label="Check In Date"
							type="date"
							min={currentDate}
							value={formValues.check_in_date}
							error={formErrors.check_in_date}
							onChange={handleChange}
						/>
						<FormInput
							name="check_out_date"
							label="Check Out Date"
							type="date"
							min={formValues.check_in_date || currentDate}
							value={formValues.check_out_date}
							error={formErrors.check_out_date}
							onChange={handleChange}
						/>

						<FormInput
							name="room"
							label="Select Room"
							type="select"
							options={[
								{label: 'Shared Room', value: 'Shared Room'},
								{label: 'Deluxe Room', value: 'Deluxe Room'},
								{label: 'Family Room', value: 'Family Room'},
							]}
							value={formValues.room}
							error={formErrors.room}
							onChange={handleChange}
						/>
						<FormInput
							name="period_of_stay"
							label="Select Period of Stay"
							type="select"
							options={[
								{label: 'Short Stay', value: 'Short Stay'},
								{label: 'Half Month', value: 'Half Month'},
								{label: 'Full Month', value: 'Full Month'},
							]}
							value={formValues.period_of_stay}
							error={formErrors.period_of_stay}
							onChange={handleChange}
						/>
					</div>
					<FormInput
						name="mobile_no"
						label="Mobile Number"
						type="tel"
						value={formValues.mobile_no}
						error={formErrors.mobile_no}
						onChange={handleChange}
					/>
					<FormInput
						name="email"
						label="Email Address"
						type="email"
						value={formValues.email}
						error={formErrors.email}
						onChange={handleChange}
					/>

					<button className="book-submit-btn flex flex-col md:flex-row items-center justify-center gap-1 md:gap-x-3">
						<img src={WhatsAppIcon} className="w-8 md:w-6 h-8 md:h-6" alt="" />
						Send Booking Request via Whatsapp
					</button>

					<div className="text-base text-maroonSecondary font-medium text-center">
						<p>Payments are made during check-in.</p>
						<p>
							Kindly take a moment to review {' '}
							<a href="/terms" className="underline">
								Stayokay Hostel's Terms & Conditions
							</a>
							.
						</p>
					</div>
				</form>
			</div>
		</section>
	);
});
