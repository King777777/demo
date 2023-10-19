import React, {useEffect} from 'react';
const useDocumentTitle = (title) => {
  useEffect(()=> {
    document.title = "888";
    console.log("做一点副作用");
  })
}
export default useDocumentTitle;
