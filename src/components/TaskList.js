import React from "react";

const TaskList = props => {
  const styleImportant = {
    color: "gold",
    fontWeight: "bold"
  };

  const list = props.list.map(task => (
    <li key={task.id}>
      <span
        className={task.done ? "done" : null}
        style={task.important ? styleImportant : null}
        onClick={() => props.done(task.id)}
      >
        {task.name}
      </span>
      <i
        onClick={() => props.important(task.id)}
        className="fas fa-star star"
      ></i>
      <i
        onClick={() => props.delete(task.id)}
        className="fas fa-trash trash"
      ></i>
    </li>
  ));

  return (
    <div className="task-list">
      <h2>Task list ({list.length})</h2>
      <ul>
        {list.length > 0 ? (
          list
        ) : (
          <p className="message" style={{ textAlign: "center" }}>
            You have no tasks for today :)
          </p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
