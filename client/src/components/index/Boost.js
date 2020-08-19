import React from "react";
import styled from "styled-components";
import { PrimaryButton, white, violet, alignPadding } from "../Styles";
import imgDesktop from "../../images/bg-boost-desktop.svg";
import imgMobile from "../../images/bg-boost-mobile.svg";

const BoostBox = styled.div`
	background: ${violet} url(${imgMobile}) no-repeat;
	width: 100vw;
	height: 300px;
	padding: 2vh ${alignPadding};
	margin: auto;
	color: ${white};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	button {
		border-radius: 30px;
		padding: 2vh 5vw;
		margin-top: 4vh;
	}
	@media (min-width: 375px) {
		background-image: url(${imgDesktop});
		height: 250px;
	}
`;

const Boost = () => {
	return (
		<BoostBox>
			<h2>Boost your links today</h2>
			<PrimaryButton>
				<b>Get Started</b>
			</PrimaryButton>
		</BoostBox>
	);
};

export default Boost;
