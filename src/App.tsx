import { FileUpload } from 'components/FileUpload';
import { UserRatingsChart } from 'components/UserRatingsChart';
import type { CsvRecord } from 'models';
import React, { useState } from 'react';

export const App = (): React.JSX.Element => {
	const [csvRecords, setCsvRecords] = useState<CsvRecord[]>([]);

	return (
		<>
			<FileUpload setCsvRecords={setCsvRecords} />
			<UserRatingsChart records={csvRecords} />
		</>
	);
};
