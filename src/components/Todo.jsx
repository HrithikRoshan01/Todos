import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="p-4 m-4 mx-auto md:w-3/4 lg:w-1/2">
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <div className="flex justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500 m-2 px-4 py-2 rounded-lg">
                            <span>{todo.text}</span>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
