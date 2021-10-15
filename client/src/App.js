import React, { useState, useEffect, useCallback } from 'react';

import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(function () {
    fetch('/api/tasks', {
      headers: {
        'Authorization': 'Bearer abc'
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setTasks(jsonData.tasks);
      });
  }, []);

  useEffect(
    function () {
      fetchTasks();
    },
    [fetchTasks]
  );

  function addTaskHandler(task) {
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer abc',
      },
      body: JSON.stringify(task),
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (resData) {
        console.log(resData);
      });
      window.location.reload();
  }

  return (
    <div className='App'>
      <section className="new-task">
        <NewTask onAddTask={addTaskHandler} />
      </section>
      <section className="tasks">
        <div className="fetch-button">
          <button onClick={fetchTasks}>Fetch Tasks</button>
        </div>
        <TaskList tasks={tasks} />
      </section>
    </div>
  );
}

export default App;
