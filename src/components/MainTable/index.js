import React from 'react';
import {Table} from 'antd';

const dataIndex = [
    {
        id:'name1',
        name: 'Name1',
        age: 32,
        address: 'name1',
    },
    {
        id:'name2',
        name: 'Name2',
        age: 33,
        address: 'name2',
    },
    {
        id:'name3',
        name: 'Name3',
        age: 34,
        address: 'name3',
    }];

const MainTable = (props) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },];

    return (<Table columns={columns} dataSource={dataIndex} />);
};
export default MainTable;