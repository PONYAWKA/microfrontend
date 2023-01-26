import { useState, useEffect } from "react";
import React from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const countHandler = ({ detail }) => {
    setCount((prev) => prev + detail);
  };

  useEffect(() => {
    window.addEventListener("count", countHandler);
    return () => window.removeEventListener("count", countHandler);
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
    </div>
  );
};
export default Counter;
