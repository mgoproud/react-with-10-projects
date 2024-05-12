import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeTodoTodo } from '../features/todo/todoSlice';


const Todos = () => {

    const todos = useSelector((state) => state.todos)
console.log(todos)
  return (
    <div className='bg-red-100'>
        <h1 className='bg-red-100 text-black text-2xl font-semibold h-14 py-3'>Todos</h1>
      {todos.map((todo) => (
        <div 
            key={todo.id} 
            className='w-full h-12 flex bg-gray-900 text-white border border-red-400 text-lg font-normal px-2 py-2 my-0.5 rounded-xl tracking-wide'
        >
            <h1 className='flex flex-1'>{todo.text}</h1>
            <button className='flex border-2 border-red-600 rounded-md'>
            ❌
            </button>
        </div>
      ))}
    </div>
  )
}

export default Todos
