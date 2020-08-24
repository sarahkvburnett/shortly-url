import React from "react";
import styled from "styled-components";
import { red } from "../Styles";
import { Exclamation } from "../Icons";

const ErrorBar = styled.div`
	width: 100%;
	color: ${red};
	padding: 1vh 1vw;
	font-size: smaller;
	width: 100%;
	display: flex;
	align-items: center;
	margin: 3vh 0;
	font-size: inherit;
	div p {
		font-size: smaller;
		margin: 0.5vh 1.5vw;
	}
	border: 1px solid ${red};
	border-radius: 5px;
`;

const Errors = ({ errors }) => {
	return (
		<ErrorBar>
			<Exclamation />
			<div data-testid="errors">
				{errors.map((error, index) => (
					<p key={index}>{error}</p>
				))}
			</div>
		</ErrorBar>
	);
};

export default Errors;
