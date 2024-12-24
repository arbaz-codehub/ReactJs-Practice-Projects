import { memo } from "react";

const Child = ({ increment }) => {
  console.log("Child component rendered");
  // return <button onClick={increment}>Increment</button>;
};

export default memo(Child);
