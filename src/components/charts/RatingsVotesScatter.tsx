import { ScatterChart } from '@mui/x-charts';
import { filterCsvRecordsForScatter } from 'helper/helper';
import type { CsvRecord } from 'models/models';
import React from 'react';

interface RatingsVotesScatterProps {
	records: CsvRecord[];
}

export const RatingsVotesScatter = ({ records }: RatingsVotesScatterProps): React.JSX.Element => {
	const scatterPoints = filterCsvRecordsForScatter(records);

	return (
		<ScatterChart
			dataset={scatterPoints}
			series={[
				{ datasetKeys: { id: 'id', x: 'votes', y: 'imdbRating' }, label: 'Votes - IMDB Rating' },
				{ datasetKeys: { id: 'id', x: 'votes', y: 'userRating' }, label: 'Votes - User Rating' }
			]}
			grid={{ horizontal: true, vertical: true }}
			height={500}
			width={1000}
		/>
	);
};
