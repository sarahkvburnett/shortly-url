import React from "react";
import styled from "styled-components";
import {
	grey,
	violet,
	alignPadding,
} from "../Styles";
import LinkAdder from "./LinkAdder";
import imgDesktop from "../../images/bg-shorten-desktop.svg";
import imgMobile from "../../images/bg-shorten-mobile.svg";

const ShortenerWrapper = styled.section`
	padding: 0 ${alignPadding};
`;

const Shortener = styled.div`
	background-image: url(${imgMobile});
	background-color: ${violet};
	background-size: cover;
	min-height: 128px;
	margin: auto;
	padding: 2vh 0;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (min-width: 375px) {
		background-image: url(${imgDesktop});
	}
`;

const LinkShortener = ({ bg }) => {
	return (
		<ShortenerWrapper
			style={{
				background: `linear-gradient(to bottom, ${bg} 50%, ${grey} 50%)`,
			}}
		>
			<Shortener>
				<LinkAdder />
			</Shortener>
		</ShortenerWrapper>
	);
};

export default LinkShortener;
