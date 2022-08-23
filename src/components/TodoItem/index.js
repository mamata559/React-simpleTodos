// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosDetails, deleteTodo} = props
  const {title, id} = todosDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todos-list">
      <p className="para">{title}</p>
      <button onClick={onDeleteTodo} type="button" className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
