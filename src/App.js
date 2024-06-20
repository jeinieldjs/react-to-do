import { useState } from 'react';
import './App.css';
import data from './assets/tasks.json';

function App() {

  const [tasks, setTasks] = useState(data) // since initial value nya si data
  return (
    <div className="App">
     <h1>Things To Do</h1>
     {
      tasks.map((task) => {
        return <div key={task.id}>{task.task}</div>
      })
     }
    
    </div>
  );
}

export default App;
