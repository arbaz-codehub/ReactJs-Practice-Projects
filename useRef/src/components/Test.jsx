// Test Failed with useRef because it doesn't re-render UI so values will update but will not render on UI.

import { useRef } from "react";

function Test() {
  const countRef = useRef(0);

  return (
    <div>
      <p>Counter: {countRef.current}</p>
      <button
        onClick={() => {
          countRef.current += 1;
          console.log("Increment: " + countRef.current);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countRef.current = 0;
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Test;
