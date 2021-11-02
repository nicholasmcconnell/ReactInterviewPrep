import { render, screen, cleanup } from '@testing-library/react'
import Todo from '../Todo/Todo';

afterEach(() => {
    cleanup();
});


test('should render non completed todo component', () => {
    const todo = { id: 1, title: 'wash dishes', completed: false };

    //Act
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');

    //Assert
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dishes')
    expect(todoElement).toContainHTML('<p>wash dishes</p>')

})

test('should render completed todo component', () => {
    const todo = { id: 2, title: 'wash car', completed: true };

    //Act
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-2');

    //Assert
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash car');
    expect(todoElement).toContainHTML('<h1>wash car</h1>');
})