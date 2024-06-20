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
  return (
    <div className="App">
      
      <h1>Things To Do</h1>
      <AddTask handleAddTasks = {handleTasks} newId={tasks.length} />
      {
        tasks.map((task) => {
          return <div key={task.id}>{task.task}<button>Delete</button></div>
        })
      }
   
    </div>
  );
}

export default App;
