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
     {
      tasks.map((task) => {
        return <div key={task.id}>{task.task}</div>
      })
     }
    <AddTask handleAddTasks = {handleTasks} newId={tasks.length} />
    </div>
  );
}

export default App;
