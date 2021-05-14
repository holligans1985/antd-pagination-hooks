import React,{useState,useEffect} from 'react';
import { Pagination,Spin } from 'antd';
import services from '../../services/services';

const {getPaginationTotal,getPaginatedData} = services;

const MainPagination = (props) => {
  const [paginationTotal, setPaginationTotal] = useState(0);
  const [paginationLoader, setPaginationLoader] = useState(true);

  useEffect(() => {
      async function getTotalPagination(){
        const total = await getPaginationTotal();
        setPaginationTotal(total);
        setPaginationLoader(false);
      }
      getTotalPagination();
  },[]); 

  // page size logic
const [pageSize, setPageSize] = useState(10);
const onShowSizeChange = (current, size) => {
  setPageSize(size);
}

// offset Logic
const [offset, setOffset] = useState(0);
const [current, setCurrent] = useState(1);

const onChange = page => {
  setCurrent(page);
}

useEffect(() => {
  async function loadData(){
    const newOffset = offset + pageSize; //off:100 , ps:20, c:3
    const data = await getPaginatedData(offset,newOffset);
    setOffset(newOffset);
  }
  loadData();
}, [current,pageSize])

    if(paginationLoader) return <Spin tip="Loading Pagination" size="small"/>;
    return <Pagination showSizeChanger pageSize={pageSize} onShowSizeChange={onShowSizeChange}  hideOnSinglePage current={current} onChange={onChange} total={paginationTotal} />;
}

export default MainPagination;