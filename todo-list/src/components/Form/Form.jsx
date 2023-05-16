import React from 'react'

export const Form = ({setTask, handleAddTask, task}) => {
  return (
    <form className="mb-3" onSubmit={handleAddTask}>
    <div className="mb-3">
          <input
            placeholder="write your task here"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <button onClick={handleAddTask}>Add task</button>

    </div>
    </form>
)
}
