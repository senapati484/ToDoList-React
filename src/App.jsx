import { useState } from "react";
import "./App.css";

function App() {
  const [ToDoList, setToDoList] = useState(0);

  return (
    <>
      <h1>ToDoList</h1>
      <div className="card">
        <button onClick={() => setToDoList((ToDoList) => ToDoList + 1)}>
          List Count: {ToDoList}
        </button>
        <div className="card">
          <input type="text" />
          <button>Submit</button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
