import { Box, Link, Typography } from '@mui/material';
import type { GridCellParams, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import type { CsvRecord, Genre, Rating, Type } from 'models/models';

export const getDataGridColumns = (): GridColDef[] => ([
	{
		field: 'title',
		headerName: 'Title',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (params: GridRenderCellParams<CsvRecord, string>) => (
			<Link href={params.row.imdbUrl} target='_blank' color='#000000'>
				<Typography>{params.value}</Typography>
			</Link>
		)
	},
	{
		field: 'userRating',
		headerName: 'User Rating (/10)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		cellClassName: (params: GridCellParams<CsvRecord, Rating>) => `rating-cell-${params.value !== 0 ? params.value : '0'}`,
		renderCell: (params: GridRenderCellParams<CsvRecord, Rating>) => <Typography>{params.value !== 0 ? params.value : 'Unrated'}</Typography>
	},
	{
		field: 'imdbRating',
		headerName: 'IMDB Rating (/10)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		cellClassName: (params: GridCellParams<CsvRecord, number>) => `rating-cell-${params.value !== 0 ? Math.floor(params.value as number) : '0'}`,
		renderCell: (params: GridRenderCellParams<CsvRecord, number>) => <Typography>{params.value}</Typography>
	},
	{
		field: 'votes',
		headerName: 'Votes',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		renderCell: (params: GridRenderCellParams<CsvRecord, number>) => <Typography>{params.value !== undefined ? params.value.toLocaleString() : 'Unknown'}</Typography>
	},
	{
		field: 'releaseDate',
		headerName: 'Release Date',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'date',
		renderCell: (params: GridRenderCellParams<CsvRecord, Date>) => {
			if (params.value !== undefined) {
				if (params.value.getFullYear() === new Date().getFullYear() || params.value.getFullYear() === new Date().getFullYear() - 1) {
					return <Typography>{params.value.toLocaleString('default', { year: 'numeric', month: 'long' }).trim().replace(' ', ', ')}</Typography>;
				}

				return <Typography>{params.value.getFullYear()}</Typography>;
			}

			return <Typography>Unknown</Typography>;
		}
	},
	{
		field: 'type',
		headerName: 'Type',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (params: GridRenderCellParams<CsvRecord, Type>) => <Typography>{params.value}</Typography>
	},
	{
		field: 'directors',
		headerName: 'Director(s)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (params: GridRenderCellParams<CsvRecord, string[]>) => <Typography>{(params.value?.length ?? 0) > 0 ? params.value?.join(',') : 'Unknown'}</Typography>
	},
	{
		field: 'genres',
		headerName: 'Genre(s)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (params: GridRenderCellParams<CsvRecord, Genre[]>) => <Typography>{(params.value?.length ?? 0) > 0 ? params.value?.join(',') : 'Unknown'}</Typography>
	},
	{
		field: 'runtime',
		headerName: 'Runtime',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		renderCell: (params: GridRenderCellParams<CsvRecord, number>) => {
			if (params.value === undefined || params.value === 0) {
				return <Typography>Unknown</Typography>;
			}

			if (params.value > 0 && params.value < 60) {
				return <Typography>{params.value} minute{params.value > 1 ? 's' : ''}</Typography>;
			}

			if (params.value >= 60) {
				const hours = Math.floor(params.value / 60);
				const minutes = params.value % 60;

				return (
					<Box>
						<Typography>{`${hours} hour${hours > 1 ? 's' : ''}`}</Typography>
						<Typography>{minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''}</Typography>
					</Box>
				);
			}
		}
	}
]);
