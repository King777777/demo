import { useRequest } from 'ahooks';
import React from 'react';
import useRq from "./uesRq";
function getUsername() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('xxx');
    }, 1000);
  });
}
export default () => {
  const { data, loading } = useRq(getUsername);
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Username: {data}</div>;
};
