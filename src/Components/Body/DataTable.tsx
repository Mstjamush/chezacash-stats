import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import moment from "moment";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Summary } from "../../Models/reports";

interface Iprops {
  dataProp?: Summary;
  setGrid?: any;
  onReady?: any;
}
const DataTable: FC<Iprops> = ({ dataProp, setGrid, onReady }) => {
  const { pathname } = useLocation();

  const handleGetAmount = (params: any) => {
    return params.data[pathname.split("/")[1] || "registrations"];
  };
  const handleGetDate = (params: any) => {
    return moment(params.data.createdAt).format("DD/MM/YY") || moment().format("DD/MM/YY");
  };

  return (
    <div className="h-full w-full ag-theme-alpine" style={{ height: 500, width: 650 }}>
      <AgGridReact
        rowData={dataProp?.data}
        defaultColDef={{
          sortable: true,
          flex: 1,
          minWidth: 100,
          filter: true,
          resizable: true,
        }}
        pagination
        paginationPageSize={9}
        animateRows={true}
        onGridReady={onReady}
      >
        <AgGridColumn field="createdAt" valueGetter={handleGetDate} />
        <AgGridColumn field="Amount" valueGetter={handleGetAmount} />
      </AgGridReact>
    </div>
  );
};

export default DataTable;
