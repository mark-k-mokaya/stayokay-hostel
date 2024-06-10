export const validateBookingRequest = (values) => {
	let errors = {};
	// First Name
	if (!values.first_name) {
		errors.first_name = 'Cannot be blank';
	} else if (values.first_name.length < 2) {
		errors.first_name = 'Invalid name';
	}

	// Last Name
	if (!values.last_name) {
		errors.last_name = 'Cannot be blank';
	} else if (values.last_name.length < 2) {
		errors.last_name = 'Invalid name';
	}

	// ID/Passport
	if (values.id_passport && !/^[A-Z0-9]{8,9}$|^\d{6,8}$/im.test(values.id_passport)) {
		errors.id_passport = 'Invalid ID/Passport Number';
	}

	// Gender
	if (!values.gender) {
		errors.gender = 'Cannot be blank';
	}

	// Room
	if (!values.room) {
		errors.room = 'Cannot be blank';
	}

	// Type of Stay
	if (!values.type_of_stay) {
		errors.type_of_stay = 'Cannot be blank';
	}

	// Check In Date
	if (!values.check_in_date) {
		errors.check_in_date = 'Cannot be blank';
	} else if (
		values.check_out_date &&
		values.check_in_date > values.check_out_date
	) {
		errors.check_in_date = 'Invalid Date';
	}

	// Check Out Date
	if (!values.check_out_date) {
		errors.check_out_date = 'Cannot be blank';
	} else if (
		values.check_in_date &&
		values.check_out_date < values.check_in_date
	) {
		errors.check_out_date = 'Invalid Date';
	}

	// Verify if Dates match Type of Stay
	const dateDifference = Math.round(
		(new Date(values.check_out_date).getTime() -
			new Date(values.check_in_date).getTime()) /
			(1000 * 3600 * 24)
	);

	if (values.type_of_stay === 'Short Stay' && dateDifference > 10) {
		errors.check_in_date = errors.check_out_date =
			"Check In / Check Out dates don't match the type of stay";
	} else if (
		values.type_of_stay === 'Half Month' &&
		(dateDifference < 11 || dateDifference > 14)
	) {
		errors.check_in_date = errors.check_out_date =
			"Check In / Check Out dates don't match the type of stay";
	} else if (values.type_of_stay === 'Full Month' && dateDifference < 15) {
		errors.check_in_date = errors.check_out_date =
			"Check In / Check Out dates don't match the type of stay";
	}

	// Mobile No.
	if (!values.mobile_no) {
		errors.mobile_no = 'Cannot be blank';
	} else if (
		!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
			values.mobile_no.replace(/\s/g, '')
		)
	) {
		errors.mobile_no = 'Invalid Mobile Number';
	}

	// Email
	if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
		errors.email = 'Invalid Email format';
	}

	return errors;
};
	