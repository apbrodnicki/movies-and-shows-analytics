import type { Genre, Rating } from './models';

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

export type GenreFrequency = {
	[key in Genre]?: number
};

export type RatingFrequency = {
	[key in Rating]: number
};

export const DefaultRatingFrequency: RatingFrequency = ({
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0
});
