import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import Button from './Components/Button'

export type ToDo = {
  id: number
  completed: boolean
  text: string
}

function App() {
  const [todo, setTodo] = useState<ToDo[]>([])

  const addNewTodo = (inputText: string): void => {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: inputText,
    }
    setTodo([...todo, newTodo])
  }
  //                       Удалить конкретную todo
  const handleDelete = (id: number): void => {
    const filtredArray = todo.filter((todo) => {
      return todo.id !== id
    })
    setTodo(filtredArray)
  }
  //                      Завершить конкретную todo
  const handleComplited = (todoTarget: ToDo): void => {
    setTodo(
      todo.map((oneTodo) => {
        return oneTodo.id === todoTarget.id ? { ...oneTodo, completed: !oneTodo.completed } : oneTodo
      })
    )
  }
  //                     Удалить все завершенные todo
  const handleDeleteOnlyCompleted = (): void => {
    setTodo(
      todo.filter((oneTodo) => {
        return !oneTodo.completed
      })
    )
  }
  //                     Удалить все todo
  const handleDeleteAll = (): void => {
    setTodo([])
  }

  const isTodoListEmpty = !todo.length

  const sumCompletedTodo = todo.reduce((sum: number, todo: ToDo) => {
    return todo.completed ? sum + 1 : sum
  }, 0)

  const hasCompletedTodos = sumCompletedTodo !== 0

  // console.log(todo, 'TODO ARRAY')2

  return (
    <div className='container'>
      <Form addNewTodo={addNewTodo} />

      <Button onClick={handleDeleteAll} disabled={isTodoListEmpty} title={`Удалить все Todo`}>
        delete all
      </Button>

      <Button onClick={handleDeleteOnlyCompleted} disabled={!hasCompletedTodos} title={`Удалить отмеченные Todo`}>
        delete checked
      </Button>

      <TodoList handleComplited={handleComplited} handleDelete={handleDelete} todoArray={todo} />

      {hasCompletedTodos && <h2>Всего Todo завершено: {sumCompletedTodo}</h2>}
    </div>
  )
}

export default App
