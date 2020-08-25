import React, { useEffect } from "react";
import styled from "styled-components";
import CopyShortLink from "./CopyShortLink";
import LinkCopyButton from "./LinkCopyBtn";
import { breakpoint, alignWidth, smallerWidth } from "../Styles";
import { useCopyLink } from "../../hooks/useCopyLink";
import { useLinks } from "../../hooks/useLinks";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const LinkContainer = styled.div`
	position: relative;
	top: -15vh;
	width: ${alignWidth};
	height: min-content;
	margin: auto;
	@media (min-width: ${breakpoint}) {
		width: ${smallerWidth};
		top: -10vh;
	}
`;

const Link = styled.div`
	min-height: 15vh;
	background: #fff;
	width: ${alignWidth};
	padding: 2vh 2vw;
	margin: 2vh 0 2vh 0;
	border-radius: 15px;
	@media (min-width: ${breakpoint}) {
		display: flex;
		align-items: center;
		height: 10vh;
		width: ${smallerWidth};
	}
`;

const FullLink = styled.div`
	flex: 3;
	height: 5vh;
	line-height: 5vh;
	width: 100%;
	overflow-y: auto;
	overflow-x: auto;
	hyphens: none;
	@media (min-width: ${breakpoint}) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const IndexLinks = () => {
	const { links, setLinksFromBrowser } = useLinks();
	const { copiedLink, copyLink } = useCopyLink();
	useEffect(setLinksFromBrowser, []);
	return (
		<TransitionGroup component={LinkContainer}>
			{links.map(({ _id, full }) => (
				<CSSTransition timeout={500} classNames="list-fade" key={_id} appear>
					<Link key={_id} className="link" data-testid="link">
						<FullLink>{full}</FullLink>
						<CopyShortLink shortUrl={_id} />
						<LinkCopyButton
							id={_id}
							copiedLink={copiedLink}
							copyLink={copyLink}
						/>
					</Link>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default IndexLinks;
