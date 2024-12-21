import type { CsvRecord, ImdbCsvRecord, PieSlice, RatingsOccurrences, RatingsVotesScatterPoint } from 'models';

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

export const filterCsvRecordsForScatter = (records: CsvRecord[]): RatingsVotesScatterPoint[] => (
	records.map((record, index) => ({
		id: index,
		imdbRating: record.imdbRating,
		votes: record.votes,
		userRating: record.userRating,
	}))
);

export const formatRecordType = (phrase: string): string => phrase.toLocaleLowerCase().replaceAll(' ', '-');

export const filterCsvRecordsForPie = (records: CsvRecord[]): PieSlice[] => {
	const occurrences: RatingsOccurrences = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 };
	const pie: PieSlice[] = [];

	const ratings = records.map((record) => record.userRating);

	for (const rating of ratings) {
		occurrences[rating as keyof RatingsOccurrences] = occurrences[rating as keyof RatingsOccurrences] + 1;
	}

	for (const occurrence in occurrences) {
		pie.push({
			id: occurrence,
			value: occurrences[occurrence as unknown as keyof RatingsOccurrences],
			label: occurrence !== '0' ? `${occurrence} / 10` : 'Unrated'
		});
	}

	return pie;
};
