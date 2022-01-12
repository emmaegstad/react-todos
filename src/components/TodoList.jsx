import React from 'react';
import './TodoList.css';
import TodoItem from '../components/TodoItem';

export default function TodoList({ message, task, setTask, todos, handleSubmit, handleToggle }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoItem key={todo.task} todo={todo} handleToggle={handleToggle} />;
      })}
      <input
        className="list-input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button className="list-submit button" onClick={handleSubmit}>
        Submit
      </button>
      <span>{message}</span>
    </div>
  );
}
