import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Typography } from '@mui/material';
import type { CsvError, Info } from 'csv-parse';
import { parse } from 'csv-parse/browser/esm';
import type { CsvRecord } from 'models';
import React, { useState, type ChangeEvent } from 'react';

export const App = (): React.JSX.Element => {
	const [csvRecords, setCsvRecords] = useState<CsvRecord[]>([]);

	const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.files !== null) {
			const reader = new FileReader();

			reader.onload = (event) => {
				if (typeof event.target?.result === 'string') {
					parse(event.target.result, {
						columns: ['id', 'value'],
						delimiter: ';',
						trim: true,
						skip_empty_lines: true
					}, (err: CsvError | undefined, records: CsvRecord[] | undefined, info: Info) => {
						if (err !== undefined) {
							console.log({ err });
						}
						if (records !== undefined) {
							console.log({ info });
							setCsvRecords(records);
						}
					});

				}
			};

			reader.readAsText(event.target.files[0]);
		}
	};
	console.log({ csvRecords });
	return (
		<>
			<Button
				component='label'
				variant='contained'
				startIcon={<CloudUploadIcon />}
			>
				<Typography>Upload File</Typography>
				<input
					type='file'
					accept='.csv'
					hidden
					onChange={handleFileUpload}
				/>
			</Button>
		</>
	);
};
