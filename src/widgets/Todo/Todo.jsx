import React, {memo, useState} from 'react'
import {Checkbox} from "../../components/Checkbox/Checkbox.jsx";
import styles from './Todo.module.scss'
import edit from '../../assets/edit.svg?react'
import trash from '../../assets/trash.svg?react'
import cancel from '../../assets/cancel.svg?react'
import accept from '../../assets/accept.svg?react'
import {Input} from "../../components/Input/Input.jsx";
import {useTodoActions} from "../../feature/todo/todoActions.jsx";
export const Todo = memo(({ id, label, status }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState(label || '')
    const [warning, setWarning] = useState('')

    const { handleClearInput, handleRemoveTodo, handleChangeLabelTodo, handleChangeStatus, handleOnPressEnter } = useTodoActions()

    const handleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    const handleSetValue = (event) => {
        setWarning('')
        setValue(event.target.value)
    }

    const handleAccept = () => {
        if(!value){
            setWarning('Поле не может быть пустым')
            return
        }

        setIsEdit(false)
        handleChangeLabelTodo(id, value)
    }

    const handleCancel = () => {
        setValue(label)
        setIsEdit(false)
    }

    const handleDelete = () => {
        handleRemoveTodo(id)
    }

    const onChange = () => {
        handleChangeStatus(id)
    }

    const handlePress = (event) => {
        handleOnPressEnter(event, handleAccept)
    }

    const splitValue = () => {
        if(value.length > 50){
            return `${value.slice(0, 47)}...`
        }

        return value
    }

    return(
        <div className={styles.wrapper}>
            {isEdit ?
                (
                    <div>
                        <div className={styles.inputContainer}>
                            <Input className={styles.input} value={value} onChange={handleSetValue} isButton={true}
                                   onClear={() => handleClearInput(setValue)} onKeyPress={handlePress}/>
                            <div className={styles.actionContainer}>
                                <img className={styles.image} src={accept ?? ''} alt='accept' onClick={handleAccept}/>
                                <img className={styles.image} src={cancel ?? ''} alt='cancel' onClick={handleCancel}/>
                            </div>
                        </div>
                        <div style={{color: 'red'}}>{warning}</div>
                    </div>

                )
                :
                (
                    <>
                        <Checkbox className={`${styles.checkbox} ${status && styles.done}`} id={id} label={splitValue()} state={status}
                                  onStateChange={onChange}/>
                        <div className={styles.actionContainer}>
                            <img className={styles.image} src={edit ?? ''} alt='edit' onClick={handleIsEdit}/>
                            <img className={styles.image} src={trash ?? ''} alt='trash' onClick={handleDelete}/>
                        </div>
                    </>
                )
            }

        </div>
    )
})
