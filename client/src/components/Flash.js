import React from "react";
import styled from "styled-components";
import { greyViolet, violet, grey, breakpoint } from "./Styles";
import { useFlash } from "../hooks/useFlash";

const FlashMsg = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: auto;
	min-width: 50vw;
	z-index: 150;
	background: ${greyViolet};
	padding: 0.5vh 1vw;
	color: ${violet};
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	@media (min-width: ${breakpoint}) {
		min-width: auto;
	}
	border: .5px solid ${grey};
`;

const Flash = () => {
	const { flashMsg, autoHideFlash } = useFlash();
	autoHideFlash();
	return (
		<FlashMsg>
			<p>{flashMsg}</p>
		</FlashMsg>
	);
};

export default Flash;
