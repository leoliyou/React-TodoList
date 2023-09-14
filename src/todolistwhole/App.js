import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {

  const [todos, setTodos] = useState([

    { name: 'read', done: true },
    { name: 'write', done: true },
    { name: 'stay', done: false },
    { name: 'reply', done: true }

  ])

  const [todo, setTodo] = useState('');

  const handleClick = () => {
    if (!todo){ return;}

    const newTodos = todos.concat([{ name: todo, done: false }])
    setTodos(newTodos)
    setTodo("");

  }

  const handleChange = (e) => {
    const todo = e.target.value
    setTodo(todo)

  }

  const toggleDone = (e, index) => {
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
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={todo}
        />
        <button onClick={handleClick}>add</button>
      </div>
       <ul>
        {todos.map((todo, i) => {
          return (
            <li>
              <input
                type="checkbox"
                onClick={(e) => {
                  toggleDone(e, i);
                }}
                checked={todo.done ? "checked" : ""}
              />
              {todo.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
