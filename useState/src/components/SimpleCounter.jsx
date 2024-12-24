import { useState } from "react";

function SimpleCounter() {
  const [count, setCount] = useState(0);
  console.log("The Page Repainted");
  return (
    <div>
      <p>Simple Counter</p>
      <p>Current Counter: {count}</p>
      <button
        onClick={() => {
          // setCount(count + 1); // Direct value Update (outdated value)
          setCount((prevValue) => prevValue + 1); // Callback Update
          setCount((prevValue) => prevValue + 1); // Callback Update
        }}
      >
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default SimpleCounter;

{
  /* 
State kya hai?
- State ek special variable hai jo component ke data ko store karta hai
- Jab state change hoti hai, component re-render hota hai
- useState hook React mein state manage karne ke liye use hota hai

useState ka syntax:
const [variable, setVariable] = useState(initialValue);
- variable: state ka current value store karta hai
- setVariable: state ko update karne ke liye function
- initialValue: state ki starting value

prevValue ka use kyun?
1. Safety: Agar ek sath multiple state updates ho rahe hain:
   setCount(count + 1) // Purana value use karega
   setCount(count + 1) // Phir bhi purana value use karega
   
   setCount(prev => prev + 1) // Latest value use karega 
   setCount(prev => prev + 1) // Latest value + 1 karega

2. Race Conditions: prevValue ensures ki aapko latest state value mile

Example:
const [name, setName] = useState("Rahul") // String state
const [age, setAge] = useState(25) // Number state
const [isActive, setIsActive] = useState(false) // Boolean state
const [items, setItems] = useState([]) // Array state
const [user, setUser] = useState({}) // Object state
*/
}
