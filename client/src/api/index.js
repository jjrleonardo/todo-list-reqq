import axios from 'axios';
import { req } from 'react-reqq-lite';
import { add, destroy, patch } from '../reducers/todos';

const url = 'http://localhost:5000/todos';

export const fetchTodos = () =>
	req.get({
		key: 'todos',
		url: '/todos',
		transform: (data) => {
			return data;
		},
	});
export const createTodo = (newTodo) =>
	req.post({
		key: 'todos',
		url: '/todos',
		payload: newTodo,
		headers: {
			'Content-Type': 'application/json',
		},
		onSuccess: (res) => {
			console.log(res);
			if (res.status === 201) {
				const { response: data } = res;
				req.set('todos', (store) => add(store['todos'], data));
			}
		},
	});
export const updateTodo = (id, updatedTodo) =>
	req.patch({
		key: 'todos',
		url: `/todos/${id}`,
		payload: updatedTodo,
		headers: {
			'Content-Type': 'application/json',
		},
		onSuccess: (res) => {
			if (res.status === 200) {
				const { response: data } = res;
				req.set('todos', (store) => patch(store['todos'], data));
			}
		},
	});
export const deleteTodo = (id) =>
	req.remove({
		key: 'todos',
		url: `/todos/${id}`,
		onSuccess: (res) => {
			if (res.status === 200) {
				req.set('todos', (store) => destroy(store['todos'], id));
			}
		},
	});
