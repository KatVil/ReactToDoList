import React from "react";
import { useContext, useState } from "react";
import { globalContext } from "../../contexts/globalContext";

function Form() {
  const { dispatch } = useContext(globalContext);
  const [text, setText] = useState("");

  function handleAddTask(event) {
    event.preventDefault();

    if (text) {
      dispatch({
        type: "ADD_TASK",
        payload: {
          text,
          id: Date.now(),
        },
      });
    }
    setText("");
  }
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
  );
}
export default Form;
