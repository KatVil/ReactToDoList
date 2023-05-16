import React from 'react';
import {useState} from "react";
import {Form} from "../Form/Form";
import {Tasks} from "../Tasks/Tasks";
import {useLocalStorage} from "../../hooks/useLocalStorage";

export const Main = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useLocalStorage('tasks', []);  
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
        <main className="container my-5">
        <h1>TO DO LIST</h1>
            <Form
            handleAddTask={handleAddTask}
            setTask={setTask}
            task={task}            
            />
            <Tasks
            tasks={tasks}
            handleToggleTask={handleToggleTask}
            />
      </main>
    );
}
