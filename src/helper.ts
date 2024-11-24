import type { ImdbCsvRecord } from 'models';

export const isImdbCsvRecordArray = (records: unknown): records is ImdbCsvRecord[] => {
	if (!Array.isArray(records)) {
		return false;
	}

	return records.every((record: unknown) => (
		record !== null &&
		typeof record === 'object' &&
		'Const' in record &&
		'Created' in record &&
		'Date Rated' in record &&
		'Description' in record &&
		'Directors' in record &&
		'Genres' in record &&
		'IMDb Rating' in record &&
		'Modified' in record &&
		'Num Votes' in record &&
		'Original Title' in record &&
		'Position' in record &&
		'Release Date' in record &&
		'Runtime (mins)' in record &&
		'Title' in record &&
		'Title Type' in record &&
		'URL' in record &&
		'Year' in record &&
		'Your Rating' in record &&
		typeof (record as ImdbCsvRecord).Const === 'string' &&
		typeof (record as ImdbCsvRecord).Created === 'string' &&
		typeof (record as ImdbCsvRecord)['Date Rated'] === 'string' &&
		typeof (record as ImdbCsvRecord).Description === 'string' &&
		typeof (record as ImdbCsvRecord).Directors === 'string' &&
		typeof (record as ImdbCsvRecord).Genres === 'string' &&
		typeof (record as ImdbCsvRecord)['IMDb Rating'] === 'string' &&
		typeof (record as ImdbCsvRecord).Modified === 'string' &&
		typeof (record as ImdbCsvRecord)['Num Votes'] === 'string' &&
		typeof (record as ImdbCsvRecord)['Original Title'] === 'string' &&
		typeof (record as ImdbCsvRecord).Position === 'string' &&
		typeof (record as ImdbCsvRecord)['Release Date'] === 'string' &&
		typeof (record as ImdbCsvRecord)['Runtime (mins)'] === 'string' &&
		typeof (record as ImdbCsvRecord).Title === 'string' &&
		typeof (record as ImdbCsvRecord)['Title Type'] === 'string' &&
		typeof (record as ImdbCsvRecord).URL === 'string' &&
		typeof (record as ImdbCsvRecord).Year === 'string' &&
		typeof (record as ImdbCsvRecord)['Your Rating'] === 'string'
	));
};
