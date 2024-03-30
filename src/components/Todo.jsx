import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo(){
    

    const todos =  useSelector((state) => state.todos)
    const dispatch = useDispatch()
    return (
         <>
         
        <div className='p-4 m-4 mx-80'>
            <ul className="list-none">
                {todos.map((todo) => (
                    
                    <li style={{ height: `${Math.max(todo.text.length * 1, 40)}px` }} 
                        className=' bg-gradient-to-r from-cyan-500 to-blue-500 m-2 px-4 flex justify-between rounded-lg h-10 items-center ' key = {todo.id}>
                        {todo.text}
                        <button
                        // className='m-4'
                        onClick={()=>dispatch(removeTodo(todo.id))}
                        >   ❌ </button>
                        {/* <button onClick={AddClass} className='border border-gray-300   dark:bg-green-700'  >Update</button> */}
                        
                    </li>   
                ))}
            </ul>
         </div>
         </>
    )
}

export default Todo