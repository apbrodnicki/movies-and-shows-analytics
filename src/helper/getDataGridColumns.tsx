import { Link, Typography } from '@mui/material';
import type { GridColDef } from '@mui/x-data-grid';

export const getDataGridColumns = (): GridColDef[] => ([
	{
		field: 'title',
		headerName: 'Title',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (param) => (
			<Link href={param.row.imdbUrl} target='_blank'>
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
		renderCell: (param) => <Typography>{param.value !== 0 ? param.value : 'Unrated'}</Typography>
	},
	{
		field: 'imdbRating',
		headerName: 'IMDB Rating (/10)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		cellClassName: (param) => `rating-cell-${param.value !== 0 ? Math.floor(param.value as number) : '0'}`,
		renderCell: (param) => <Typography>{param.value}</Typography>
	},
	{
		field: 'votes',
		headerName: 'Votes',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		renderCell: (param) => <Typography>{param.value.toLocaleString()}</Typography>
	},
	{
		field: 'releaseDate',
		headerName: 'Release Date',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'date',
		renderCell: (param) => <Typography>{param.value.toLocaleString('default', { year: 'numeric', month: 'long' })}</Typography>
	},
	{
		field: 'type',
		headerName: 'Type',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (param) => <Typography>{param.value}</Typography>
	},
	{
		field: 'directors',
		headerName: 'Director(s)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (param) => <Typography>{param.value !== '' ? param.value : 'Unknown'}</Typography>
	},
	{
		field: 'genres',
		headerName: 'Genre(s)',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		renderCell: (param) => <Typography>{param.value}</Typography>
	},
	{
		field: 'runtime',
		headerName: 'Runtime',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
		type: 'number',
		renderCell: (param) => {
			let runtime = '';

			if (param.value === 0) {
				runtime = 'Unknown';
			}

			if (param.value > 0 && param.value < 60) {
				runtime = `${param.value} minutes`;
			}

			if (param.value === 60) {
				runtime = '1 hour';
			}

			if (param.value > 60) {
				const hours = Math.floor(param.value / 60);
				const minutes = param.value % 60;
				runtime = `${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minute${minutes > 1 ? 's' : ''}`;
			}

			return (
				<Typography>{runtime}</Typography>
			);
		}
	}
]);
