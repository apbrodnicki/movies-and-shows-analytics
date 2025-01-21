import { DefaultRatingFrequency, type GenreFrequency, type PieSlice, type RatingAverage, type RatingFrequency, type RatingsVotesScatterPoint } from 'models/chartModels';
import type { CsvRecord, ImdbCsvRecord, Rating } from 'models/models';

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

export const filterCsvRecordsForRatingsVotesScatter = (records: CsvRecord[]): RatingsVotesScatterPoint[] => (
	records.map((record, index) => ({
		id: index,
		imdbRating: record.imdbRating,
		votes: record.votes,
		userRating: record.userRating,
	}))
);

export const getDataGridRowClassName = (row: CsvRecord): string => row.type.toLocaleLowerCase().replaceAll(' ', '-');

export const getUserRatingsPieSlices = (records: CsvRecord[]): PieSlice[] => {
	const slices: PieSlice[] = [];
	const ratingFrequency = getRatingFrequency(records);

	for (const rating in ratingFrequency) {
		slices.push({
			id: rating,
			value: ratingFrequency[rating as unknown as Rating],
			label: rating !== '0' ? `${rating} / 10` : 'Unrated'
		});
	}

	return slices;
};

export const getRatingAverage = (records: CsvRecord[]): RatingAverage => {
	const recordsToSkip: string[] = [];

	const userTotal = records.reduce((accumulator, record) => {
		if (record.userRating === 0) {
			recordsToSkip.push(record.title);

			return accumulator;
		}

		return accumulator + record.userRating;
	}, 0);

	const imdbTotal = records.reduce((accumulator, record) => {
		if (recordsToSkip.includes(record.title)) {
			return accumulator;
		}

		return accumulator + record.imdbRating;
	}, 0);

	return {
		imdbAverage: imdbTotal / (records.length - recordsToSkip.length),
		totalImdbAverage: records.reduce((accumulator, record) => accumulator + record.imdbRating, 0) / records.length,
		userAverage: userTotal / (records.length - recordsToSkip.length)
	};
};

export const getGenreFrequency = (records: CsvRecord[]): GenreFrequency => {
	const genreFrequency: GenreFrequency = {};

	for (const record of records) {
		for (const genre of record.genres) {
			const imdbGenre = genre.trim() as keyof GenreFrequency;

			genreFrequency[imdbGenre] = genreFrequency[imdbGenre] !== undefined ? genreFrequency[imdbGenre] + 1 : 1;
		}
	}

	// Sort GenreFrequency object alphabetically
	return Object.keys(genreFrequency).sort().reduce((accumulator: GenreFrequency, genreKey) => {
		accumulator[genreKey as keyof GenreFrequency] = genreFrequency[genreKey as keyof GenreFrequency];

		return accumulator;
	}, {});
};

export const getRatingFrequency = (records: CsvRecord[]): RatingFrequency => {
	const ratingFrequency = { ...DefaultRatingFrequency };

	for (const record of records) {
		ratingFrequency[record.userRating] = ratingFrequency[record.userRating] + 1;
	}

	return ratingFrequency;
};
