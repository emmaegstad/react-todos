import React from 'react';
import './TodoItem.css';

export default function TodoItem({ todo, handleToggle, handleDelete }) {
  return (
    <div className="TodoItem">
      <div className="active-item">
        <input
          type="checkbox"
          checked={todo.is_complete}
          onChange={() => handleToggle(todo)}
        ></input>
        <span>{todo.task}</span>
      </div>
      <span className="delete" onClick={() => handleDelete(todo)}>
        x
      </span>
    </div>
  );
}
