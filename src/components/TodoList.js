import React from "react";
export default function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.task}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
