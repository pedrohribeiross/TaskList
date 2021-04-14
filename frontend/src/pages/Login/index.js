import React, { useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import { login, user } from '../../services/auth';
import { Container, FormContainer, Lock, ErrorDiv } from './styles';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const history = useHistory();

	async function handleLogin(e) {
		e.preventDefault();

		if (!email || !password) {
			setError('Preencha e-mail e senha para continuar!');
		} else {
			try {
				const response = await api.post('/sessions', { email, password });

				login(response.data.token);
				user(response.data.user);

				history.push('/tasks');
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
				<Lock>
					<FontAwesomeIcon icon={faLock} color='#eeeeee' size='2x' />
				</Lock>

				<form onSubmit={handleLogin}>
					{error && (
						<ErrorDiv>
							<p>
								<FontAwesomeIcon
									icon={faExclamationCircle}
									color='#eeeeee'
									className='exclamation'
								/>
								{error}
							</p>
						</ErrorDiv>
					)}

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

					<button type='submit'>Entrar</button>
					<Link to='/signup'>Criar conta grátis</Link>
				</form>
			</FormContainer>
		</Container>
	);
}

export default withRouter(Login);
