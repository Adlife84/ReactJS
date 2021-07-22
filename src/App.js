import React, { useState } from 'react';
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, complete: false, title: "Buy bread"},
    { id: 2, complete: false, title: "Buy milk"},
    { id: 3, complete: false, title: "Buy burgers"},
    { id: 4, complete: false, title: "Buy beer"},
  ])

  function toggleTodo(id) {
    console.log(`toggle id: ${id} and state ${todos[id-1].complete}`)
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      } return todo
    }))
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  )
}

export default App;
