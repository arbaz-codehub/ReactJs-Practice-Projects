import { useEffect } from "react";

function SimpleEffect() {
  useEffect(() => {
    console.log("Component rendering is completed");
    console.log("This will render once.");

    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  };

  return <div>Check your Console</div>;
}

export default SimpleEffect;

{
  /* 
  useEffect Hook ka complete explanation:

  1. useEffect kya hai?
  - Side effects handle karne ke liye React ka hook hai
  - Component lifecycle events ko manage karta hai
  - Component render hone ke baad run hota hai

  2. Side effects kya hote hain?
  - Data fetching, API calls: Server se data mangwana
  - DOM manipulation: Direct browser ke elements ko change karna
  - Subscriptions, Event listeners: External events ko listen karna
  - Timer functions: Time based operations (setTimeout, setInterval)
  
  Ye sab "side effects" isliye hain kyunki ye React ke normal render flow ke bahar 
  ke operations hain aur component ke pure functions ko "side" se affect karte hain
  
  3. Complete Syntax:
  useEffect(() => {}, []);
  useEffect(() => {
    // Effect code (side effect logic)
    
    return () => {
      // Cleanup code (optional)
    }
  }, [dependency array]);

  4. Parts of useEffect:
  - Effect function: Main logic jo run karni hai
  - Cleanup function: Effect ko cleanup karne ke liye (optional)
  - Dependency array: Effect ko kab run karna hai ye control karta hai
  
  5. Dependency Array Cases:
  - [] (empty array): Effect sirf first render pe run hoga
  - [value1, value2]: Jab ye values change hongi tab effect run hoga
  - No array: Har render pe effect run hoga
  
  6. Common Use Cases:
  - API calls karna
  - localStorage update karna
  - Document title change karna
  - Event listeners add/remove karna
  - Timers set karna
  
  7. Best Practices:
  - Har effect ek specific task ke liye use karein
  - Cleanup function ka use karein jahan jaruri ho
  - Dependency array carefully set karein
  - Infinite loops se bachein
  */
}
