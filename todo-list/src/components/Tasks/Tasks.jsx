import React from 'react'
import {NewTask} from "./components/NewTask/NewTask";

function Tasks({tasks, handleToggleTask}) {
  return (
    <div className="tasks">
      {tasks.map((tasks) => (
        <div className="form-check" key={tasks.id}>
          <li>
            <NewTask
              task={tasks.task}
              taskStatus={tasks.taskStatus}
              id={tasks.id}
              handleToggleTask={handleToggleTask}
            />
          </li>
        </div>
      ))}
    </div>
  );
}
export default Tasks