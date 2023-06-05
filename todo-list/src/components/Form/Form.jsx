import React from "react";
import { useContext, useState } from "react";
import { globalContext } from "../../context/globalContext";

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
          id: Date.now()
        }
      });
    }
    setText("");
  }
  return (
    <form className="mb-3" onSubmit={handleAddTask}>
      <div className="input-group input-group-lg">
        <div className="input-group-prepend" />
        <input
          type="text"
          placeholder="write your task here"
          value={text}
          onChange={event => setText(event.target.value)}
          className="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={handleAddTask}
      >
        Add task
      </button>
    </form>
  );
}
export default Form;
