import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [steps, setSteps] = useState(1);

  const [count, setCount] = useState(1);

  const cnt = count * steps;

  const date = new Date("january 06 2024");
  date.setDate(date.getDate() + cnt);

  function increaseStep() {
    setSteps((s) => s + 1);
  }
  function decreaseStep() {
    setSteps((s) => s - 1);
  }

  function increaseCount() {
    setCount((c) => c + 1);
  }
  function decreaseCount() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <div>
        <button onClick={decreaseStep}>-</button>
        Steps :{steps}
        <button onClick={increaseStep}>+</button>
      </div>

      <div>
        <button onClick={decreaseCount}>-</button>
        Count: {cnt}
        <button onClick={increaseCount}>+</button>
      </div>
      <div>
        <span>{cnt === 1 ? "Today is " : ""}</span>
        <span>{cnt > 1 ? `${cnt} days from now  is ` : ""}</span>
        <span>{cnt < 1 ? `${cnt} days ago is ` : ""}</span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}
