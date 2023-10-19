import React, {useState} from 'react';
const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  }
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  }
  return [count, handleIncrement, handleDecrement];
}
export default useCounter;
