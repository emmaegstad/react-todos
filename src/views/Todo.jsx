import './Todo.css';
import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import { fetchTodos, createToDo, toggleCompleted, deleteTask } from '../services/todos';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const [resp] = await createToDo(task);
      setTodos((prevState) => [...prevState, resp]);
      setTask('');
      setMessage('Task successfully added.');
    } catch {
      setMessage('Oops, please try again.');
    }
  };

  const handleToggle = async (todo) => {
    await toggleCompleted(todo.id, !todo.is_complete);
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...todo, is_complete: !todo.is_complete } : item
    );
    setTodos(updatedTodos);
  };

  const handleDelete = async (todo) => {
    await deleteTask(todo.id);
    const data = await fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="Todo">
      <h1 className="todo-title">To Do List</h1>
      <TodoList
        task={task}
        setTask={setTask}
        todos={todos}
        message={message}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
}
