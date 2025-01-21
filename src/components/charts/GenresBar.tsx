import { BarChart } from '@mui/x-charts';
import { getGenreFrequency } from 'helper/helper';
import type { CsvRecord } from 'models/models';
import React from 'react';

interface GenresBarProps {
	records: CsvRecord[];
}

export const GenresBar = ({ records }: GenresBarProps): React.JSX.Element => {
	const genreFrequency = getGenreFrequency(records);

	return (
		<BarChart
			series={[{ data: Object.values(genreFrequency) }]}
			xAxis={[{
				scaleType: 'band',
				data: Object.keys(genreFrequency)
			}]}
			height={400}
			width={1800}
		/>
	);
};
