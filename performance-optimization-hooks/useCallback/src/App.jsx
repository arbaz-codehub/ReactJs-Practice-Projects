import { useCallback, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./Child";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [name]); // Now depends on name

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <br /> <br />
      <Child increment={increment}></Child>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h1>{name}</h1>
    </div>
  );
}

export default App;
