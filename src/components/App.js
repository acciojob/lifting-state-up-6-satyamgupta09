// import React, { useState } from "react";
// // import "./../styles/App.css";
// import TodoList from "./TodoList";

// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, task: "Learn React", completed: false },
//     { id: 2, task: "Build a Todo App", completed: false },
//     { id: 3, task: "Deploy to Heroku", completed: false },
//   ]);

//   function handleComplete(id) {
//     // console.log("hitting", index);
//     // setTodos((prevTodos) => {
//     //   const updateTodos = [...prevTodos];
//     //   updateTodos[index].completed = true;
//     //   return updateTodos;
//     // });
//     // console.log(todos[index].status);
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) => {
//         return todo.id === id ? { ...todo, completed: true } : todo;
//       })
//     );
//   }

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <TodoList todos={todos} handleComplete={handleComplete} />
//     </div>
//   );
// };

// export default App;
//App.js
import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a Todo App", completed: false },
    { id: 3, task: "Deploy to Heroku", completed: false },
  ]);

  const handleComplete = (id) => {
    // Update the todos state by marking the specific todo as completed
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );
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
