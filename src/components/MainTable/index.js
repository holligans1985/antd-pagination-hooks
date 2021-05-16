import React from 'react';
import {Table} from 'antd';


const columns = [
    {
        title: 'ID',
        dataIndex: 'key',
        key: 'id',
    },
    {
      title: 'Picture',
      dataIndex: 'picture',
      key: 'picture',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: 'Last name',
        dataIndex: 'lastname',
        key: 'lastname',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      }
];

const MainTable = ({tableData}) => {
  const {data,loading,error} =  tableData;
    return (<Table columns={columns} dataSource={data} loading={loading}/>);
};
export default MainTable;