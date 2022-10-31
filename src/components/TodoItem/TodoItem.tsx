import React from 'react'
import { ITodo } from '../../types/data'

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = ({ id, title, complete, removeTodo, toggleTodo }) => {

    return (
        <div className='point'>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
            <span className={complete ? 'point__title completed' : 'point__title'}>{title}</span>
            <button onClick={() => removeTodo(id)}>x</button>
        </div>
    )
}

export default TodoItem