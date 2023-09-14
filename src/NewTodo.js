import { useState} from 'react'


function NewTodo({ onNewTodo })  {

    const [todo, setTodo] = useState('')
    const handleClick = () => {
        if (!todo) {
            return
        }
        onNewTodo(todo)
        setTodo('')
    }

      const handleChange = (e) => {
        const todo = e.target.value;
        setTodo(todo);
      };

    return (
        <div>
            <input
          type="text"
          onChange={handleChange}
          value={todo}
        />
        <button onClick={handleClick}>add</button>
       </div>

    )


//   const handleClick = () => {
//     if (!todo) {
//       return;
//     }

//     const newTodos = todos.concat([{ name: todo, done: false }]);
//     setTodos(newTodos);
//     setTodo("");
//   };

}


export default NewTodo