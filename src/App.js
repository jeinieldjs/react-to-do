import { useState } from 'react';
import './App.css';
import data from './assets/tasks.json';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState(data) // since initial value nya si data
  const handleTasks = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }
  // tasks.push(newTask) will not work!
  
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }


  return (
    <div className="App">
      
      <h1>Things To Do</h1>
      <AddTask handleAddTasks = {handleTasks} newId={tasks.length} />
      {
        tasks.map((task) => {
          return <div key={task.id}>{task.task} <button onClick={() => handleDelete(task.id)}><i class="fa-solid fa-trash"></i></button></div>
        })
      }
   
    </div>
  );
}

export default App;
