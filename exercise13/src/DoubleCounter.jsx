import { useState, useEffect, useReducer } from "react";
const initialState = {
  counterA: 0,
  counterB: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "IncrementA":
      return { ...state, counterA: state.counterA + 1 };
    case "DecrementA":
      return { ...state, counterA: state.counterA - 1 };
    case "IncrementB":
      return { ...state, counterB: state.counterB + 1 };
    case "DecrementB":
      return { ...state, counterB: state.counterB - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const DoubleCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Double Counter</h1>
      <div>
        <h2>CounterA:{state.counterA}</h2>
        <button onClick={() => dispatch({ type: "IncrementA" })}>A+</button>
        <button disabled={state.counterA===0} onClick={() => dispatch({ type: "DecrementA" })}>A-</button>
      </div>
      <div>
        <h2>CounterB:{state.counterB}</h2>
        <button onClick={() => dispatch({ type: "IncrementB" })}>B+</button>
        <button disabled={state.counterB === 0} onClick={() => dispatch({ type: "DecrementB" })}>B-</button>
      </div>
              <button disabled={state.counterA === 0 && state.counterB === 0} onClick={() => dispatch({ type: "reset" })}>Reset Both</button>

    </div>
  );
};
export default DoubleCount;
