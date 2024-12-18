import { DataGrid } from '@mui/x-data-grid';
import { getDataGridColumns } from 'helper/getDataGridColumns';
import type { CsvRecord } from 'models';
import React from 'react';

interface MoviesAndShowsDataGridProps {
	records: CsvRecord[];
}

export const MoviesAndShowsDataGrid = ({ records }: MoviesAndShowsDataGridProps): React.JSX.Element => (
	<DataGrid
		columns={getDataGridColumns()}
		rows={records}
		getRowId={(row: CsvRecord) => `${row.title} ${row.imdbUrl}`}
		getRowHeight={() => 'auto'}
		getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'}
		showCellVerticalBorder
		sx={{
			height: '600px',
			'& .MuiDataGrid-cell': {
				display: 'flex',
				alignItems: 'center'
			},
			// '& .even-row': {
			// 	backgroundColor: 'gray'
			// },
			// '& .odd-row': {
			// 	backgroundColor: 'light gray'
			// }
		}}
	/>
);
