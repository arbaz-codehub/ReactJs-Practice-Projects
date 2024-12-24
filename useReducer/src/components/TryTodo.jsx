import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: new Date(), text: action.text }];
    default:
      return state;
  }
}

function TryTodo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  function addTodo() {
    dispatch({ type: "add", text: input });
    setInput("");
  }

  return (
    <div>
      <label htmlFor="task">Enter the task</label>
      <input
        type="text"
        id="task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the new task"
      />
      <button onClick={input ? addTodo : null}>Add Task</button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default TryTodo;
