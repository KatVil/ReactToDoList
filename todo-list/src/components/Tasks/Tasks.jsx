import React from 'react'
import NewTask from "../NewTask/NewTask";

const Tasks = ({tasks, handleToggleTask}) => {
  return (
    <div className="tasks">
      {tasks.map((taskes) => (
        <div className="form-check" key={taskes.id}>
          <li>
            <NewTask
              task={taskes.task}
              taskStatus={taskes.taskStatus}
              id={taskes.id}
              handleToggleTask={handleToggleTask}
            />
          </li>
        </div>
      ))}
    </div>
  );
}
export default Tasks