/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import { getUser, user } from '../../services/auth';
import { Container, ProfileContainer, ErrorDiv, PasswordDiv } from './styles';

export default function Profile() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const storageUser = getUser();

	useEffect(() => {
		async function loadUser() {
			setUsername(storageUser.name);
			setEmail(storageUser.email);
		}

		loadUser();
	}, [storageUser.email, storageUser.name]);

	async function updateUser(e) {
		e.preventDefault();
		if (username === '' || oldPassword === '') {
			setError('Preencha os campos para continuar!');
		} else if (newPassword !== confirmPassword) {
			setError('Senhas não conferem!');
		} else {
			try {
				const dataUser = {
					name: username,
					email,
					oldPassword,
					password: newPassword,
					confirmPassword,
				};

				const response = await api.put('/users', dataUser);
				user(response.data);

				setShowPassword(false);
				setOldPassword('');
				setNewPassword('');
				setConfirmPassword('');
				setError('');
			} catch (err) {
				const mensagem = err.response.data.error;
				console.log(err);
				setError(mensagem);
			}
		}
	}

	return (
		<Container>
			<ProfileContainer>
				<div className='profile'>
					<h1>Perfil</h1>

					<p>
						Nome
						<span>{storageUser.name}</span>
					</p>
					<p>
						Email
						<span>{storageUser.email}</span>
					</p>
				</div>

				<form onSubmit={updateUser}>
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

					<h3>Atualizar Perfil</h3>

					<label htmlFor='name'>Nome</label>
					<input
						id='name'
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

					<label htmlFor='newPassword'>Nova Senha</label>
					<input
						id='newPassword'
						type='password'
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						placeholder='Nova Senha*'
					/>

					<label htmlFor='confirmPassword'>Confirmar Senha</label>
					<input
						id='confirmPassword'
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder='Repetir Senha*'
					/>

					{showPassword && (
						<PasswordDiv>
							<p>Digite a senha para salvar</p>

							<label htmlFor='password'>Senha</label>
							<input
								id='password'
								type='password'
								value={oldPassword}
								onChange={(e) => setOldPassword(e.target.value)}
								placeholder='Senha Atual*'
							/>

							<div className='areaBtn'>
								<button className='btnPassword' type='submit'>
									Salvar
								</button>
								<button
									className='cancelBtn'
									type='button'
									onClick={() => {
										setShowPassword(false);
									}}
								>
									Cancelar
								</button>
							</div>
						</PasswordDiv>
					)}

					{!showPassword && (
						<button
							className='btnPassword'
							type='button'
							onClick={() => {
								setShowPassword(true);
							}}
						>
							Continuar
						</button>
					)}
				</form>
			</ProfileContainer>
		</Container>
	);
}
