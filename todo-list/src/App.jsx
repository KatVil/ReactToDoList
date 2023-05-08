import "./App.css";
import React, { useState } from 'react';
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();
    setTasks(prevState => [...prevState, {task, id: Date.now(), taskStatus: false}]);
    setTask("");
  };

  const handleToggleTask = (id) => {
    const newTasks = tasks.map(el => {
      if (el.id === id){
        el.taskStatus = !el.taskStatus
      }
      return{...el}
    })
    setTasks(newTasks);
  };
  return (
    <>
      <main className="container my-5">
        <h1>TO DO LIST</h1>
            <Form
            handleAddTask={handleAddTask}
            setTask={setTask}
            task={tasks}            
            />
            <Tasks
            tasks={tasks}
            handleToggleTask={handleToggleTask}
            />

      </main>
    </>
  );
}

export default App;
