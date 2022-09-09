import React from "react";
import useCounter from "../hooks/useCounter";

const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter(0, 20);
  return (
    <>
      <h3>Counter One Value: {count}</h3>

      <button
        onClick={() => {
          increment(5);
        }}
      >
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default CounterOne;
