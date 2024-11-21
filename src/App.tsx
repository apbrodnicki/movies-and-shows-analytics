import { Box } from '@mui/material';
import { FileUpload } from 'components/FileUpload';
import type { CsvRecord } from 'models';
import React, { useState } from 'react';

export const App = (): React.JSX.Element => {
	const [csvRecords, setCsvRecords] = useState<CsvRecord[]>([]);

	return (
		<>
			<FileUpload setCsvRecords={setCsvRecords} />
			{csvRecords.map((record, index) => (
				<Box key={index}>
					<Box>{record.title}</Box>
				</Box>
			))}
		</>
	);
};
