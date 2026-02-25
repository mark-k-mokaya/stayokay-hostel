const GoogleSpreadsheet = require('google-spreadsheet').GoogleSpreadsheet;
const JWT = require('google-auth-library').JWT;

const serviceAccountAuth = new JWT({
	email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
	key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
	scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

exports.handler = async (event, context) => {
	try {
		const doc = new GoogleSpreadsheet(
			process.env.GOOGLE_SPREADSHEET_ID,
			serviceAccountAuth,
		);

		await doc.loadInfo(); // Load sheet info
		const sheet = doc.sheetsByTitle['Room Details'];
		const rows = await sheet.getCellsInRange('A1:L5');
		return {
			body: JSON.stringify(rows),
			statusCode: 200,
		};
	} catch (error) {
		console.log(error);
		return {
			body: JSON.stringify({error}),
			statusCode: 400,
		};
	}
};
