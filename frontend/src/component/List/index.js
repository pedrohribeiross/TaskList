/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Container, ListCheckbox, ListTask } from './styles';

export default function List(props) {
	const { list, putTask, deleteTask } = props;

	return (
		<Container>
			{list.map((item) => (
				<ListTask htmlFor={item.id} key={item.id}>
					<ListCheckbox>
						<input
							type='checkbox'
							id={item.id}
							name={item.task}
							onClick={() => putTask(item.id)}
						/>
						<label className='checkbox-label' htmlFor={item.id} />

						<span>{item.task}</span>

						<button type='button' onClick={() => deleteTask(item.id)}>
							<FontAwesomeIcon icon={faTrash} color='#eeeeee' />
						</button>
					</ListCheckbox>
				</ListTask>
			))}
		</Container>
	);
}
