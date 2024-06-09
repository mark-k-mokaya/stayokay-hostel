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
	type_of_stay: '',
	mobile_no: '',
	email: '',
};

const fetchDate = (selectedDate) => {
	const date = selectedDate ? new Date(selectedDate) : new Date();
	const day = ('0' + date.getDate()).slice(-2);
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const year = date.getFullYear();
	return `${year}-${month}-${day}`;
};

const currentDate = fetchDate();

const getDateLimit = (selectedDate, maxDays) => {
	const result = new Date(selectedDate).setDate(
		new Date(selectedDate).getDate() + maxDays
	);
	return fetchDate(result);
};

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

		setFormErrors({
			...formErrors,
			[name]: '',
		});
	};

	const handleReset = () => {
		setFormValues(initialValues);
		setFormErrors(initialValues);
		setIsSubmitting(false);
	};

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmitting) {
			window.open(buildBookingRequest(formValues), '_blank').focus();
			setFormErrors(initialValues);
			setIsSubmitting(false);
		}
	}, [formErrors, formValues, isSubmitting]);

	return (
		<section
			id="book"
			className={`relative section-container ${props.className}`}
			ref={ref}>
			<SectionHeading sub="BOOK YOUR ROOM WITH CONFIDENCE" main="BOOK NOW" />
			<div className="section-content w-full xl:px-16">
				<form
					className="flex flex-col gap-6"
					method="post"
					onSubmit={handleSubmit}>
					<div className="text-right">
						<button
							onClick={handleReset}
							className="text-maroonPrimary rounded-[] disabled:text-dark-50"
							disabled={
								formValues === initialValues &&
								formErrors === initialValues &&
								!isSubmitting
							}>
							Reset
						</button>
					</div>
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
							className="uppercase"
							value={formValues.id_passport.toUpperCase()}
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
							name="room"
							label="Select Room"
							type="select"
							options={[
								{label: 'Shared Room', value: 'Shared Room'},
								{label: 'Deluxe Room', value: 'Deluxe Room'},
								{label: 'Family Room', value: 'Family Room'},
								{label: 'Student Room', value: 'Student Room'},
							]}
							value={formValues.room}
							error={formErrors.room}
							onChange={handleChange}
						/>
						<FormInput
							name="type_of_stay"
							label="Select Type of Stay"
							type="select"
							options={[
								{label: 'Short Stay (1 - 10 days)', value: 'Short Stay'},
								{label: 'Half Month (up to 14 days)', value: 'Half Month'},
								{label: 'Full Month (1 month or more)', value: 'Full Month'},
							]}
							value={formValues.type_of_stay}
							error={formErrors.type_of_stay}
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
							min={
								formValues.type_of_stay
									? (formValues.type_of_stay === 'Short Stay' &&
											(formValues.check_in_date || currentDate)) ||
									  (formValues.type_of_stay === 'Half Month' &&
											getDateLimit(
												formValues.check_in_date || currentDate,
												11
											)) ||
									  (formValues.type_of_stay === 'Full Month' &&
											getDateLimit(formValues.check_in_date || currentDate, 28))
									: formValues.check_in_date || currentDate
							}
							max={
								formValues.type_of_stay &&
								((formValues.type_of_stay === 'Short Stay' &&
									getDateLimit(formValues.check_in_date || currentDate, 10)) ||
									(formValues.type_of_stay === 'Half Month' &&
										getDateLimit(
											formValues.check_in_date || currentDate,
											14
										)) ||
									(formValues.type_of_stay === 'Full Month' &&
										getDateLimit(formValues.check_in_date || currentDate, 31)))
							}
							value={formValues.check_out_date}
							error={formErrors.check_out_date}
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
						label="Email Address (optional)"
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
							Kindly take a moment to review{' '}
							<a href="/terms" className="underline">
								StayOkay Hostel's Terms & Conditions
							</a>
							.
						</p>
					</div>
				</form>
			</div>
		</section>
	);
});
