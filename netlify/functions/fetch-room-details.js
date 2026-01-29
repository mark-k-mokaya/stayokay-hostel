require('dotenv').config();
const GoogleSpreadsheet = require('google-spreadsheet').GoogleSpreadsheet;
const JWT = require('google-auth-library').JWT;

const serviceAccountAuth = new JWT({
	email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
	key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
	scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

exports.handler = async () => {
	try {
		const doc = new GoogleSpreadsheet(
			process.env.GOOGLE_SPREADSHEET_ID,
			serviceAccountAuth,
		);

		await doc.loadInfo(); // Load sheet info
		const sheet = doc.sheetsByTitle['Room Details'];
		const rows = await sheet.getCellsInRange('A1:L5');
		return {
			statusCode: 200,
			body: JSON.stringify(rows),
		};
	} catch (error) {
		// throw new Error(error);
		console.log(error);
		return {
			statusCode: 400,
			body: JSON.stringify({error}),
		};
	}
};
