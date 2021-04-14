import styled from 'styled-components';

export const Container = styled.div`
	max-width: 980px;
	margin: 0 auto;
	padding: 25px 0;
`;

export const ProfileContainer = styled.div`
	padding: 20px 50px;
	background-color: #393e46;
	box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.2);
	border-radius: 10px;

	.profile {
		padding-bottom: 15px;
		border-bottom: 2px solid #222831;

		h1 {
			color: #00adb5;
		}

		p {
			color: #eee;
			display: flex;
			flex-direction: column;
			font-weight: bold;
		}

		span {
			color: #00adb5;
			margin-left: 15px;
		}
	}

	form {
		padding: 15px 0;
		display: flex;
		flex-direction: column;

		h3 {
			color: #00adb5;
		}

		label {
			color: #eee;
			font-weight: bold;
		}

		input {
			height: 30px;
			margin-bottom: 15px;
			margin-left: 15px;
			padding: 0 15px;
			border: none;
			border-bottom: 2px solid #00adb5;
			background-color: #393e46;
			transition: 0.5s;
			font-size: 15px;
			font-family: 'Poppins', sans-serif;
			color: #eeeeee;
		}

		input::placeholder {
			font-weight: bold;
		}

		input:focus {
			outline: none;
			border-bottom-color: #eeeeee;
		}

		button {
			height: 30px;
			margin: 10px 250px;
			background-color: #222831;
			border-radius: 15px;
			border: none;
			font-size: 18px;
			color: #eeeeee;
			transition: 0.5s;
			cursor: pointer;
		}

		button:hover {
			background-color: #00adb5;
		}
	}
`;

export const ErrorDiv = styled.div`
	width: 75%;
	background-color: #222831;
	margin: 10px 0;
	color: #eeeeee;
	font-size: 15px;
	padding: 15px;

	.exclamation {
		margin-right: 10px;
	}
`;

export const PasswordDiv = styled.div`
	padding: 15px 0;
	display: flex;
	flex-direction: column;

	.areaBtn {
		display: flex;
		justify-content: center;

		.btnPassword {
			width: 250px;
			height: 30px;
			margin: 10px;
			border-radius: 15px;
			border: none;
			font-size: 18px;
			color: #eeeeee;
			transition: 0.5s;
		}

		.cancelBtn {
			width: 250px;
			height: 30px;
			margin: 10px;
			background-color: #393e46;
			border: none;
			font-size: 18px;
			color: #eeeeee;
			transition: 0.5s;
			text-decoration: underline;
			cursor: pointer;
		}

		.cancelBtn:hover {
			background-color: #222831;
		}
	}

	p {
		color: #00adb5;
	}
`;
