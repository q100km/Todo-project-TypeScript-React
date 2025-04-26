import { FC, useState } from 'react'
import Button from './Button'

type FormProps = {
  addNewTodo(inputText: string): void
}

const Form: FC<FormProps> = ({ addNewTodo }) => {
  //
  const [value, setValue] = useState<string>('')

  const currentInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setValue(inputValue)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (value) {
      addNewTodo(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Todo App</h1>
      <input value={value} onChange={currentInputValue} type='text' placeholder='Enter new todo' />
      <Button type={`submit`} title='Добавить Todo'>
        Submit
      </Button>
    </form>
  )
}

export default Form
