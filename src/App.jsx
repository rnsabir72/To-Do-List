import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function readInputValue(e) {
    setInput(e.target.value);
  }

  function addTodo() {
    if (!input.trim()) return alert("Todo is Required");

    if (editIndex !== null) {
      const updated = [...todoList];
      updated[editIndex] = input;
      setTodoList(updated);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, input]);
    }

    setInput("");
  }

  function deleteTodo(index) {
    const copy = [...todoList];
    copy.splice(index, 1);
    setTodoList(copy);
    setEditIndex(null);
  }

  function updateTodo(index) {
    setInput(todoList[index]);
    setEditIndex(index);
  }

  return (
    <div className="app-container">
      <div className="input-row">
        <input
          type="text"
          placeholder="Input a task to do"
          value={input}
          onChange={readInputValue}
        />
        <button class="btn" onClick={addTodo}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>

      <h1>To Do List</h1>

      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li key={index} className="todo-item">
            <div className="todo-text">
              <span className="serial">{index + 1}.</span>
              <span className="text">{todo}</span>
            </div>

            <div className="btn-group">
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => updateTodo(index)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
