import React, {useState} from "react";
import { Counter } from "./Counter";
import useCounter from './useCounter'

function Usage() {
  const [count, handleIncrement, handleDecrement] = useCounter(0);
  const [count2, handleIncrement2, handleDecrement2] = useCounter(0);

  return (
      <>
        <Counter>
          <Counter.Decrement icon="minus" handleDecrement={handleDecrement} />
          <Counter.Label>Counter</Counter.Label>
          <Counter.Count count={count} max={10} />
          <Counter.Increment icon="plus" handleIncrement={handleIncrement} />
        </Counter>
        <Counter>
          <Counter.Decrement icon="minus" handleDecrement={handleDecrement2} />
          <Counter.Label>Counter</Counter.Label>
          <Counter.Count count={count2} max={10} />
          <Counter.Increment icon="plus" handleIncrement={handleIncrement2} />
        </Counter>
      </>
  );
}

export { Usage };
