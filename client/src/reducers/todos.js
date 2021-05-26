const reducers = (todos = [], action) => {
	switch (action.type) {
		case 'DELETE':
			return todos.filter((todo) => todo._id !== action.payload);
		case 'UPDATE':
			return todos.map((todo) =>
				todo._id === action.payload._id ? action.payload : todo
			);
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...todos, action.payload];
		default:
			return todos;
	}
};
export const get = (store) => store.reqq['todos'];
export const add = (store, data) => {
	return [...store, data];
};
export const patch = (store, data) => {
	return store.map((todo) => (todo._id === data._id ? data : todo));
};
export const destroy = (store, id) => {
	return store.filter((todo) => todo._id !== id);
};
export default reducers;
