import { PieChart } from '@mui/x-charts';
import { getUserRatingsPieSlices } from 'helper/helper';
import type { CsvRecord } from 'models/models';
import React from 'react';

interface UserRatingsPieProps {
	records: CsvRecord[];
}

export const UserRatingsPie = ({ records }: UserRatingsPieProps): React.JSX.Element => {
	const pieSlices = getUserRatingsPieSlices(records);

	return (
		<PieChart
			series={[
				{
					data: pieSlices
				}
			]}
			width={400}
			height={200}
		/>
	);
};
