import { FC, ReactNode } from 'react'

type buttonProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  title: string
  type?: 'submit'
}

const Button: FC<buttonProps> = (props) => {
  const { onClick, disabled, title, children, type } = props

  return (
    <button type={type} title={title} onClick={onClick} disabled={disabled} className='btn'>
      {children}
    </button>
  )
}

export default Button
