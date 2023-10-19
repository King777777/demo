import React from 'react';

export default function B(props) {
  console.log(`B执行了${props.count}次`);
  return <p>当前的count={props.count}</p>
}
