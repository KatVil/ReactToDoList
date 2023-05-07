import "./App.css";
import React, { useState } from 'react';

function App() {
  const [text, setTask] = useState('input task');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    event.preventDefault()

    const task = {
      text,
      id: Date.now()
    }

    setTask((prev) => [...prev, task])
    setTask('')
  };

  const handleAddTask = () => {
    setTasks(tasks => [...tasks, {text}]);
    setTask("");
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
          <input
            type="text"
            value={text}
            onChange={(event) => handleInputChange(event.target.value)}
            handleInputChange={handleInputChange}
          />
          <button onClick={handleAddTask}>Add task</button>
          <div className="form-check">
            {tasks.map((task, index) => (
              <li key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(index)}
                  value = {task.text}
                  id="flexCheckDefault"
                  style={
                    task.completed ? { textDecoration: "line-through" } : null
                  }
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {task.text}
                </label>
              </li>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
