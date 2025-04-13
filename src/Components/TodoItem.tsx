import { FC } from 'react'
import { RiTodoFill, RiDeleteBin5Fill, RiCheckboxFill } from 'react-icons/ri'

type TodoItemProps = {
  todo: {
    id: number
    completed: boolean
    text: string
  }
  handleDelete(): void
  handleComplited(): void
}

const TodoItem: FC<TodoItemProps> = ({ todo, handleDelete, handleComplited }) => {
  const { text, completed } = todo

  const isCompletedTodo = completed ? 'checkBtnA' : 'checkBtn'

  return (
    <div className='todo-item'>
      <RiTodoFill className='todoIcon' />
      <span className='todoText'>{text} </span>
      <div>
        <RiDeleteBin5Fill className='delBtn' onClick={handleDelete}></RiDeleteBin5Fill>
        <RiCheckboxFill className={isCompletedTodo} onClick={handleComplited}></RiCheckboxFill>
      </div>
    </div>
  )
}

export default TodoItem
