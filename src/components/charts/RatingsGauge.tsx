import { Box, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import { Gauge } from '@mui/x-charts';
import { getRatingAverage } from 'helper/helper';
import type { CsvRecord } from 'models';
import React, { useState } from 'react';

interface RatingsGaugeProps {
	records: CsvRecord[];
}

export const RatingsGauge = ({ records }: RatingsGaugeProps): React.JSX.Element => {
	const [showTotalImdbAverage, setShowTotalImdbAverage] = useState<boolean>(false);

	const ratingAverage = getRatingAverage(records);

	return (
		<Box display='flex' justifyContent='center'>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Typography>IMDB Average</Typography>
				<FormGroup>
					<FormControlLabel control={<Switch onChange={() => { setShowTotalImdbAverage(!showTotalImdbAverage); }} />} label='Include unrated titles' />
				</FormGroup>
				<Gauge
					value={showTotalImdbAverage ? ratingAverage.totalImdbAverage * 10 : ratingAverage.imdbAverage * 10}
					startAngle={-100}
					endAngle={100}
					innerRadius={75}
					outerRadius={100}
					width={300}
					height={150}
					text={({ value }) => `${((value ?? 0) / 10).toFixed(2)} / 10`}
				/>
			</Box>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Typography>User Average</Typography>
				<Gauge
					value={ratingAverage.userAverage * 10}
					startAngle={-100}
					endAngle={100}
					innerRadius={75}
					outerRadius={100}
					width={300}
					height={150}
					text={({ value }) => `${((value ?? 0) / 10).toFixed(2)} / 10`}
				/>
			</Box>
		</Box>
	);
};
