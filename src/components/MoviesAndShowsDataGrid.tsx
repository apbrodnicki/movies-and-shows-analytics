import { Link, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { CsvRecord } from 'models';
import React from 'react';

interface MoviesAndShowsDataGridProps {
	records: CsvRecord[];
}

export const MoviesAndShowsDataGrid = ({ records }: MoviesAndShowsDataGridProps): React.JSX.Element => {
	const columns: GridColDef[] = [
		{
			field: 'title',
			headerName: 'Title',
			renderCell: (param) => (
				<Link href={param.row.imdbUrl} target='_blank'>
					<Typography>{param.value}</Typography>
				</Link>
			)
		},
		{
			field: 'userRating',
			headerName: 'User Rating',
			renderCell: (param) => <Typography>{param.value}</Typography>
		},
		{
			field: 'imdbRating',
			headerName: 'IMDB Rating',
			renderCell: (param) => <Typography>{param.value}</Typography>
		},
		{
			field: 'votes',
			headerName: 'Votes',
			renderCell: (param) => <Typography>{param.value}</Typography>
		},
		{
			field: 'releaseDate',
			headerName: 'Release Date',
			renderCell: (param) => <Typography>{param.value.getFullYear()}</Typography>
		},
		{
			field: 'type',
			headerName: 'Type',
			renderCell: (param) => <Typography>{param.value}</Typography>
		},
		{
			field: 'directors',
			headerName: 'Director(s)',
			renderCell: (param) => <Typography>{param.value}</Typography>
		},
		{
			field: 'genres',
			headerName: 'Genre(s)',
			renderCell: (param) => <Typography>{param.value}</Typography>
		},
		{
			field: 'runtime',
			headerName: 'Runtime',
			renderCell: (param) => <Typography>{param.value}</Typography>
		},
		{
			field: 'description',
			headerName: 'Description',
			renderCell: (param) => <Typography>{param.value}</Typography>
		}
	];

	return (
		<DataGrid
			columns={columns}
			rows={records}
			getRowId={(row: CsvRecord) => `${row.title} ${row.imdbUrl}`}
		/>
	);
};
