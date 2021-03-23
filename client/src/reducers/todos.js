const reducers = (todos = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return todos.filter(todo => todo._id !== action.payload);
        case 'UPDATE':
            return todos.map(todo => todo._id === action.payload._id ? action.payload : todo);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...todos, action.payload];
        default:
            return todos;
    }
}

export default reducers;
