import React from 'react';
import './TodoItem.css';

export default function TodoItem({ todo }) {
  return (
    <div className="TodoItem">
      <input type="checkbox"></input>
      <span>{todo}</span>
    </div>
  );
}
