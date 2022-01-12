import React from 'react';
import './TodoItem.css';

export default function TodoItem({ todo, handleToggle }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={todo.is_complete} onChange={() => handleToggle(todo)}></input>
      <span>{todo.task}</span>
    </div>
  );
}
