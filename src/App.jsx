import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <h2 className="text-2xl bg-amber-300">Hello</h2>
    </>
  );
}

export default App;
