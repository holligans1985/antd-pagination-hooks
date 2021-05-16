import React,{useState,useEffect} from 'react';
import MainTable from './components/MainTable';
import AddPagination from './components/Pagination'
import services from './services/services';
// import {Pagination,TableData} from './types';
import './App.css';

const {getPaginationTotal,getPaginatedData} = services;

function App() {
  const [totalItems, setTotalItems] = useState({total:0,loading:true});
  useEffect(() => {
    console.log("useEffect 1");
    async function getTotalItems(){
      const totalItems = await getPaginationTotal(); //add queryString option as a parameters in the future
      setTotalItems({total:totalItems,loading:false });
      console.log('total:',totalItems);
    };
    getTotalItems();
  },[]);

  const paginationInitial = {pageSize:10,current:0,offset:0}
  const [pagination, setPagination] = useState(paginationInitial);

const handlePagination = (current, pageSize) => {
  console.log(current, pageSize);
  const offset = (current - 1) * pageSize;
  setPagination({pageSize,current: current - 1,offset});
} 

  const tableDataInitial = {data:[], error:false, loading:true}
  const [tableData, setTableData] = useState(tableDataInitial);

  useEffect(() => {
    console.log("useEffect 2");
    setTableData({...tableData, error:false, loading: true});
    async function getPageData(){
      const {offset, pageSize:limit} = pagination;
      const pageData = await getPaginatedData({offset,limit});
      setTableData({data:pageData, error:false, loading: false})
      console.log('pageData',pageData);
    };
    getPageData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Antd pagination with hooks
        </p>
      </header>
      <AddPagination pagination={pagination} totalItems={totalItems} handlePagination={handlePagination} render={() => <MainTable tableData={tableData}/>}/>
    </div>
  );
}

export default App;
