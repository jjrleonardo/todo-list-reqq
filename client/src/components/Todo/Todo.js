import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateTodo, deleteTodo } from '../../actions/todos';

const Todo = ({ todo, setCurrentId }) => {
    const [todoData, setTodoData] = useState(todo);
    const dispatch = useDispatch();

    const hanldeUpdate = () => {
        setCurrentId(todo._id);
        setTodoData({...todoData, done: true});
        if (todo.done) {
            dispatch(deleteTodo(todo._id));
        }else{
            dispatch(updateTodo(todo._id, todoData));
        }
    }

    return (
        <>
            <div className={`w-72 h-72 m-4 bg-${todo.color}-100 flex flex-col shadow-lg`}>
                <button onClick={hanldeUpdate} className={`flex self-end p-2 bg-${todo.done?'red':'green'}-500 text-white`}>{todo.done?'Delete':'Done?'}</button>
                <h2 className={`text-2xl m-2 break-all ${todo.done ? 'line-through':''}`}>{ todo.title }</h2>
                <p className={`text-left m-4 break-all ${todo.done ? 'line-through' : ''}`}>{ todo.description }</p>
            </div>
        </>
    )
}

export default Todo;
