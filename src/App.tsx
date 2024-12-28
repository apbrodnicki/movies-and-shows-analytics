import { FileUpload } from 'components/FileUpload';
import { MoviesAndShowsDataGrid } from 'components/MoviesAndShowsDataGrid';
import { RatingsGauge } from 'components/charts/RatingsGauge';
import { RatingsVotesScatter } from 'components/charts/RatingsVotesScatter';
import { UserRatingsD3Bar } from 'components/charts/UserRatingsD3Bar';
import { UserRatingsPie } from 'components/charts/UserRatingsPie';
import 'css/App.css';
import 'css/RatingCell.css';
import 'css/RecordType.css';
import type { CsvRecord } from 'models';
import React, { useState } from 'react';

export const App = (): React.JSX.Element => {
	const [csvRecords, setCsvRecords] = useState<CsvRecord[]>([]);

	return (
		<>
			<FileUpload setCsvRecords={setCsvRecords} />
			{csvRecords.length > 0 && (
				<>
					<MoviesAndShowsDataGrid records={csvRecords} />
					<RatingsGauge records={csvRecords} />
					<RatingsVotesScatter records={csvRecords} />
					<UserRatingsPie records={csvRecords} />
					<UserRatingsD3Bar records={csvRecords} />
				</>
			)}
		</>
	);
};
