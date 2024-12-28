import { Box, Link, Typography } from '@mui/material';
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import type { CsvRecord } from 'models';

export const getDataGridColumns = (): GridColDef[] => ([
	{
		field: 'title',
		headerName: 'Title',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (param: GridRenderCellParams<CsvRecord, string>) => (
			<Link href={param.row.imdbUrl} target='_blank' color='#000000'>
				<Typography>{param.value}</Typography>
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
		cellClassName: (param) => `rating-cell-${param.value !== 0 ? param.value : '0'}`,
		renderCell: (param: GridRenderCellParams<CsvRecord, number>) => <Typography>{param.value !== 0 ? param.value : 'Unrated'}</Typography>
	},
	{
		field: 'imdbRating',
		headerName: 'IMDB Rating (/10)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		cellClassName: (param) => `rating-cell-${param.value !== 0 ? Math.floor(param.value as number) : '0'}`,
		renderCell: (param: GridRenderCellParams<CsvRecord, number>) => <Typography>{param.value}</Typography>
	},
	{
		field: 'votes',
		headerName: 'Votes',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		renderCell: (param: GridRenderCellParams<CsvRecord, number>) => <Typography>{param.value !== undefined ? param.value.toLocaleString() : 'Unknown'}</Typography>
	},
	{
		field: 'releaseDate',
		headerName: 'Release Date',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'date',
		renderCell: (param: GridRenderCellParams<CsvRecord, Date>) => {
			if (param.value !== undefined) {
				if (param.value.getFullYear() === new Date().getFullYear() || param.value.getFullYear() === new Date().getFullYear() - 1) {
					return <Typography>{param.value.toLocaleString('default', { year: 'numeric', month: 'long' }).trim().replace(' ', ', ')}</Typography>;
				}

				return <Typography>{param.value.getFullYear()}</Typography>;
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
		renderCell: (param: GridRenderCellParams<CsvRecord, string>) => <Typography>{param.value}</Typography>
	},
	{
		field: 'directors',
		headerName: 'Director(s)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (param: GridRenderCellParams<CsvRecord, string[]>) => <Typography>{(param.value?.length ?? 0) > 0 ? param.value?.join(',') : 'Unknown'}</Typography>
	},
	{
		field: 'genres',
		headerName: 'Genre(s)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (param: GridRenderCellParams<CsvRecord, string[]>) => <Typography>{(param.value?.length ?? 0) > 0 ? param.value?.join(',') : 'Unknown'}</Typography>
	},
	{
		field: 'runtime',
		headerName: 'Runtime',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		renderCell: (param: GridRenderCellParams<CsvRecord, number>) => {
			if (param.value === undefined || param.value === 0) {
				return <Typography>Unknown</Typography>;
			}

			if (param.value > 0 && param.value < 60) {
				return <Typography>{param.value} minute{param.value > 1 ? 's' : ''}</Typography>;
			}

			if (param.value >= 60) {
				const hours = Math.floor(param.value / 60);
				const minutes = param.value % 60;

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
