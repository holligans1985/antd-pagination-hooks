import React,{useState,useEffect} from 'react';
import { Pagination } from 'antd';
import {Pagination as PaginationProps} from '../../types';

// Activate Loader
// Fecth total and set Total
// Handle Errors
// Set pageSize from url parameter(provide parameter name) or localStorage (provide key name) or use default (10 items);
// Set currentPage from url parameter(provide parameter name) or localStorage (provide key name) or use default (page #1);
// Fetch items for current page
// Handle Errors
// Disable Loading

// *** Handle pageSize change ***
// Update pageSize in url parameter or localStorage and locally
// Activate Loader
// Fetch items for current page (currentpage, pageSize)
// Handle Errors
// Disable Loading

// ***Handle currentpage Change***
// Update currentpage in url parameter or localStorage and locally
// Activate Loader
// Fetch items for current page (currentpage, pageSize)
// Handle Errors
// Disable Loading


// Component Arquitecture
// Wraps a component and attachs pagination capabilities to it
//<AddPagination data={data}>
    // <YourTable />
// </AddPagination>




const AddPagination = ({pagination,totalItems,handlePagination, render,...rest}) => {
  const {pageSize,current} = pagination;
  const{ total, loading } = totalItems;
    return <>{render()}
    <div>
        <Pagination {...rest} pageSize={pageSize} total={total} current={current + 1} onChange={handlePagination}/>
    </div></>;
}

export default AddPagination;