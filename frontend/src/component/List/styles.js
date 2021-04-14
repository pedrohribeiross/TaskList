import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding: 0 15px;
`;

export const ListTask = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
	padding: 24px 48px;
	background-color: #393e46;
	box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.2);
	border-radius: 10px;

	:hover {
		background-color: #222831;
	}

	font-size: 20px;
	font-weight: bold;
	color: #eee;
	cursor: pointer;
`;

export const ListCheckbox = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

	input {
		display: none;
	}

	.checkbox-label {
		display: block;
		cursor: pointer;
		position: relative;
		width: 28px;
		height: 28px;
		border: 2px solid #eee;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		-webkit-transition: 0.2s ease;
		-moz-transition: 0.2s ease;
		transition: 0.2s ease;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
	}

	.checkbox-label:after {
		position: absolute;
		display: block;
		content: '';
		width: 0px;
		height: 8px;
		top: 4px;
		left: 3px;
		background-color: #00adb5;
		-webkit-transition: 0.1s 0.1s linear;
		-moz-transition: 0.1s 0.1s linear;
		transition: 0.1s 0.1s linear;
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}

	input:checked ~ .checkbox-label:after {
		width: 16px;
		height: 8px;
		top: 10px;
		left: 1px;
		transition-delay: 0s;
		-webkit-transition-delay: 0s;
		-moz-transition-delay: 0s;
	}

	.checkbox-label:before {
		position: absolute;
		display: block;
		content: '';
		width: 0px;
		height: 8px;
		top: 10px;
		left: 14px;
		background-color: #00adb5;
		-webkit-transition: 0.1s linear;
		-moz-transition: 0.1s linear;
		transition: 0.1s linear;
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}

	input:checked ~ .checkbox-label:before {
		width: 24px;
		height: 8px;
		top: 7px;
		left: 6px;
		transition-delay: 0.1s;
		-webkit-transition-delay: 0.1s;
		-moz-transition-delay: 0.1s;
	}

	input:checked ~ span {
		color: #00adb5;
	}

	button {
		width: 34px;
		height: 34px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 20px;
		background-color: #393e46;
		border-radius: 50%;
		border: 2px solid #eee;
		cursor: pointer;
		outline: none;

		:hover {
			background-color: #00adb5;
		}
	}
`;
