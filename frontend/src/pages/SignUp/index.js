import React, { useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faExclamationCircle,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import { Container, FormContainer, Users, ErrorDiv } from './styles';

function SignUp() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const history = useHistory();

	async function handleSignUp(e) {
		e.preventDefault();

		if (!username || !email || !password) {
			setError('Preencha todos os dados para se cadastrar');
		} else {
			try {
				await api.post('/users', { name: username, email, password });

				history.push('/');
			} catch (err) {
				const mensagem = err.response.data.error;
				console.log(err);
				setError(mensagem);
			}
		}
	}

	return (
		<Container>
			<FormContainer>
				<Users>
					<FontAwesomeIcon icon={faUsers} color='#fff' size='2x' />
				</Users>

				<form onSubmit={handleSignUp}>
					{error && (
						<ErrorDiv>
							<p>
								<FontAwesomeIcon
									icon={faExclamationCircle}
									color='#fff'
									className='exclamation'
								/>
								{error}
							</p>
						</ErrorDiv>
					)}

					<input
						type='text'
						placeholder='Nome do usuário'
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type='email'
						placeholder='Endereço de e-mail'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Senha'
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type='submit'>Cadastrar</button>
					<Link to='/'>Fazer login</Link>
				</form>
			</FormContainer>
		</Container>
	);
}

export default withRouter(SignUp);
