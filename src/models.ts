export interface CsvRecord {
	description: string,
	directors: string,
	genres: string,
	imdbRating: number,
	votes: number,
	releaseDate: Date,
	runtime: number,
	title: string,
	type: string,
	imdbUrl: string,
	userRating: number
}

export interface ImdbCsvRecord {
	Const: string,
	Created: string,
	'Date Rated': string,
	Description: string,
	Directors: string,
	Genres: string,
	'IMDb Rating': string,
	Modified: string
	'Num Votes': string,
	'Original Title': string,
	Position: string
	'Release Date': string,
	'Runtime (mins)': string,
	Title: string,
	'Title Type': string,
	URL: string,
	Year: string,
	'Your Rating': string
}
