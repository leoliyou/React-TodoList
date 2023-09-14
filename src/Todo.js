function Todo({ todo, onClick }) {
    return (
        <li>
            <input type="checkbox"
                onClick={onClick}
                checked={todo.done ? 'checked' : ''}
            />
            { todo.name}
        </li>
    )

}

export default Todo