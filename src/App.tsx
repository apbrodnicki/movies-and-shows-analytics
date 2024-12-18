import { FileUpload } from 'components/FileUpload';
import { MoviesAndShowsDataGrid } from 'components/MoviesAndShowsDataGrid';
import { UserRatingsD3Bar } from 'components/UserRatingsD3Bar';
import type { CsvRecord } from 'models';
import React, { useState } from 'react';

export const App = (): React.JSX.Element => {
	const [csvRecords, setCsvRecords] = useState<CsvRecord[]>([]);

	return (
		<>
			<FileUpload setCsvRecords={setCsvRecords} />
			<MoviesAndShowsDataGrid records={csvRecords} />
			<UserRatingsD3Bar records={csvRecords} />
		</>
	);
};
