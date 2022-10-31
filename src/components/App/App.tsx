import React, { useState, useRef, useEffect } from 'react'
import { ITodo } from '../../types/data'
import TodoList from '../TodoList/TodoList'
import '../../App.css'
import TodoFilter from '../TodoFilter'

const App: React.FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])
    const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([])
    const [btnId, setBtnId] = useState(0)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    useEffect(() => {
        if (btnId === 1) {
            setFilteredTodos(todos.filter(todo => todo.complete === false))
        } else if (btnId === 2) {
            setFilteredTodos(todos.filter(todo => todo.complete === true))
        } else {
            setFilteredTodos(todos)
        }
    }, [todos, btnId])

    const changeHandle: React.ChangeEventHandler<HTMLInputElement> = e => {
        setValue(e.target.value)
    }

    const keyDownHandle: React.KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Enter') addTodo()
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }
    }

    return (
        <div className="container">
            <div className='wrapper'>
                <div className='title'>Todos</div>
                <div className='main-content'>
                    <div className='input-row'>
                        <input type="text" placeholder='What needs to be done?' value={value} onChange={changeHandle} onKeyDown={keyDownHandle} ref={inputRef} />
                        <button onClick={addTodo}>Add</button>
                    </div>
                    <TodoList items={filteredTodos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                    <TodoFilter btnId={btnId} setBtnId={setBtnId} />
                </div>
            </div>
        </div>
    )
}

export default App