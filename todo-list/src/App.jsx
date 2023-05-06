import "./App.css";
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      completed: !newTasks[index].completed
    };
    setTasks(newTasks);
  };
  return (
    <>
      <main className="container my-5">
      <h1>TO DO LIST</h1>
      <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add task</button>
      <ul>
      {tasks.map((task, index) => (
      <li key={index}>
      <div className="form-check">          
          <input
            className="form-check-input"
            type="checkbox"
            checked={task.completed} onChange={() => handleToggleTask(index)}
            value=""
            id="flexCheckDefault"
          />
          <span style={task.completed ? { textDecoration: "line-through" } : null}>{task.name}</span>
          <label className="form-check-label" for="flexCheckDefault">
          </label>
        </div>
          </li>
        ))}
      </ul>
      </div>
      </main>
    </>
  );
}

export default App;
