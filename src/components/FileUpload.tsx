import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Typography } from '@mui/material';
import { parse, type CsvError, type Info } from 'csv-parse/browser/esm';
import type { CsvRecord, ImdbCsvRecord } from 'models';
import React, { type ChangeEvent } from 'react';

interface FileUploadProps {
	setCsvRecords: React.Dispatch<React.SetStateAction<CsvRecord[]>>
}

export const FileUpload = ({ setCsvRecords }: FileUploadProps): React.JSX.Element => {
	const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.files !== null) {
			const reader = new FileReader();

			reader.onload = (ev) => {
				if (typeof ev.target?.result === 'string') {
					parse(ev.target.result, {
						columns: true,
						trim: true,
						skip_empty_lines: true
					}, (err: CsvError | undefined, records: ImdbCsvRecord[] | undefined, _info: Info) => {
						if (err !== undefined) {
							console.log({ err });
						}

						if (records !== undefined) {
							const filteredRecords = records.map((record: ImdbCsvRecord): CsvRecord => {
								const { Const, Created, 'Date Rated': dateRated, Modified, Position, Year, ...rest } = record;

								return {
									description: rest.Description,
									directors: rest.Directors,
									genres: rest.Genres,
									imdbRating: rest['IMDb Rating'],
									votes: rest['Num Votes'],
									originalTitle: rest['Original Title'],
									releaseDate: rest['Release Date'],
									runtime: rest['Runtime (mins)'],
									title: rest.Title,
									type: rest['Title Type'],
									imdbUrl: rest.URL,
									userRating: rest['Your Rating']
								};
							});

							setCsvRecords(filteredRecords);
						}
					});
				}
			};

			reader.readAsText(event.target.files[0]);
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