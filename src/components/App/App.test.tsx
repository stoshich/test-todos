import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('input renders', () => {
    render(<App />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('typing in input works', () => {
    render(<App />)
    expect(screen.queryByDisplayValue('todo_test')).toBeNull()
    userEvent.type(screen.getByRole('textbox'), 'todo_test')
    expect(screen.queryByDisplayValue('todo_test')).toBeInTheDocument()
  })

  it('onChange works', () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'test')
    expect(input).toHaveValue('test')
  })
})
