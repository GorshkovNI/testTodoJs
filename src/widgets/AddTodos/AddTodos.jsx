import styles from './AddTodos.module.scss'
import {Input} from "../../components/Input/Input.jsx";
import {Button} from "@chakra-ui/react";
import {useTodoActions} from "../../feature/todo/todoActions.jsx";
export const AddTodos = ({ value, onChange, onClear, isBtn, onBtnClick }) => {

    const { handleOnPressEnter } = useTodoActions()

    const handlePress = (event) => {
        handleOnPressEnter(event, onBtnClick)
    }

    return(
        <div className={styles.wrapper}>
            <Input value={value} onChange={onChange} onClear={onClear} isButton={isBtn} onKeyPress={handlePress} maxLength={50} />
            <Button colorScheme={value ? 'blue' : 'gray'} onClick={onBtnClick} >Добавить</Button>
        </div>
    )
}
