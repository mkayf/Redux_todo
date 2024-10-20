import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, setInput, setId, changeBtnState } from '../features/todo/todoSlice'

const Todos = () => { 

    const todos = useSelector(state => state.todos);
    const btnState = useSelector(state => state.btnState);
    const dispatch = useDispatch();

    const editTodo = (todoId) => {
      let todoMsg = '';
      todos.forEach((todo) => (
        todo.id === todoId ? todoMsg = todo.text : ''
      ))
      dispatch(setInput(todoMsg));
      dispatch(setId(todoId));
      dispatch(changeBtnState('Update todo'));
    }

  return (
    <>
    <ul className="list-none flex justify-center items-center flex-col mt-4">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-[900px]" key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>

            <div className='btn-divs'>
            <button onClick={() => editTodo(todo.id)}
              className="text-white bg-green-600 border-0 py-1 px-4 focus:outline-none hover:bg-green-700 hover:text-black rounded text-md mr-2">
                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <g>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"/>
                </g>
                </svg>

              </button>

            <button
             onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 hover:text-black rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            </div>
            
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos