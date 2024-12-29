export interface CsvRecord {
	directors: string[],
	genres: string[],
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

export interface RatingsVotesScatterPoint {
	id: number,
	imdbRating: number,
	votes: number,
	userRating: number,
	[key: string]: string | number | Date | null | undefined
}

export interface RatingsOccurrences {
	0: number,
	1: number,
	2: number,
	3: number,
	4: number,
	5: number,
	6: number,
	7: number,
	8: number,
	9: number,
	10: number
}

export interface PieSlice {
	id: string,
	value: number,
	label: string
}

export interface RatingAverage {
	imdbAverage: number,
	totalImdbAverage: number,
	userAverage: number
}

export interface GenreFrequency {
	Action?: number,
	Adventure?: number,
	Animation?: number,
	Biography?: number,
	Comedy?: number,
	Crime?: number,
	Documentary?: number,
	Drama?: number,
	Family?: number,
	Fantasy?: number,
	'Game-Show'?: number,
	History?: number,
	Horror?: number,
	Music?: number,
	Musical?: number,
	Mystery?: number,
	'Reality-TV'?: number,
	Romance?: number,
	'Sci-Fi'?: number,
	Short?: number,
	Sport?: number,
	Thriller?: number,
	War?: number,
	Western?: number
}
