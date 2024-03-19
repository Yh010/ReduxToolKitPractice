import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: 1,
        text: 'todo1'
    }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const newtodo = {
                id: nanoid,
                text: action.payload.text
            }
        } ,
        removeTodo: (state,action) => {
            
        } ,
    }
});