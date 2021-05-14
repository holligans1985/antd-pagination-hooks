import React from 'react';
import {Table} from 'antd';
import fakeData from '../../data/fakeData.json';

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

const MainTable = (props) => {
    

    return (<Table columns={columns} dataSource={fakeData} />);
};
export default MainTable;