export interface RatingsVotesScatterPoint {
	id: number,
	imdbRating: number,
	votes: number,
	userRating: number,
	[key: string]: string | number | Date | null | undefined
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
