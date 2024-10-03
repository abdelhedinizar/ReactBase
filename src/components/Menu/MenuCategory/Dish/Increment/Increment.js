import React, { useEffect, useState } from "react";
import "./Increment.css";

function Increment(props) {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    setCount(props.count);
  }, [props.count]);

  return (
    <div className="increment">
      <button onClick={props.decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={props.increment}>+</button>
    </div>
  );
}

export default Increment;
