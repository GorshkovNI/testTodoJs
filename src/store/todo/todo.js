import { create } from 'zustand'

const useTodo = create((set) => ({
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],

    addNewTodo: (todo) => set((state) => {
        localStorage.setItem('todos', JSON.stringify([...state.todos, todo]))

        return { todos: [...state.todos, todo] };
    }),

    removeTodo: (id) => set((state) => {
        const todoIndex = state.todos.findIndex((item) => item.id === id)
        if(todoIndex === -1) return state

        const newTodos = [...state.todos]
        newTodos.splice(todoIndex, 1)
        localStorage.setItem('todos', JSON.stringify(newTodos))
        return { todos: newTodos }
    }),

    changeTodo: (id, value) => set((state) => {
        const todoIndex = state.todos.findIndex((item) => item.id === id)
        if(todoIndex === -1) return state

        state.todos[todoIndex].label = value
        localStorage.setItem('todos', JSON.stringify([...state.todos]))
        return state
    }),

    changeStatus: (id) => set((state) => {
        const todoIndex = state.todos.findIndex((item) => item.id === id)
        if(todoIndex === -1) return state

        const newTodos = [...state.todos]
        newTodos[todoIndex].status = !newTodos[todoIndex].status
        localStorage.setItem('todos', JSON.stringify(newTodos))

        return { ...state, todos: newTodos }
    })


}))

export default useTodo
