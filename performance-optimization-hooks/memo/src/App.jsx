import { lazy, Suspense, useCallback, useState } from "react";
import "./App.css";
import Child from "./Child";

const LazyComp = lazy(() => import("./LazyComp"));

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(false);

  setTimeout(() => {
    console.log("ho gya");

    setData(true);
  }, 5000);

  const add = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);
  return (
    <>
      <h1>Counter</h1>
      <h2>Current: {count}</h2>
      <Child add={add} count={count}></Child>
      <button onClick={add}>Add</button>
      {data && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComp />
        </Suspense>
      )}
    </>
  );
}

export default App;
