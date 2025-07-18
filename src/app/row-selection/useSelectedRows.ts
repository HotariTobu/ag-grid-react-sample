import { useCallback, useState } from 'react';
import type { RowSelectedEvent } from 'ag-grid-community';
import type { AgGridReactProps } from 'ag-grid-react';

type OnRowSelected<T> = NonNullable<AgGridReactProps<T>['onRowSelected']>;

/**
 * Hook for using selected rows in AgGrid.
 * @returns
 *   [0] selectedRows: An array of currently selected row data.
 *   [1] handleRowSelected: Callback function to be called on row selection event.
 *
 * @example
 * const [selectedRows, handleRowSelected] = useSelectedRows<Data>();
 *
 * <AgGridReact<Data>
 *   onRowSelected={handleRowSelected}
 * >
 *   ...
 * </AgGridReact>
 */
const useSelectedRows = <T>(): [T[], OnRowSelected<T>] => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handleRowSelected = useCallback((event: RowSelectedEvent<T>) => {
    setSelectedRows(event.api.getSelectedRows());
  }, []);

  return [selectedRows, handleRowSelected];
};

export default useSelectedRows;
