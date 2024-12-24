import { useSelector } from "react-redux";

function DisplayCounter() {
  // const counterObj = useSelector((store) => store.counter);
  // const counter = counterObj.counterVal;

  const { counterVal } = useSelector((store) => store.counter);
  const privacy = useSelector((store) => store.privacy);

  return (
    <p className="lead mb-4">
      {privacy ? "Private" : `counter: ${counterVal}`}
    </p>
  );
}

export default DisplayCounter;
