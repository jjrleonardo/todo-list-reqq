import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { req, useApiGet } from 'react-reqq-lite';

import Todo from '../Todo';
import Button from '../Button';
import Search from '../Search';
import Pagination from '../Pagination';

const Todos = ({ currentId, setCurrentId }) => {
	const todos = useApiGet('todos', []);
	console.log(todos);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchValue, setSearchValue] = useState('');
	const [filter, setFilter] = useState('All');
	const [showDropdown, setShowDropdown] = useState(false);

	const [todosData, setTodosData] = useState(todos);

	let NUM_OF_RECORDS = todosData.length;
	let LIMIT = 11;
	const currentTodo = todosData.slice(
		(currentPage - 1) * LIMIT,
		(currentPage - 1) * LIMIT + LIMIT
	);
	const handleSearch = () => {
		const searchTodo = todos.filter(
			(todo) =>
				todo.title.toLowerCase().includes(searchValue.toLowerCase()) ||
				todo.description.toLowerCase().includes(searchValue.toLowerCase())
		);
		return setTodosData(searchTodo);
	};

	const handleFilter = (filter) => {
		setFilter(filter);
		setShowDropdown(false);
		setCurrentPage(1);
		if (filter === 'In Progress') {
			const inProgress = todos.filter((todo) => !todo.done);
			return setTodosData(inProgress);
		}
		if (filter === 'Done') {
			const done = todos.filter((todo) => todo.done);
			return setTodosData(done);
		} else {
			return setTodosData(todos);
		}
	};

	return (
		<>
			<Search
				handleFilter={handleFilter}
				filter={filter}
				handleSearch={handleSearch}
				setSearchValue={setSearchValue}
				showDropdown={showDropdown}
				setShowDropdown={setShowDropdown}
			/>
			<div className='flex flex-wrap flex-row justify-center items-center m-auto'>
				<Button
					todos={todos}
					setTodosData={setTodosData}
					filter={filter}
					setFilter={setFilter}
				/>
				{currentTodo.map((todo, i) => (
					<Todo
						key={`${i + 1}-todo`}
						todo={todo}
						currentId={currentId}
						setCurrentId={setCurrentId}
					/>
				))}
			</div>
			{NUM_OF_RECORDS > 11 && (
				<Pagination
					setCurrentPage={setCurrentPage}
					totalRecords={NUM_OF_RECORDS}
					pageLimit={LIMIT}
					currentPage={currentPage}
				/>
			)}
		</>
	);
};

export default Todos;
