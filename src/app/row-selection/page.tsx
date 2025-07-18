'use client';

import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, ColDef } from 'ag-grid-community';
import useSelectedRows from './useSelectedRows';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

type Car = {
    make: string;
    model: string;
    price: number;
    electric: boolean;
}

const GridExample = () => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<Car[]>([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState<ColDef<Car>[]>([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);

    const [selectedRows, handleRowSelected] = useSelectedRows<Car>();

    return (
        <div>
            {/* Data Grid will fill the size of the parent container */}
            <div className='h-64'>
                <AgGridReact<Car>
                    rowData={rowData}
                    columnDefs={colDefs}
                    rowSelection={{
                        mode: "multiRow"
                    }}
                    onRowSelected={handleRowSelected}
                    />
            </div>
            <pre>
                {JSON.stringify(selectedRows, null, 2)}
            </pre>
        </div>
    )
}

export default GridExample;
