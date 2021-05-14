import React,{useState,useEffect} from 'react';
import { Pagination,Spin } from 'antd';
import services from '../../services/services';

const {getPaginationTotal} = services;

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

  const [current, setCurrent] = useState(1);

  const onChange = page => setCurrent(page);

    if(paginationLoader) return <Spin tip="Loading Pagination" size="small"/>;
    return <Pagination hideOnSinglePage current={current} onChange={onChange} total={paginationTotal} />;
}

export default MainPagination;