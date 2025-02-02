export interface CsvRecord {
	directors: string[],
	genres: Genre[],
	imdbRating: number,
	votes: number,
	releaseDate: Date,
	runtime: number,
	title: string,
	type: string,
	imdbUrl: string,
	userRating: Rating
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

export type Genre =
	| 'Action'
	| 'Adult'
	| 'Adventure'
	| 'Animation'
	| 'Biography'
	| 'Comedy'
	| 'Crime'
	| 'Documentary'
	| 'Drama'
	| 'Family'
	| 'Fantasy'
	| 'Film-Noir'
	| 'Game-Show'
	| 'History'
	| 'Horror'
	| 'Music'
	| 'Musical'
	| 'Mystery'
	| 'News'
	| 'Reality-TV'
	| 'Romance'
	| 'Sci-Fi'
	| 'Short'
	| 'Sport'
	| 'Talk-Show'
	| 'Thriller'
	| 'War'
	| 'Western';

export type Type =
	| 'Movie'
	| 'Music Video'
	| 'Podcast Episode'
	| 'Podcast Series'
	| 'Short'
	| 'TV Episode'
	| 'TV Mini Series'
	| 'TV Movie'
	| 'TV Series'
	| 'TV Short'
	| 'TV Special'
	| 'Video'
	| 'Video Game';

export type Rating = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
