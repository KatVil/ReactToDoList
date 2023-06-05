import React from 'react';
import Form from "../Form/Form";
import Tasks from "../Tasks/Tasks";
import "../../styles/index.css";

function Main() {
    return (
        <main className="container my-5">
        <h1 className='headerToDo'>TO DO LIST</h1>
            <Form/>
            <Tasks/>
      </main>
    );
}
export default Main;