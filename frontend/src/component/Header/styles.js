import styled from 'styled-components';

export const Container = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #393e46;
	box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 980px;
		width: 100%;
	}

	.logo {
		color: #eeeeee;
		cursor: pointer;
		transition: 0.7s;
		font-size: 36px;
		font-weight: bold;
		text-decoration: none;
	}

	.logo span {
		color: #00adb5;
		cursor: pointer;
		transition: 0.7s;
		font-size: 30px;
		text-decoration: none;
	}
`;

export const AreaButton = styled.div`
	display: flex;

	button {
		height: 40px;
		width: 40px;
		margin: 0 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #393e46;
		border: none;
		border-radius: 20px;
		cursor: pointer;
		transition: 0.5s;
	}

	button:hover {
		background-color: #00adb5;
	}

	.icon {
		color: #eee;
	}
`;
