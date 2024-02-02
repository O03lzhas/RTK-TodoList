import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, removeToDo } from "./store/reducer";

function App() {
  let [userText, setUserText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  function add() {
    dispatch(addToDo(userText));
    setUserText("")
  }
  function remove(todoText) {
    dispatch(removeToDo(todoText));
  }
  return (
    <div>
      <h1>TODO LIST</h1>
      <input
        type="text"
        placeholder="TEXT..."
        value={userText}
        onChange={(e) => {
          setUserText(e.target.value);
        }}
      />
      <button onClick={add}>+</button>
      <hr />
      <div>
        {todos.map((arr) => {
          return (
            <div className="userAdded" key={arr}>
              <h1>{arr}</h1>
              <button onClick={() => remove(arr)}>-</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
