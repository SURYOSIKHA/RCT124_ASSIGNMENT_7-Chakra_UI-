import React from 'react';

function TodoItem({ todo, toggleCompletion }) {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' ,padding:'10px'}}>{todo.text}</span>
      <button onClick={() => toggleCompletion(todo.id)}>Toggle Completion</button>
    </li>
  );
}

export default TodoItem;
