import { useEffect, useRef, useState } from "react";

function ClearEffect() {
  let [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        timer += 1;
        setTimer((prevValue) => prevValue + 1);
      }, 200);
    };
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <p>Timer: {timer}</p>
    </div>
  );
}

export default ClearEffect;
