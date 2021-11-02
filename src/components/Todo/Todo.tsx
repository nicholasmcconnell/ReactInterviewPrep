import React from 'react';

interface TodoProps {
    todo: {
        id: number,
        title: string,
        completed: boolean
    },
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
    const { id, title, completed } = todo;
    const h1Completed = <h1>{title}</h1>
    const h1NotCompleted = <p>{title}</p>

    const text = completed ? h1Completed : h1NotCompleted;
    return (
        <div data-testid={`todo-${id}`}>{text}</div>
    )
}

export default Todo;