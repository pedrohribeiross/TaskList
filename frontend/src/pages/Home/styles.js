import styled from 'styled-components';

export const Container = styled.div`
	max-width: 980px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding: 25px 0;
`;

export const InputAdd = styled.div`
	width: 100%;
	padding-left: 15px;

	h3 {
		color: #eee;
	}

	span {
		color: #00adb5;
	}

	form {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 50px 0;
	}

	form input {
		height: 50px;
		width: 500px;
		padding-left: 15px;
		border-radius: 25px 0 0 25px;
		border: 2px solid #00adb5;
		border-right: none;
		background-color: #eee;
		transition: 0.5s;
		font-size: 18px;
		font-family: 'Poppins', sans-serif;
		font-weight: bold;
		color: #393e46;
	}

	form input::placeholder {
		font-weight: bold;
	}

	form input:focus {
		outline: none;
	}

	form button {
		height: 50px;
		width: 50px;
		background-color: #393e46;
		border: 2px solid #00adb5;
		border-radius: 0 25px 25px 0;
		font-size: 18px;
		color: #eeeeee;
		transition: 0.5s;
		cursor: pointer;
	}

	form button:hover {
		background-color: #00adb5;
	}
`;

export const MessageTask = styled.div`
	color: #00adb5;
	font-style: italic;
	font-size: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 400px;
	text-align: center;

	.icon {
		margin: 0 10px;
	}
`;
