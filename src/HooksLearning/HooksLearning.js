import React, {useState} from "react";
import useDocumentTitle from "./useDocumentTitle";


const HooksLearning = (props) => {
  const [value, setValue] = useState("test");
  useDocumentTitle(value);
  const handleValueChange = (e) => {
    setValue(e.target.value);
  }
  return (
      <input
          value={value}
          onChange={handleValueChange}
      />
  )
}
export default HooksLearning;
