// // App.js
// import React, { useState } from "react";
// import TodoList from "./TodoList";

// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, task: "Learn React", completed: false },
//     { id: 2, task: "Build a Todo App", completed: false },
//     { id: 3, task: "Deploy to Heroku", completed: false },
//   ]);

//   const handleComplete = (id) => {
//     setTodos((prevTodos) => {
//       const updatedTodos = prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: true } : todo
//       );
//       console.log("Updated Todos:", updatedTodos); // Debugging state update
//       return updatedTodos;
//     });
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <TodoList todos={todos} handleComplete={handleComplete} />
//     </div>
//   );
// };

// export default App;

import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {"title":"Learn React"},
    {"title":"Build a React App"},
    {"title":"Deploy the React app"},
  ]);

  const handleCompleteTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: true,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div id="main">
      <h1>Parent component</h1>
      <ChildComponent todos={todos} handleCompleteTodo={handleCompleteTodo} />
    </div>
  );
}

const ChildComponent = ({ todos, handleCompleteTodo }) => {
  return (
    <div id="child">
      <h2>Child Component</h2>
          {
            todos.map((todo, index) => (
            <li key={index}>
              {todo.title}
              {!todo.completed && (
                <button onClick={() => handleCompleteTodo(index)}>Complete</button>
              )}
            </li>
          ))
          }
    </div>
  );
}

export default App
