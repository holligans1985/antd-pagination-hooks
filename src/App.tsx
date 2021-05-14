import React from 'react';
import MainTable from './components/MainTable';
import MainPagination from './components/Pagination'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Antd pagination with hooks
        </p>
      </header>
      <MainTable/>
      <MainPagination/>
    </div>
  );
}

export default App;
