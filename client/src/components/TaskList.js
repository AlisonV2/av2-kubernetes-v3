import React from 'react';

import './TaskList.css';

function TaskList(props) {
  return (
    <div className="task-container">
      {props.tasks.map((task) => (
        <div className="task-item" key={task.title}>
          <h2>{task.title}</h2>
          <p>{task.text}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
