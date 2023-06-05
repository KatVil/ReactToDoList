import React from "react";
import {globalContext} from "../../context/globalContext";
import { useContext, useState } from "react";

function NewTask({ text, status, id }) {
  const { dispatch } = useContext(globalContext);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  function deleteTask(id) {
    dispatch({
      type: "DELETE_TASK",
      payload: id
    });
  }

  function changeStatus(id) {
    dispatch({
      type: "CHANGE_STATUS",
      payload: {id ,
        status}
    });
  }

  function editTask(id, text) {
    setEdit(id);
    setValue(text);
  }

  function submitEdit(event) {
    event.preventDefault();
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id,
        value
      }
    });
    setEdit(null);
  }

  return (
    <>
      {edit === id ? (
        <form className="mb-3 add__field" onSubmit={submitEdit}>
          <label htmlFor="exampleInput" className="form-label"></label>
          <input
            className="form-control"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <button type="submit" className="btn btn-primary">
            Change data
          </button>
        </form>
      ) : (
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={status}
            onChange={() => changeStatus(id)}
          />
          <label
           style={(status) ? { textDecoration: "line-through" , color:'violet'} : null}
          >
            {text}
          </label>
          <button
            className="btn btn-outline-primary form-check-btn px-3"
            onClick={() => editTask(id, text)}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-primary form-check-btn px-3"
            onClick={() => deleteTask(id)}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
export default NewTask;
