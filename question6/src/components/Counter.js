import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="container">
      <button onClick={increase}>
        <img src={process.env.PUBLIC_URL + "/images/feed-plus-16.svg"} />
      </button>
      <span className="result">{count}</span>
      <button onClick={decrease}>
        <img src={process.env.PUBLIC_URL + "/images/minus-circle-bold.svg"} />
      </button>
    </div>
  );
};

export default Counter;
