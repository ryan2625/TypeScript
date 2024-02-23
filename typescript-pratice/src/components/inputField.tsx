import React, { useState } from 'react'

import "./s.css"

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void
}

const InputF: React.FC<Props> = ({ todo, setTodo, handleAdd } : Props) => {

  return (
    <form action="" className="input" onSubmit={handleAdd}>
      <input type="input" placeholder="Enter a task" className="input__box"
      value = {todo}
      onChange = {
        (e) => setTodo(e.target.value)
      } />
      <button className="input__submit" type="submit">GO</button>
    </form>

  )
}

export default InputF