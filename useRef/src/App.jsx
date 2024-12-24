import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FocusInput from "./components/FocusInput";
import Timer from "./components/Timer";
import ClicksCounter from "./components/ClicksCounter";
import Test from "./components/Test";
import "./App.css";

function App() {
  return (
    <>
      {/* <FocusInput></FocusInput> */}
      <Timer></Timer>
      {/* <ClicksCounter></ClicksCounter> */}
      {/* <Test></Test> */}
    </>
  );
}

export default App;
