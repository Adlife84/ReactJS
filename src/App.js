import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, complete: false, title: "Buy bread"},
    { id: 2, complete: false, title: "Buy milk"},
    { id: 3, complete: false, title: "Buy burgers"},
    { id: 4, complete: false, title: "Buy beer"},
  ]
  return (
    <div className="wrapper">
      <h1>React tutorial 234</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
