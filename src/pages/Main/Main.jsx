import {Input} from "../../components/Input/Input.jsx";
import styles from './Main.module.scss'
import {useState} from "react";
import {Checkbox} from "../../components/Checkbox/Checkbox.jsx";
import useTodo from "../../store/todo/todo.js";
import {AddTodos} from "../../widgets/AddTodos/AddTodos.jsx";
import {Todo} from "../../widgets/Todo/Todo.jsx";
import {useTodoActions} from "../../feature/todo/todoActions.jsx";

export const Main = () => {

    const [value, setValue] = useState('')

    const { handleCreateNewTodos, handleClearInput } = useTodoActions()

    const { todos } = useTodo()

    const handleValue = (event) => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        if (!value){
            alert('Задача не может быть пустой')
            return
        }
        setValue('')
        handleCreateNewTodos(value)
    }

    const handleClear = () => {
        handleClearInput(setValue)
    }

    return(
        <div className={styles.main}>
            <header className={styles.header}>TODO LIST</header>
            <AddTodos value={value} onChange={handleValue} isBtn={true} onClear={handleClear} onBtnClick={handleClick} />
            <div className={styles.todoContainer}>
                {todos?.map((todo) => {
                    return(
                        <Todo key={todo.id} id={todo.id} label={todo.label} status={todo.status} />
                    )
                })}
            </div>
        </div>

    )
}
