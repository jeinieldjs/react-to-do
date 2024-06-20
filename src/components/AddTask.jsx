import React from "react";
import { useState } from "react";

function AddTask(props) {
    
    const {handleAddTasks, newId} = props;
    const [toDo, setToDo] = useState('');
    const addTaskHandler = (event) => {
        event.preventDefault(); // para di magreload
        const newTaskObject = {
            id: newId,
            task: toDo,
        }
        console.log(newTaskObject);
        handleAddTasks(newTaskObject); // para ma-add ung nasa input field as a new task

        setToDo(''); // para maclear ung input field

    }

    return (
        <div>
            <form onSubmit={addTaskHandler}> 
                <input value={toDo} placeholder='Add new task' onChange={(event)=>setToDo(event.target.value)} required></input>
                {/*kung ano man ilalagay sa input, ibig sabihin yun yung new task*/}
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask;