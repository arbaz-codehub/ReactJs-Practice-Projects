import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  const handleAdd = () => {
    dispatch(
      // Payload as Object
      // counterActions.add({
      //   num: inputElement.current.value,
      // })
      counterActions.add(inputElement.current.value) // Payload as direct value
    );
    inputElement.current.value = "";
  };

  return (
    <>
      <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          ref={inputElement}
          type="text"
          placeholder="Add number..."
          className="number-input"
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={handlePrivacyToggle}
        >
          Toggle
        </button>
      </div>
    </>
  );
}

export default Controls;
