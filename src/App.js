import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  const [todos,setTodos]=useState([
    'read','write','stay', 'reply'
  ])

  const [todo, setTodo] = useState('');

  const handleClick = () => {
    if (!todo){  return;}

    const newTodos = todos.concat([todo])
    setTodos(newTodos)
    setTodo("");

  }

  const handleChange = (e) => {
    const todo = e.target.value
    setTodo(todo)

  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div>
        <input type="text" onChange={ handleChange} value={todo} />
        <button onClick={ handleClick}>add</button>
      </div>

      {/* <ul>
        <li>read </li>
        <li>write</li>
        <li>listen</li>
      </ul> */}

      <ul>
        {todos.map((todo) => {
          return <li>{ todo}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
