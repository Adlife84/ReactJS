import React, { useState } from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./contex";
import AddTodo from './Todo/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, complete: true, title: "Buy bread"},
    { id: 2, complete: false, title: "Buy milk"},
    { id: 3, complete: true, title: "Buy burgers"},
    { id: 4, complete: false, title: "Buy beer"},
  ])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      } return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
       title: title,
       id: Date.now(),
       complete: false 
      }
     ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length? <TodoList todos={todos} onToggle={toggleTodo}/>: <p>not todos</p>}
      </div>
    </Context.Provider>
  )
}

export default App;
