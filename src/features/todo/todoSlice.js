import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1 ,text:"How is your day?"}],

}

export const todoSlice = createSlice({
    name:'todo',
    initialState,//we can also delcalre same function here
    reducers: {
        //we get property and function
        //property : function
        // state give u curren all values refer to todo object define above
        //action is values that can be access when argument is recived
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text: action.payload
                //payload is also a object
            }
            state.todos.push(todo)
        },


        removeTodo:(state,action)=>{
             state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },

        // updateTodo:(state,action)=>{
        //     state.todos = state.todos.map((todo)=>{
        //         if(todo.id === action.payload.id){
        //             todo.text = action.payload.text
        //         }
        //     })
        // }

    }

}
)

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer