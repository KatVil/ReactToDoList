import React from 'react'

const NewTask = ({task, taskStatus, handleToggleTask, id}) => {
  return (
    <>
      <input
        className="form-check-input"
        type="checkbox"
        checked={taskStatus}
        onChange={() => handleToggleTask(id)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault" style={(taskStatus) ? { textDecoration: "line-through" , color:'violet'} : null}>
        {task}
      </label>
    </>
  );
}
export default NewTask