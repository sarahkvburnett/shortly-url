import React from "react";
import { useLinks } from "../../hooks/useLinks";
import Link from "./DashLink";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const DashLinks = () => {
	const { links } = useLinks();
	return (
		<TransitionGroup component="div">
			{links.map((link) => (
				<CSSTransition
					classNames="list-fade"
					timeout={500}
					key={link._id}
					appear
				>
					<Link key={link._id} link={link} />
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default DashLinks;
