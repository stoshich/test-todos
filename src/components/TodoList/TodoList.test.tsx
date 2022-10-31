import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

const items = [
    { id: 1, title: 'todo 1', complete: false },
    { id: 2, title: 'todo 2', complete: true },
    { id: 3, title: 'todo 3', complete: false }
]
const removeTodo = jest.fn()
const toggleTodo = jest.fn()

describe('TodoList component', () => {
    it('Toggle todo works', () => {
        render(<TodoList
            items={items}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
        />)
        userEvent.click(screen.getAllByRole('checkbox')[0])
        userEvent.click(screen.getAllByRole('checkbox')[1])
        expect(toggleTodo).toHaveBeenCalledTimes(2)
        expect(screen.getByText('todo 2')).toHaveClass('point__title completed')
    })
    it('Match snapshot', () => {
        render(<TodoList
            items={items}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
        />)
        expect(screen.getAllByText(/todo/)).toMatchSnapshot()
    })
})