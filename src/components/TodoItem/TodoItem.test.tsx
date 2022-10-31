import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from './TodoItem';


const toggleTodo = jest.fn()

describe('TodoItem component', () => {
    it('todo item renders', () => {
        const removeTodo = jest.fn()
        const id = 123

        render(<TodoItem
            id={id}
            title={'Test todo'}
            complete={false}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
        />)
        expect(screen.getByText('Test todo')).toBeInTheDocument()
    })
    it('remove todo works', () => {
        const removeTodo = jest.fn(i => i === id)
        const id = 123

        render(<TodoItem
            id={id}
            title={'Test todo'}
            complete={false}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
        />)
        userEvent.click(screen.getByRole('button'))
        expect(removeTodo).toHaveBeenCalledWith(id)
        expect(removeTodo.mock.results[0].value).toBe(true)
    })
})