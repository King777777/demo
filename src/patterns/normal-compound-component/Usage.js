import React, {useState} from "react";
import { Counter } from "./Counter";

function Usage() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(Math.max(0, count - 1));
  };


  return (
      <Counter>
        <Counter.Decrement icon="minus" handleDecrement={handleDecrement} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count count={count} max={10} />
        <Counter.Increment icon="plus" handleIncrement={handleIncrement} />
      </Counter>
  );
}

export { Usage };
