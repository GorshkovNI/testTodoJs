import useTodo from "../../store/todo/todo.js";

export const useTodoActions = () => {
    const { addNewTodo, removeTodo, changeTodo, changeStatus } = useTodo();

    const handleClearInput = (setValue) => {
        setValue('');
    };

    const handleCreateNewTodos = (value) => {
        addNewTodo({
            id: new Date(),
            label: value,
            status: false,
        });
    };

    const handleRemoveTodo = (id) => {
        removeTodo(id)
    };

    const handleChangeLabelTodo = (id, value) => {
        changeTodo(id, value)
    }

    const handleChangeStatus = (id) => {
        changeStatus(id)
    }

    const handleOnPressEnter = (event, fn) => {
        if (event.key === 'Enter') {
            fn();
        }
    }

    return { handleClearInput, handleCreateNewTodos, handleRemoveTodo, handleChangeLabelTodo, handleChangeStatus, handleOnPressEnter };
};
