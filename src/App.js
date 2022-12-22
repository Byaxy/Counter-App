import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <header className="main-header">
        <h1>Counter App</h1>
      </header>
      <section className="main-section">
        <h2 className={count < 0 ? "red" : ""}>{count}</h2>
        <button id="decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button id="increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button id="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </section>
    </div>
  );
}

export default App;
