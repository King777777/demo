import React, {useState} from 'react';

const useRowChangeNum = (initialValue) => {
  const [dataSource, setDataSource] = useState(initialValue);

  const handleIncrement = () => {
    setDataSource(dataSource => [...dataSource, {}]);
  }
  const handleDecrement = (delIndex) => {
    const tempDataSource = [...dataSource];
    tempDataSource.splice(delIndex, 1);
    setDataSource([...tempDataSource]);
  }
  return {dataSource, setDataSource, handleIncrement, handleDecrement};
}
export default useRowChangeNum;
