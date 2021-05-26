import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTodo } from '../../api';

const Form = ({ setShowModal }) => {
	const colors = ['yellow', 'blue', 'green', 'red', 'purple'];
	const [todoData, setTodoData] = useState({
		title: '',
		description: '',
		color: 'yellow',
		done: false,
	});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		createTodo(todoData);

		setTodoData({
			title: '',
			description: '',
			color: 'yellow',
			done: false,
		});

		setShowModal(false);
	};

	return (
		<div className={`bg-${todoData.color}-100 p-3`}>
			<button
				className='float-right'
				onClick={() => {
					setShowModal(false);
				}}
			>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>
			<form onSubmit={handleSubmit}>
				<div className='text-center'>
					<h1 className='my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200'>
						Create Todo now!
					</h1>
				</div>
				<div className='flex justify-center'>
					{colors.map((color, index) => (
						<button
							key={index}
							className={`bg-${color}-100 border-2 border-${color}-200 p-3 m-1`}
							type='button'
							onClick={() => {
								setTodoData({ ...todoData, color });
							}}
						></button>
					))}
				</div>
				<div className='mb-6'>
					<label
						htmlFor='name'
						className='block mb-2 text-sm text-gray-600 dark:text-gray-400'
					>
						Todo
					</label>
					<input
						type='text'
						name='title'
						placeholder='What to do?'
						required
						className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
						maxLength='50'
						value={todoData.title}
						onChange={(e) => {
							setTodoData({ ...todoData, title: e.target.value });
						}}
					/>
				</div>
				<div className='mb-6'>
					<label
						htmlFor='message'
						className='block mb-2 text-sm text-gray-600 dark:text-gray-400'
					>
						Your Message
					</label>
					<textarea
						rows='5'
						name='message'
						id='message'
						placeholder='Your Message'
						className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
						maxLength='250'
						value={todoData.description}
						onChange={(e) => {
							setTodoData({ ...todoData, description: e.target.value });
						}}
					></textarea>
				</div>
				<div className='mb-6'>
					<button
						type='submit'
						className={`w-full px-3 py-4 text-white bg-${todoData.color}-500 rounded-md focus:bg-${todoData.color}-600 focus:outline-none`}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
