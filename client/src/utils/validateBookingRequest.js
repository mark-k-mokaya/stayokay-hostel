export const validateBookingRequest = (values) => {
	let errors = {};

	if (!values.first_name) {
		errors.first_name = 'Cannot be blank';
	} else if (values.first_name.length < 2) {
		errors.first_name = 'Invalid name';
	}

	if (!values.last_name) {
		errors.last_name = 'Cannot be blank';
	} else if (values.last_name.length < 2) {
		errors.last_name = 'Invalid name';
	}

	if (!values.id_passport) {
		errors.id_passport = 'Cannot be blank';
	}
	if (!values.id_passport) {
		errors.id_passport = 'Cannot be blank';
	}
	if (!values.gender) {
		errors.gender = 'Cannot be blank';
	}
	if (!values.gender) {
		errors.gender = 'Cannot be blank';
	}

	if (!values.check_in_date) {
		errors.check_in_date = 'Cannot be blank';
	} else if (values.check_in_date > values.check_out_date) {
		errors.check_in_date = 'Invalid Date';
	}

	if (!values.check_out_date) {
		errors.check_out_date = 'Cannot be blank';
	} else if (values.check_out_date < values.check_in_date) {
		errors.check_out_date = 'Invalid Date';
	}

	if (!values.room) {
		errors.room = 'Cannot be blank';
	}

	if (!values.period_of_stay) {
		errors.period_of_stay = 'Cannot be blank';
	}

	if (!values.mobile_no) {
		errors.mobile_no = 'Cannot be blank';
	} else if (
		!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
			values.mobile_no
		)
	) {
		errors.mobile_no = 'Invalid Mobile Number';
	}

	if (!values.email) {
		errors.email = 'Cannot be blank';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
		errors.email = 'Invalid Email format';
	}

	return errors;
};