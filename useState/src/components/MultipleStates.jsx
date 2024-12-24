import { useState } from "react";

function MultipleStates() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  return (
    <div>
      <h1>Handling Multiple States</h1>
      <label htmlFor="username">Enter your name: </label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <label htmlFor="useremail">Enter your email: </label>
      <input
        type="email"
        name="useremail"
        id="useremail"
        onChange={(e) => setemail(e.target.value)}
      />
      <p>User's name: {name}</p>
      <p>User's email: {email}</p>
    </div>
  );
}

export default MultipleStates;
