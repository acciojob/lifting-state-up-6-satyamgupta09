// App.js
import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a Todo App", completed: false },
    { id: 3, task: "Deploy to Heroku", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );
      console.log("Updated Todos:", updatedTodos); // Debugging state update
      return updatedTodos;
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
