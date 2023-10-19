import React from 'react';
import B from "./B";

export default function A(props) {
  console.log(`A执行了${props.count}次`);
  return <B count={props.count}/>
}
