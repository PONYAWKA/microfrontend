import { useState } from "react";
import React from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);

  const countHandle = (dif) => (e) => {
    setCount((prev) => prev + dif);
    window.dispatchEvent(new CustomEvent("count", { detail: dif }));
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={countHandle(1)}>increment</button>
        <button onClick={countHandle(-1)}>decrement</button>
      </div>
    </div>
  );
};
