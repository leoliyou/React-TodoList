// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Todos from "./Todos"
import NewTodo from "./NewTodo"

function App() {

  const [todos, setTodos] = useState([

    { name: 'read', done: true },
    { name: 'write', done: true },
    { name: 'stay', done: false },
    { name: 'reply', done: true }

  ])

  // const [todo, setTodo] = useState('');

  const handleNewTodo = (todo) => {
    if (!todo){ return}

    const newTodos = todos.concat([{ name: todo, done: false }])
    setTodos(newTodos)


  }


  const toggleDone = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i != index) {
        return todo
      }

      return {name:todo.name , done:!todo.done}
     })
    setTodos(newTodos)

  }


  const totalRemaining = todos.filter((todo)=> {
    return todo.done===false
   }

).length

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <button>totalRemaining:{totalRemaining}</button>
      <NewTodo onNewTodo={(todo) =>handleNewTodo(todo)} />
      <Todos todos={todos} onToggleDone={(i) => toggleDone(i)} />

    </div>
  );
}

export default App;
