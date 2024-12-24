import { useState, useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.field]: action.value };
    case "reset":
      return { name: "", email: "" };
    default:
      return state;
  }
}

function FormHandling() {
  const [state, dispatch] = useReducer(formReducer, { name: "", email: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Successfully");
    setSubmittedData({ username: state.name, useremail: state.email });
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={(e) => {
            dispatch({
              type: "updateField",
              field: "name",
              value: e.target.value,
            });
          }}
        />

        <label htmlFor="email">Enter your email: </label>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={(e) => {
            dispatch({
              type: "updateField",
              field: "email",
              value: e.target.value,
            });
          }}
        />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Current Form Values</h3>
          <p>
            <strong>Name:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.useremail}
          </p>
        </div>
      )}
    </div>
  );
}

export default FormHandling;
