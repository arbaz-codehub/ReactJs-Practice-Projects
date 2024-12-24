import { useRef } from "react";
import { useState } from "react";

function ClicksCounter() {
  const [showClicks, setShowClicks] = useState(0);
  const clicksRef = useRef(0);
  console.log("Repainted");

  function handleClicks() {
    clicksRef.current += 1;
    setShowClicks(clicksRef.current);
  }

  return (
    <div>
      <p>Total Clicks: {showClicks}</p>
      <button onClick={handleClicks}>Click Me!</button>
    </div>
  );
}

export default ClicksCounter;

{
  /* 
Component Re-render & useRef Necessity Explanation:

1. Re-render behavior:
   - Har click pe component re-render hota hai (useState ke karan)
   - console.log("Repainted") se verify kar sakte hain

2. Kya useRef jaruri hai?
   - Nahi, is case mein useRef jaruri nahi hai
   - Same functionality sirf useState se bhi achieve ho sakti hai:

   function ClicksCounter() {
     const [clicks, setClicks] = useState(0);
     
     function handleClicks() {
       setClicks(prev => prev + 1);
     }
     ...
   }

3. Current implementation vs useState-only:
   - Current (with useRef): Extra complexity add kar raha hai
   - useState-only: Simple aur straightforward solution hogi
   - Performance difference negligible hai is case mein

4. useRef ka better use case:
   - DOM elements ko reference karne ke liye
   - Previous values ko track karne ke liye
   - Mutable values jo re-render nahi trigger karein

Conclusion: Is specific example mein useRef ka use unnecessary complexity add 
kar raha hai. Simple useState implementation better rahegi.
*/
}
