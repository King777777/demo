import React, { useState } from "react";
import {Button, Table} from "antd";
import { TestPropsChange } from "./testPropsChange";
import styles from "./style.module.css";
import MyTable from "./MyTable";
import MyApp from "./CountEffect";

const Index = (props) => {
  const [countObj, setCountObj] = useState({ count: 1 });
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <>
      <button className={styles.blue} onClick={() => setCountObj({ count: 2 })}>
        {countObj.count}
      </button>
      <TestPropsChange countObj={countObj} />
      <MyTable
        selectedRowKeys={selectedRowKeys}
        selectedRows={selectedRows}
        setSelectedRowKeys={setSelectedRowKeys}
        setSelectedRows={setSelectedRows}
      />
      <h2>选中的行：</h2>
      {
        selectedRows.map(item => {
          return <p>姓名：{item.name}</p>
        })
      }
      <MyApp />
      
    </>
  );
};
export default Index;
