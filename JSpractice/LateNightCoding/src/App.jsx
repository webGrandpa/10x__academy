import { useEffect, useState } from 'react'
import './App.css'
import Todolist from './components/Todolist'


// const todos = [
//   {id: crypto.randomUUID(),
//      title: 'todo 1'},
//   {id: crypto.randomUUID(),
//      title: 'todo 2'},
//   {id: crypto.randomUUID(),
//      title: 'todo 3'},
//   {id: crypto.randomUUID(),
//      title: 'todo 4'},
//   {id: crypto.randomUUID(),
//      title: 'todo 5'}
// ]

const App = () => {
  const [todoList, setTodoList] = useState([todos])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        const data = await response.json()
        setTodoList(data)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }

    fetchTodos()
  }, [])

  return (
    <div className="App">
      <Todolist todos={todos} />
    </div>
  )
}

export default App
