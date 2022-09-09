import React from "react";
import useCounter from "../hooks/useCounter";

const CounterTwo = () => {
  const [count, increment, decrement, reset] = useCounter(20, 30);
  return (
    <>
      <h3>Counter Two Value: {count}</h3>

      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default CounterTwo;
