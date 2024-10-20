import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeBtnState, setInput, updateTodo} from '../features/todo/todoSlice';

const TodoForm = () => {
   
    const dispatch = useDispatch();
    const input = useSelector(state => state.input);
    const updateId = useSelector(state => state.id);
    const btnState = useSelector(state => state.btnState);

    // capture the input value incase of todo update


    const addTodoHandler = (e) => {
      e.preventDefault();
      if(input !== ''){
        if(btnState == 'Add todo'){
          dispatch(addTodo(input));
          dispatch(setInput(''));
        }
        if(btnState == 'Update todo'){
          dispatch(updateTodo({updateId, input}))
          dispatch(changeBtnState('Add todo'));
          dispatch(setInput(''));
        }
      }
    }

    
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => dispatch(setInput(e.target.value))}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      {btnState}
    </button>
  </form>
  )
}

export default TodoForm