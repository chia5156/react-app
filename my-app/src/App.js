import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

function App() {

  const [rowData] = useState([
    { name: "a", traffic: "7.5", date: "2023/02/15" },
    { name: "a",traffic: "7.5", date: "2023/02/13" },
    { name: "a",traffic: "7.5", date: "2023/02/12" },
    { name: "a",traffic: "7.5", date: "2023/02/11" },
    { name: "a",traffic: "7.5", date: "2023/02/10" },
    { name: "a",traffic: "7.5", date: "2023/02/09" }

  ]);

  const [columnDefs, setColumnDefs] = useState([
    {field: 'traffic', filter: true},
    {field: 'name', filter: true},
    {field: 'date', filter: true}
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}

export default App;
