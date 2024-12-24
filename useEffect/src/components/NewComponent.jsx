import { useState } from "react";

function NewComponent() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <h1>I am a new coponent</h1>
      <button
        onClick={() => setClickCount((prevclickCount) => prevclickCount + 1)}
      >
        Click me
      </button>
      <p>User clicked me {clickCount} times</p>
    </div>
  );
}

export default NewComponent;
