import React, { ChangeEvent, useState } from 'react';

interface TodoInputProps {
    addNewTodo(todo: string): void,
    deleteTodo(): void
}



const TodoInput: React.FC<TodoInputProps> = ({ addNewTodo, deleteTodo }) => {

    const [todo, setTodo] = useState('');

    const updateTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    const submitTodo = () => {
        //call update state function from props
        addNewTodo(todo);
    }

    const deleteLastTodo = () => {
        ///get from prop
        deleteTodo();
    }
    return (

        <div>
            Enter your Todo:
            <input
                type='text'
                placeholder='Enter your Todo'
                value={todo}
                onChange={updateTodo}
            />

            <button onClick={submitTodo}>Add Todo</button>
            <button onClick={deleteLastTodo}>Delete</button>


        </div>
    )

}

export default TodoInput;