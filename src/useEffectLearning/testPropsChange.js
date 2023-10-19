import React, { useEffect, useState } from 'react';

export const TestPropsChange = props => {
  const [name, setName] = useState('');
  useEffect(() => {
    setName('xx' + props.countObj.count);
    console.log("props.count有变化");
  }, [props.countObj.count])
  return (
      <p>{name}</p>
  )
}
