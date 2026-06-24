import { useState, useEffect } from "react";
const CountDown = () => {
  const [count, setCount] = useState(0);
  const [countInput, setCountInput] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((pre) => {
          if (pre <= 1) {
            clearInterval(intervalId);
            setIsRunning(false);
          }
          return pre - 1;
        });
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning]);
  const starHandle = () => {
    if(countInput !== "" && Number(countInput) >0){
   setCount(countInput);
    setIsRunning(true);
    }
 
  };
  const stopHandle = () => {
    setIsRunning(false);
  };
  const resetHandle = () => {
    setCount(0);
    setIsRunning(false);
  };
  return (
    <div>
      <h2>CountDown Timer</h2>
      <div>
        <label htmlFor="seconds">
          Set Time(seconds):
          <input
            type="number"
            placeholder="Enter Seconds"
            onChange={(e) => setCountInput(e.target.value)}
            value={countInput}
          />
        </label>
        <p>Time Left {count} seconds</p>
      </div>
      <button disabled={isRunning} onClick={starHandle}>
        start
      </button>
      <button disabled={!isRunning} onClick={stopHandle}>
        stop
      </button>
      <button onClick={resetHandle}>reset</button>
    </div>
  );
};
export default CountDown;
