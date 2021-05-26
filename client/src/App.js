import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTodos } from './actions/todos';
import { fetchTodos } from './api';
import './App.css';
import Nav from './components/Nav';
import Todos from './components/Todos';

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<>
			<Nav />
			<Todos currentId={currentId} setCurrentId={setCurrentId} />
		</>
	);
};

export default App;
