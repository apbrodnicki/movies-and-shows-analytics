import { FileUpload } from 'components/FileUpload';
import { MoviesAndShowsDataGrid } from 'components/MoviesAndShowsDataGrid';
import { RatingsVotesScatter } from 'components/charts/RatingsVotesScatter';
import { UserRatingsD3Bar } from 'components/charts/UserRatingsD3Bar';
import type { CsvRecord } from 'models';
import React, { useState } from 'react';
import './RatingCell.css';
import './RecordType.css';

export const App = (): React.JSX.Element => {
	const [csvRecords, setCsvRecords] = useState<CsvRecord[]>([]);

	return (
		<>
			<FileUpload setCsvRecords={setCsvRecords} />
			<MoviesAndShowsDataGrid records={csvRecords} />
			<RatingsVotesScatter records={csvRecords} />
			<UserRatingsD3Bar records={csvRecords} />
		</>
	);
};
