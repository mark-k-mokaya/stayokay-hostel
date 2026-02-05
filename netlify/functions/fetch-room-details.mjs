import {GoogleSpreadsheet} from 'google-spreadsheet';
import {JWT} from 'google-auth-library';

const serviceAccountAuth = new JWT({
	email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
	key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
	scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export default async (req, context) => {
	try {
		const doc = new GoogleSpreadsheet(
			process.env.GOOGLE_SPREADSHEET_ID,
			serviceAccountAuth,
		);

		await doc.loadInfo(); // Load sheet info
		const sheet = doc.sheetsByTitle['Room Details'];
		const rows = await sheet.getCellsInRange('A1:L5');
		return new Response(JSON.stringify(rows));
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({error}), {status: 400});
	}
};
