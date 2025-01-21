import { PieChart } from '@mui/x-charts';
import { filterCsvRecordsForPie } from 'helper/helper';
import type { CsvRecord } from 'models/models';
import React from 'react';

interface UserRatingsPieProps {
	records: CsvRecord[];
}

export const UserRatingsPie = ({ records }: UserRatingsPieProps): React.JSX.Element => {
	const ratings = filterCsvRecordsForPie(records);

	return (
		<PieChart
			series={[
				{
					data: ratings
				}
			]}
			width={400}
			height={200}
		/>
	);
};
