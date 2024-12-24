import { useRef } from "react";
import { useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTimer((prevCount) => prevCount + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  function resetTimer() {
    setTimer(0);
  }

  return (
    <div>
      <h1>My Timer App</h1>
      <p>Timer: {timer}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}

export default Timer;
