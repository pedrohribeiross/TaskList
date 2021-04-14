import React from 'react';
import { Link } from 'react-router-dom';
import { Container, MessageContainer } from './style';

export default function NotFound() {
	return (
		<Container>
			<MessageContainer>
				<span>404</span>
				<h1>Humm, parece que essa página não existe</h1>
				<br />
				<p>Desculpa. A página que você procura não existe!!</p>
				<br />
				<Link to='/tasks'>Voltar para as Tasks</Link>
			</MessageContainer>
		</Container>
	);
}
