import React from 'react'
import Todoitem from './Todoitem'

const Todolist = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todoitem key={todo.id} title={todo.title} />
      ))}
    </ul>
  )
}

export default Todolist