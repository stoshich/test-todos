import React, { useState } from 'react'
import { ITodo } from '../types/data'

interface ITodoFilterProps {
    btnId: number;
    setBtnId: (value: React.SetStateAction<number>) => void

}

const TodoFilter: React.FC<ITodoFilterProps> = ({ btnId, setBtnId }) => {
    const buttons = ['All', 'Active', 'Completed']
    const clickHandle = (id: number): void => {
        setBtnId(id)
    }

    return (
        <div className='footer'>
            {buttons.map((title, index) => (
                <button
                    onClick={() => clickHandle(index)}
                    className={index === btnId ? 'btn active' : 'btn'}
                    key={title}>
                    {title}
                </button>
            ))}
        </div>
    )
}

export default TodoFilter