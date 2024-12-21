import { DataGrid } from '@mui/x-data-grid';
import { getDataGridColumns } from 'helper/getDataGridColumns';
import { formatRecordType } from 'helper/helper';
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
		getRowClassName={(params) => `${formatRecordType(params.row.type)}-row`}
		showCellVerticalBorder
		sx={{
			height: '600px',
			'& .MuiDataGrid-cell': {
				display: 'flex',
				alignItems: 'center',
				padding: '16px'
			}
		}}
	/>
);
