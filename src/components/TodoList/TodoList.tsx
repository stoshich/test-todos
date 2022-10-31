import React from 'react'
import { ITodo } from '../../types/data'
import TodoItem from '../TodoItem/TodoItem'

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ items, removeTodo, toggleTodo }) => {
    return (
        <div className='todoList'>
            {items.map(item => (
                <TodoItem
                    key={item.id}
                    {...item}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />))}
        </div>
    )
}

export default TodoList