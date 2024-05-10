import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    editTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodoContext = () => {
    return useContext(TodoContext)
}