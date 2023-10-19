import React, {useEffect, useState} from 'react';
import {Button, Table} from 'antd';
import useRowChangeNum from "./useRowChangeNum";


const testDataSource = [
  {
    name: 'lwq',
    age: 18,
    gender: 'male'
  },
  {
    name: 'lwq',
    age: 19,
    gender: 'male'
  },
  {
    name: 'lwq',
    age: 20,
    gender: 'male'
  }
];

const TableChangRowNum = props => {
  const {dataSource, setDataSource, handleIncrement, handleDecrement} = useRowChangeNum([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDataSource(testDataSource);
      setLoading(false);
    }, 1000);
  }, [])

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 200,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 200,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      width: 200,
    },
    {
      title: '操作',
      dataIndex: 'ops',
      width: 200,
      render: (_, __, index) =>{
        return (
          <Button onClick={()=>{
            handleDecrement(index);
          }}>X</Button>
        )
      }
    }
  ]


  return (
      <>
      <Table
        columns={columns}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      />
      <Button type="dashed" style={{width: "100%"}} onClick={handleIncrement}>+</Button>
      </>
  )
}

export default TableChangRowNum;
