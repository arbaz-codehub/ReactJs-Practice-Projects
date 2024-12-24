// Redux ke basic concepts ko samjhte hain step by step:

// 1. Store
// - Redux mein ek central store hota hai jo pure application ka data/state store karta hai
// - Ye ek single source of truth hota hai
// - createStore() method se create hota hai

// 2. Initial State
// - Store ko initialize karne ke liye initial state define karte hain
// - Ye ek simple object hota hai jisme initial values hoti hain
const INITIAL_VALUE = {
  counter: 0,
};

// 3. Reducer
// - Reducer ek pure function hota hai jo state ko update karta hai
// - Isme 2 parameters hote hain: current state aur action
// - Action ke type ke according state update hoti hai
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;

  // Action types ke according state update
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }

  return newStore;
};

// 4. Store Creation
// - Redux store create karte hain reducer ke sath
const store = redux.createStore(reducer);

// 5. Subscriber
// - Subscriber function Redux mein state changes ko track karne ke liye use hota hai
// - Ye React hooks (useReducer) se alag hai kyunki:
//   1. Redux ek global state management hai, useReducer component level state ke liye
//   2. Redux mein manually subscribe karna padta hai, React hooks automatic re-render handle karte hain
// - Subscriber ka use debugging/logging ke liye helpful hai - state change track kar sakte hain
// - Real applications mein React-Redux connect/hooks use karte hain, direct subscriber nahi
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

// Subscribe karte hain store ko
store.subscribe(subscriber);

// 6. Actions Dispatch
// - Actions dispatch karke state update karte hain
// - dispatch() method se actions bhejte hain
// - Action ek object hota hai jisme type property hoti hai

// Examples:
store.dispatch({ type: "INCREMENT" }); // Counter +1 karega
store.dispatch({ type: "DECREMENT" }); // Counter -1 karega
store.dispatch({ type: "INCREMENT" }); // Fir se +1
store.dispatch({ type: "ADDITION", payload: { number: 7 } }); // Counter mein 7 add karega
store.dispatch({ type: "DECREMENT" }); // Fir se -1

// Flow samjhein:
// 1. Action dispatch hota hai
// 2. Reducer function call hota hai
// 3. Reducer new state return karta hai
// 4. Store update hota hai
// 5. Subscribers ko notify kiya jata hai
// 6. UI update hoti hai (React ke case mein)
