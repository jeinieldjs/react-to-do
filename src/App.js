import { useState } from 'react';
import './App.css';
import data from './assets/tasks.json';

function App() {
  return (
    <div className="App">
     <h1>Things To Do</h1>
     {
      data.map((task) => {
        return <div>
          <ul>
            <li key={task.id}>{task.task}</li>
          </ul>
        </div>
      })
     }
    </div>
  );
}

export default App;
