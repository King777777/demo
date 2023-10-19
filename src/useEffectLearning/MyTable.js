import React, { useState } from "react";
import styles from "./style.module.css";
import { Table } from "antd";

export default function MyTable(props) {
  const [clickIndex, setClickIndex] = useState(-1);
  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const { setSelectedRowKeys, setSelectedRows, selectedRowKeys, selectedRows } = props;
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
    },
    selectedKeys: selectedRowKeys,
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="key"
      rowClassName={(record, index) => {
        if (index === clickIndex) {
          return styles.tb;
        }
        return;
      }}
      rowSelection={rowSelection}
      onRow={(record, index) => {
        return {
          onClick: () => {
            setClickIndex(index);
            console.log("index", index);
          },
        };
      }}
    />
  );
}
