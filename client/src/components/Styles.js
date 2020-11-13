import styled from "styled-components";

//primary colors
export const cyan = "hsl(180, 66%, 49%)";
export const violet = "hsl(257, 27%, 26%)";

//secondary colors
export const red = "hsl(0, 87%, 67%)";

// neutral colors
export const grey = "hsl(0, 0%, 75%)";
export const greyViolet = "hsl(257, 7%, 63%)";
export const darkBlue = "hsl(255, 11%, 22%)";
export const darkViolet = "hsl(260, 8%, 14%)";
export const white = "#FFF";

export const tablet = "500px";
export const desktop = "900px";
export const breakpoint = "900px";

export const alignWidth = "88vw";
export const alignPadding = "6vw";

export const smallerWidth = "80vw";
export const smallerPadding = "5vw";

export const heightPadding = "6vh";

export const Button = styled.button`
	background: none;
	border: none;
	color: ${grey};
	cursor: pointer;
	&:hover {
		color: ${darkViolet};
	}
	a {
		color: inherit;
	}
`;

export const PrimaryButton = styled.button`
	border: none;
	cursor: pointer;
	background: ${cyan};
	border-radius: 15px;
	color: ${white};
	padding: 1vh 2vw;
	a {
		color: ${white};
	}
	&:hover {
		color: ${white};
		opacity: 0.5;
	}
	&:disabled {
		background: ${darkViolet};
	}
`;

export const Load = styled.div`
	height: 50vh;
	background: ${darkViolet};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	p,
	h3 {
		color: ${cyan};
		margin-bottom: 2vh;
	}
`;

export const LoadIcon = styled.div`
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	height: 50px;
	width: 50px;
	border-radius: 50%;
	border: 8px solid ${grey};
	border-top: 8px solid ${cyan};
	animation: spin 2s linear infinite;
`;

export const AuthForm = styled.form`
	margin: 0 2vw;
	width: 96%;
	h3 {
		margin: 1vh 0;
		text-align: center;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (min-width: ${desktop}) {
		padding-bottom: 2vh;
	}
	@media (max-width: ${tablet}) {
		input,
		button,
		label {
			line-height: 2;
		}
	}
`;

export const FormBtn = styled(Button)`
	display: block;
	width: 100%;
	color: ${violet};
	&:hover {
		color: ${cyan};
	}
	margin: 3vh 0;
`;

export const PrimaryFormBtn = styled(PrimaryButton)`
	display: block;
	width: 100%;
	margin: 1vh 0;
	border-radius: 5px;
`;

export const Label = styled.label`
	display: block;
	height: auto;
	width: 100%;
	font-size: smaller;
	color: ${violet};
	margin: 1vh 0;
`;

export const Input = styled.input`
	display: block;
	width: 100%;
	padding: 1vh 1vw;
	margin: 1vh 0;
	border-radius: 5px;
	border: 1px solid ${grey};
	:invalid {
		border: 1px solid ${red};
		outline: 1px solid ${red};
	}
`;

export const LinkModal = styled.form`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	@media (min-width: ${breakpoint}) {
		top: 25vh;
		left: 25vw;
		height: 50vh;
		width: 50vw;
	}
	padding: 1vh 1vw;
	background: ${violet};
	border: 1px solid ${darkViolet};
	color: ${white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	opacity: 1;
	border-radius: 5px;
	h3 {
		text-align: center;
		margin: 2vh 0;
	}
	button {
		padding: 1vh 1vw;
		margin: 1vh 0;
		line-height: 1.5;
	}
	input {
		display: block;
		background: none;
		border: none;
		color: ${white};
		font-size: inherit;
		margin: 0 0.5vw;
		padding: 0 0.5vw;
		min-width: 5vw;
	}
	#update,
	#delete {
		background: ${cyan};
	}
	p {
		color: ${grey};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: 1.5;
		margin: 1vh 0;
	}
`;
