import styled from 'styled-components';

export const Container = styled.div`
	max-width: 980px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 25px 0;
`;

export const MessageContainer = styled.div`
	width: 100%;
	padding: 25px 50px;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #393e46;
	box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.2);
	border-radius: 10px;

	span {
		color: #00adb5;
		font-size: 100px;
		font-weight: bold;
	}

	h1 {
		color: #eee;
	}

	p {
		color: #00adb5;
		font-weight: bold;
	}

	a {
		height: 30px;
		padding: 5px 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #222831;
		border-radius: 15px;
		border: none;
		font-size: 18px;
		color: #eeeeee;
		transition: 0.5s;
		text-decoration: none;
	}

	a:hover {
		background-color: #00adb5;
	}
`;
