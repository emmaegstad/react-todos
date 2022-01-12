import React from 'react';
import './TodoList.css';
import TodoItem from '../components/TodoItem';

export default function TodoList({ message, setTask, todos, handleSubmit }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoItem key={todo.task} todo={todo.task} />;
      })}
      <input type="text" onChange={(e) => setTask(e.target.value)}></input>
      <button className="list-submit" onClick={handleSubmit}>
        Submit
      </button>
      <span>{message}</span>
    </div>
  );
}
