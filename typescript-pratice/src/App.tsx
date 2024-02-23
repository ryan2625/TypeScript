import React, { useState }  from 'react'
import InputF from "./components/inputField"
import { Todo } from "./model"
import './App.css';

const App: React.FC = () =>  {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  console.log(todo)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos([...todos, {id: Date.now(), todo: todo, isDone:false}])
  }

  return (
    <div className="App">
      <span className="head">Taskify</span>
      <InputF todo={todo} setTodo={setTodo} handleAdd={handleAdd}  /> 
      {
        todos.map((item, index) => (
          <li key={index}>{item.todo}</li>
        ))
      }
    </div>
  );
}

export default App;
