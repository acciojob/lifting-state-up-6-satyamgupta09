import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { task: "Learn React", status: false },
    { task: "Build a React app", status: false },
    { task: "Deploy the React app", status: false },
  ]);

  function handleComplete(index) {
    // console.log("hitting", index);
    setTodos((prevTodos) => {
      const updateTodos = [...prevTodos];
      updateTodos[index].status = true;
      return updateTodos;
    });
    // console.log(todos[index].status);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
