import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todos : [],
        input : '',
        id : '',
        btnState : 'Add todo'
    },
    reducers : {
        addTodo : (state, action) => {
            state.todos.push({id : nanoid(), text : action.payload})
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo) => (
                todo.id === action.payload.updateId ? {...todo, text : action.payload.input} : todo
            ))
        },
        setInput : (state, action) => {
            state.input = action.payload;
        },
        setId : (state, action) => {
            state.id = action.payload
        },
        changeBtnState : (state, action) => {
            state.btnState = action.payload
        }
    }
});

export const {addTodo, deleteTodo, updateTodo, setInput, setId, changeBtnState} = todoSlice.actions;
export default todoSlice.reducer;