import React, { useEffect } from "react";
import styled from "styled-components";
import CopyShortLink from "./CopyShortLink";
import LinkCopyButton from "./LinkCopyBtn";
import { breakpoint, grey, alignPadding } from "../Styles";
import { useCopyLink } from "../../hooks/useCopyLink";
import { useLinks } from "../../hooks/useLinks";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const LinkContainer = styled.div`
	padding: 2vh ${alignPadding};
	height: min-content;
	margin: auto;
	background: ${grey};
`;

const Link = styled.div`
	min-height: 15vh;
	background: #fff;
	padding: 2vh 2vw;
	margin: 2vh 0;
	border-radius: 15px;
	@media (min-width: ${breakpoint}) {
		display: flex;
		align-items: center;
		height: 10vh;
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
