
import { useSelector } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const name = useSelector((state)=>state.status)

  return (
    <>
    <div className='container h-fit	'>
      <h1 className='font-bold p-4 font-mono text-2xl'>Welcome to TODO !!!</h1>
      <AddTodo/>
      <Todo/>
      </div> 
    </>
  )
}

export default App
