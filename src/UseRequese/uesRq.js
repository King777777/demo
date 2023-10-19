import React, {useState, useEffect} from 'react';

const useRq = (fn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fn().then(res => {setData(res);setLoading(false)});
  }, [])

 return {data, loading}

}
export default useRq;
