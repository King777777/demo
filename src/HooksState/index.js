import React, { useState, useEffect } from "react";
import A from "./A";
import C from "./C";

const PropsTravel = props => {
  const [count, setCount] = useState(0);
  const [test,setTest] = useState("0");
  useEffect(()=>{
    setTimeout(()=>{
      setTest("1")
      console.log(test) // 虽然确实跳出了批处理，直接修改了state，但这里你还是拿不到最新的test值，依然还是会打印旧的值。
    })
  },[])
  return (
      <>
        <button onClick={()=>setCount(count +1)}>add 1</button>

        <A count={count}/>
        <C />
      </>
  )
}

export default PropsTravel;
