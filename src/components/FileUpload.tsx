import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Typography } from '@mui/material';
import { parse, type CsvError, type Info } from 'csv-parse/browser/esm';
import { isImdbCsvRecordArray } from 'helper/helper';
import type { CsvRecord, ImdbCsvRecord } from 'models';
import React, { type ChangeEvent } from 'react';

interface FileUploadProps {
	setCsvRecords: React.Dispatch<React.SetStateAction<CsvRecord[]>>
}

export const FileUpload = ({ setCsvRecords }: FileUploadProps): React.JSX.Element => {
	const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.files !== null && event.target.files[0].type === 'text/csv') {
			const reader = new FileReader();

			reader.onload = (ev) => {
				if (typeof ev.target?.result === 'string') {
					parse(ev.target.result, {
						columns: true,
						trim: true,
						skip_empty_lines: true
					}, (err: CsvError | undefined, records: unknown | undefined, _info: Info) => {
						if (err !== undefined) {
							console.log({ err });
						}

						if (records !== undefined && isImdbCsvRecordArray(records)) {
							// Filter out unused data and sort alphabetically
							const filteredRecords = records.map((record: ImdbCsvRecord): CsvRecord => ({
								directors: record.Directors.length > 0 ? record.Directors.split(',') : [],
								genres: record.Genres.length > 0 ? record.Genres.split(',') : [],
								imdbRating: +record['IMDb Rating'],
								votes: +record['Num Votes'],
								releaseDate: new Date(record['Release Date']),
								runtime: +record['Runtime (mins)'],
								title: record.Title,
								type: record['Title Type'],
								imdbUrl: record.URL,
								userRating: +record['Your Rating']
							})).sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

							setCsvRecords(filteredRecords);
						} else {
							console.log('Make sure the .csv file came directly from the IMDB export.');
						}
					});
				}
			};

			reader.readAsText(event.target.files[0]);
		} else {
			console.log('Make sure you entered a .csv file.');
		}
	};

	return (
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
	);
};
