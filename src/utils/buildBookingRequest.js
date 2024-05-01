export const buildBookingRequest = (values) => {
	const phoneNumber = process.env.REACT_APP_PHONE_NO;
	const default_message =
		'Hello *StayOkay Hostel Management*, I would like to book a stay.';

	const name = 'Name: ' + values.first_name + '%20' + values.last_name;
	const gender = 'Gender: ' + values.gender;
	const idNumber = 'ID/Passport: ' + values.id_passport;
	const mobileNumber = 'Mobile No: ' + values.mobile_no.replace(/\s/g, '');
	const email = values.email && 'Email: ' + values.email + '%0a';
	const room = 'Room: ' + values.room + ' - ' + values.type_of_stay;
	const dates =
		'From: ' + values.check_in_date + '%0aTo: ' + values.check_out_date;

	return (
		'https://wa.me/' +
		phoneNumber +
		'?text=' +
		default_message +
		'%0a' +
		'--------------------' +
		'%0a' +
		'*Personal Details*' +
		'%0a' +
		'--------------------' +
		'%0a' +
		name +
		'%0a' +
		gender +
		'%0a' +
		idNumber +
		'%0a' +
		mobileNumber +
		'%0a' +
		email +
		'--------------------' +
		'%0a' +
		'*Booking Details*' +
		'%0a' +
		'--------------------' +
		'%0a' +
		room +
		'%0a' +
		dates +
		'%0a' +
		'--------------------'
	);
};
