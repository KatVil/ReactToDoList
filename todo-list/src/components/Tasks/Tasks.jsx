import React from 'react'
import NewTask from "../NewTask/NewTask";
import {useContext} from "react";
import {globalContext} from "../../context/globalContext";

function Tasks() {

  const { state, dispatch} = useContext(globalContext)

  return (
        <div className="col-sm-10">
        {state.list.map((post) => (
          <div key = {post.id}>
            <NewTask text={post.text} 
            id={post.id} 
            status={post.status} 
            />
          </div>
        ))
        }
      </div>
    );
}
export default Tasks;