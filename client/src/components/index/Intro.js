import React from "react";
import styled from "styled-components";
import { breakpoint, PrimaryButton, white, alignPadding } from "../Styles";
import image from "../../images/illustration-working.svg";

const IntroWrapper = styled.section`
	height: 100%;
	width: 100vw;
	background: ${white};
	padding-bottom: 15vh;
	@media (min-width: ${breakpoint}) {
		padding-left: ${alignPadding};
		height: 100vh;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
	}
`;
const IntroImg = styled.div`
	width: 100vw;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (min-width: ${breakpoint}) {
		width: 50vw;
	}
	img {
		width: 100%;
	}
`;
const IntroText = styled.div`
	height: auto;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding-bottom: 5vh;
	text-align: center;
	@media (min-width: ${breakpoint}) {
		height: 60vh;
		width: 50vw;
		align-items: flex-start;
		text-align: left;
	}
	p {
		margin-top: 5vh;
		font-size: larger;
	}
	button {
		margin-top: 5vh;
		padding: 3vh 3vw;
	}
`;

const Intro = () => {
	return (
		<IntroWrapper data-testid="home">
			<IntroImg>
				<img src={image} alt="woman working at desk" />
			</IntroImg>
			<IntroText>
				<h1>More than just shorter links</h1>
				<p>
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<PrimaryButton>Get Started</PrimaryButton>
			</IntroText>
		</IntroWrapper>
	);
};

export default Intro;
