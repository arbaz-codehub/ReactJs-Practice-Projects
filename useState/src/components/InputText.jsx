import { useState } from "react";

function InputText() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Input Text Tracker</h1>
      <label htmlFor="mytext">Enter your text: </label>
      <input
        type="text"
        name="mytext"
        id="mytext"
        onChange={(e) => setText(e.target.value)}
      />
      <p>You entered: {text}</p>
    </div>
  );
}

export default InputText;
