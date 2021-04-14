import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import List from '../../component/List';
import { getUser } from '../../services/auth';
import { Container, InputAdd, MessageTask } from './styles';

export default function Home() {
	const [tasks, setTasks] = useState('');
	const [list, setList] = useState([]);

	const user = getUser();
	const taskInput = useRef(null);

	useEffect(() => {
		async function loadTask() {
			try {
				const response = await api.get('/tasks');

				setList(response.data);
			} catch (err) {
				console.log(err);
			}
		}

		loadTask();
	}, []);

	async function addItem(e) {
		if (taskInput.current.value !== '') {
			const newItem = {
				task: taskInput.current.value,
			};

			await api.post('/tasks', newItem);
		}

		e.preventDefault();
		setTasks('');
	}

	async function handleCheck(id) {
		try {
			await api.put(`/tasks/${id}`, { check: true });

			const response = await api.get('/tasks');

			setTimeout(() => {
				setList(response.data);
			}, 300);
		} catch (err) {
			console.log(err);
		}
	}

	async function deleteTask(id) {
		try {
			await api.delete(`/tasks/${id}`);

			const response = await api.get('/tasks');

			setList(response.data);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<Container>
			<InputAdd>
				<h3>
					Bem-vindo <span>{user.name}</span>
				</h3>

				<form onSubmit={addItem}>
					<input
						type='text'
						name='task'
						value={tasks}
						onChange={(e) => setTasks(e.target.value)}
						ref={taskInput}
						placeholder='Nova Tarefa?'
					/>

					<button type='submit'>
						<FontAwesomeIcon icon={faPlus} color='#eeeeee' />
					</button>
				</form>
			</InputAdd>

			{list.length === 0 ? (
				<MessageTask>
					<span>
						Clique no <FontAwesomeIcon className='icon' icon={faPlus} color='#00adb5' />{' '}
						para adicionar uma nova tarefa!
					</span>
				</MessageTask>
			) : (
				<List list={list} putTask={handleCheck} deleteTask={deleteTask} />
			)}
		</Container>
	);
}
