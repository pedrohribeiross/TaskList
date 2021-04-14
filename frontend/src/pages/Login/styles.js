import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FormContainer = styled.div`
	width: 350px;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #393e46;
	box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.2);
	border-radius: 10px;

	form {
		height: 50%;
		width: 85%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	form input {
		height: 30px;
		margin-bottom: 15px;
		padding: 0 15px;
		border: none;
		border-bottom: 2px solid #00adb5;
		background-color: #393e46;
		transition: 0.5s;
		font-size: 15px;
		font-family: 'Poppins', sans-serif;
		color: #eeeeee;
	}

	form input::placeholder {
		font-weight: bold;
	}

	form input:focus {
		outline: none;
		border-bottom-color: #eeeeee;
	}

	form button {
		height: 30px;
		background-color: #222831;
		border-radius: 15px;
		border: none;
		font-size: 18px;
		color: #eeeeee;
		transition: 0.5s;
	}

	form button:hover {
		background-color: #00adb5;
	}

	form a {
		text-decoration: none;
		margin-top: 15px;
		color: #00adb5;
		font-weight: bold;
		transition: 0.5s;
	}

	form a:hover {
		color: #eeeeee;
	}
`;

export const Lock = styled.div`
	width: 80px;
	height: 80px;
	background-color: #222831;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 40px;
`;

export const ErrorDiv = styled.div`
	background-color: #222831;
	margin: 10px 0;
	color: #eeeeee;
	font-size: 15px;
	padding: 10px 0;

	.exclamation {
		margin-right: 10px;
	}
`;
