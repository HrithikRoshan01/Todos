import React from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo(){

    const [input,setInput] = React.useState('') 
    const dispatch = useDispatch()

    const addToHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
            //dispatch reducer ke help se store me update krta haan
        setInput('')
    }

    return (
        
        <form className="max-w-sm mx-auto" onSubmit={addToHandler}> 
         <div className="flex items-center border-b border-teal-500 py-2">
            <label htmlFor="email" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                </label>
            <input type="text" id="email" aria-describedby="helper-text-explanation" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" 
                placeholder="Enter to do"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                />
            <button
                type='submit'
                className='w-20 h-10 bg-yellow-500 ml-5 mb-2 mt-2 rounded-md' 
            >
                Add
            </button>
            </div>
       

        </form>
        
       
    )
}

export default AddTodo