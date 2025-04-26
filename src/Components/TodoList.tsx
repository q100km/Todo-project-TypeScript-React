import { FC } from 'react'
import TodoItem from './TodoItem'
import { ToDo } from '../App'

type TodoListProps = {
  todoArray: ToDo[]
  handleDelete(id: number): void
  handleComplited(todo: ToDo): void
}

const TodoList: FC<TodoListProps> = ({ todoArray, handleDelete, handleComplited }) => {
  return (
    <div className='todo-list'>
      {!todoArray.length ? (
        <h2>Todo лист пуст. Добавьте новый Todo</h2>
      ) : (
        todoArray.map((todo) => {
          return (
            <TodoItem
              handleComplited={() => handleComplited(todo)}
              handleDelete={() => handleDelete(todo.id)}
              key={todo.id}
              todo={todo}
            />
          )
        })
      )}
    </div>
  )
}

export default TodoList
