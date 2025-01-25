import React from "react";
export default function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.task}
            {todo.status ? (
              ""
            ) : (
              <button
                onClick={() => {
                  handleComplete(index);
                }}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
