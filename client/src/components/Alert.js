import React from "react";
import styled from "styled-components";
import { greyViolet, grey, alignPadding, Button } from "./Styles";

const AlertMsg = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 10vh;
	width: 100vw;
	z-index: 150;
	background: ${greyViolet};
	padding: 1vh ${alignPadding};
	color: ${grey};
	display: flex;
	justify-content: space-between;
	align-items: center;
	button {
		font-size: larger;
	}
`;

const Alert = ({alertMsg, closeAlert}) => {
	return (
		<AlertMsg>
			<p>{alertMsg}</p>
			<Button onClick={closeAlert}>&times;</Button>
		</AlertMsg>
	);
};

export default Alert;
