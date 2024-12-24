import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  console.log("Repainted");

  return (
    <div>
      <input type="text" ref={inputRef} id="myText" />
      <br />
      <button onClick={() => inputRef.current.focus()}>
        Focus on above input
      </button>
    </div>
  );
}

export default FocusInput;

{
  /* 
useRef Hook ka explanation:

1. useRef kya hai?
- React ka ek hook hai jo DOM elements ko directly access karne me help karta hai
- Component re-renders ke baad bhi value preserve karta hai
- .current property me value store hoti hai

2. useRef ke main use cases:
- DOM elements ko reference karna (jaise input field ko focus karna)
- Previous values ko track karna
- Mutable values ko store karna jo re-render trigger nahi karenge

3. Is project me implementation:
- input field ko reference karne ke liye useRef ka use kiya
- inputRef.current.focus() se directly DOM element ko access kar focus trigger kiya
- Without useRef ye directly nahi kar sakte kyunki React virtual DOM use karta hai

4. useRef vs useState
- useState update = component re-render
- useRef update = no re-render
- useRef good for values that shouldn't trigger re-renders

Code Example:
const inputRef = useRef(null);  // Initialize with null
<input ref={inputRef} />        // Attach ref to element
inputRef.current               // Access current value/element

*/
}

{
  /* 
10 Simple Practice Questions for useRef:

1. Create a button that focuses on an input field when clicked
   - Similar to the example above

2. Make a counter that doesn't re-render the UI
   - Use useRef to store count
   - Update count on button click
   - Log count to console

3. Create a timer that starts/stops on button click
   - Store setInterval ID in useRef
   - Use useState for displaying time
   - Clear interval on stop

4. Track previous value of a state
   - Store previous value in useRef
   - Compare with current value
   - Log changes
   

5. Auto-focus an input field on component mount
   - Use useRef + useEffect
   - Focus input when component loads

6. Create a video player with play/pause using useRef
   - Reference video element
   - Toggle play/pause on button click

7. Store form values without re-renders
   - Multiple input fields
   - Store values in useRef
   - Submit and log values

8. Implement scroll to top button
   - Store div reference
   - Scroll to top on click
   - Show/hide based on scroll position

9. Character counter for textarea
   - Reference textarea
   - Count characters without re-render
   - Display count separately

10. Toggle multiple input fields focus
    - Store refs in array
    - Focus next input on tab
    - Cycle through fields

Each of these exercises helps understand different aspects of useRef:
- DOM manipulation
- Value persistence
- Avoiding re-renders
- Performance optimization
*/
}

{
  /*
useRef.current ke common use cases:

1. DOM Element Reference:
   inputRef.current - Direct DOM element ko access karta hai
   Example:
   - inputRef.current.focus() - Element ko focus karna
   - inputRef.current.value - Input ki value read/write karna
   - inputRef.current.style - CSS styles modify karna
   - inputRef.current.scrollIntoView() - Element tak scroll karna

2. Video/Audio Elements:
   videoRef.current ke methods:
   - videoRef.current.play() - Video play karna
   - videoRef.current.pause() - Video pause karna
   - videoRef.current.currentTime - Video ka time set/get karna

3. Mutable Values Store:
   countRef.current - Re-render ke bina value store karna
   Example:
   - countRef.current++ - Value update without re-render
   - countRef.current = newValue - Direct value assignment

4. Timer IDs Store:
   timerRef.current - setInterval/setTimeout IDs store karna
   Example:
   - timerRef.current = setInterval(...)
   - clearInterval(timerRef.current)

5. Previous Values Track:
   prevValueRef.current - Previous state values ko store karna
   Example:
   - prevValueRef.current = currentValue

Important Points:
1. .current property mutable hai (can be changed)
2. Value change re-render trigger nahi karta
3. Har render cycle mein value persist rehti hai
4. Initial value useRef(initialValue) mein set ki ja sakti hai

Best Practices:
1. DOM manipulation ke liye useRef use karein
2. Mutable values jo UI update na karein unke liye useRef
3. Performance optimization ke liye unnecessary re-renders avoid karein
*/
}
