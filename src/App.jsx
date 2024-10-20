import { useState } from 'react'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <div className='p-12'>
      <h5 className='text-white text-3xl font-semibold text-center'>Todo app with Redux toolkit</h5>
      <TodoForm />
      <Todos />
      </div>
    </>
  )
}

export default App
