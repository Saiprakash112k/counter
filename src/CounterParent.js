import React, { useState, useEffect } from "react";
import Child from "./CounterChild";
const Parent = () => {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState(false);
  const [reset, setReset] = useState(false);
  const startData = () => {
    setStatus(true);
    setReset(false);
  };
  const stopData = () => {
    setStatus(false);
  };
  const resetData = () => {
    setReset(true);
  };
  const Timer = () => {
    setTimeout(() => {
      setValue(value + 1);
    }, 500);
  };

  useEffect(() => {
    if (status && !reset) {
      Timer();
    }
    reset && setValue(0);
  });
  return (
    <>
      <p>{value}</p>
      <Child getData={startData} btName={"start"} />
      <Child getData={resetData} btName={"reset"} />
      <Child getData={stopData} btName={"stop"} />
    </>
  );
};
export default Parent;
