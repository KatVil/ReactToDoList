import React from 'react'

function NewTask({task, taskStatus, handleToggleTask, id}){
  return (
    <>
      <input
        className="form-check-input"
        type="checkbox"
        checked={taskStatus}
        onChange={() => handleToggleTask(id)}
        id="flexCheckDefault"
        style={task.completed ? { textDecoration: "line-through" } : null}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {task}
      </label>
    </>
  );
}
export default NewTask