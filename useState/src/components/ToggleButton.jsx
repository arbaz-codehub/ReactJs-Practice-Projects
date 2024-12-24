import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h1>Toggle Button</h1>
      <p>The Button is {isOn ? "On" : "Off"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Turn Button {!isOn ? "On" : "Off"}
      </button>
    </div>
  );
}

export default ToggleButton;

{
  /* 
ToggleButton Component ka explanation:

1. Import Statement:
   - Sabse pehle humne 'useState' hook ko React se import kiya
   - useState ek special function hai jo React component mein state manage karne mein help karta hai

2. Component Definition:
   - 'ToggleButton' naam ka ek function component banaya gaya hai
   - Ye component ek simple on/off button create karta hai

3. State Setup:
   const [isOn, setIsOn] = useState(false);
   - useState hook ka use karke ek state variable 'isOn' create kiya
   - 'isOn' ki initial value false hai (yani button off state mein start hoga)
   - 'setIsOn' ek function hai jo 'isOn' ki value update karne ke liye use hoga

4. Component ka UI (return statement mein):
   - <div> ke andar sara content wrap kiya hai
   - <h1> mein "Toggle Button" heading hai
   - <p> mein current button state display hota hai:
     - {isOn ? "On" : "Off"} ka matlab:
       - agar isOn true hai to "On" dikhega
       - agar isOn false hai to "Off" dikhega
   
   - <button> element actual toggle button hai:
     - onClick event par setIsOn(!isOn) call hota hai
     - !isOn current state ko opposite mein change kar deta hai:
       - agar isOn true hai to false ho jayega
       - agar isOn false hai to true ho jayega
     - Button ka text bhi dynamic hai:
       - {!isOn ? "On" : "Off"} se button par opposite action dikhta hai
       - jab button off hai to "Turn Button On" dikhega
       - jab button on hai to "Turn Button Off" dikhega

5. Export:
   - export default se component ko dusre files mein use karne ke liye available kara dete hain

Kaise kaam karta hai:
1. Jab page load hota hai, button "Off" state mein hota hai
2. User jab button click karta hai:
   - setIsOn function call hota hai
   - isOn ki value toggle ho jati hai (true se false ya false se true)
   - Component re-render hota hai
   - UI update ho jata hai new state ke hisab se
*/
}
